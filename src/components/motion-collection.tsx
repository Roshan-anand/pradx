"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motionImageSrc, motionSections } from "@/lib/projects";

/**
 * Chunked video: the source reels are split into numbered .bin parts to stay
 * deploy-safe. We fetch + reassemble them only when the visitor presses play,
 * preserving the original supplied quality without a giant initial download.
 */
function ChunkedVideo({
  parts,
  poster,
  posterFit,
  title,
}: {
  parts: string[];
  poster?: string;
  posterFit?: "contain" | "cover";
  title: string;
}) {
  const [source, setSource] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(
    () => () => {
      if (source) URL.revokeObjectURL(source);
    },
    [source],
  );

  async function loadVideo() {
    setError(false);
    setProgress(1);
    try {
      const buffers = [];
      for (let index = 0; index < parts.length; index += 1) {
        const response = await fetch(parts[index]);
        if (!response.ok) throw new Error(`Unable to load reel part ${index + 1}`);
        buffers.push(await response.arrayBuffer());
        setProgress(Math.round(((index + 1) / parts.length) * 100));
      }
      const url = URL.createObjectURL(
        new Blob(buffers, { type: "video/mp4" }),
      );
      setSource(url);
      window.setTimeout(() => videoRef.current?.play().catch(() => {}), 0);
    } catch {
      setProgress(0);
      setError(true);
    }
  }

  if (source) {
    return (
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        src={source}
        aria-label={`${title} reel`}
      />
    );
  }

  return (
    <div
      className={`video-loader${posterFit === "contain" ? " video-loader--contain" : ""}`}
      style={{
        backgroundImage: `linear-gradient(rgba(5,5,5,.28),rgba(5,5,5,.78)), url(${poster})`,
      }}
    >
      <button type="button" onClick={loadVideo} disabled={progress > 0}>
        <span>
          {progress > 0 ? `Loading reel · ${progress}%` : "Load & play reel"}
        </span>
        <small>
          {progress > 0
            ? "Keeping the original supplied quality"
            : "Full-quality source video · loads only on request"}
        </small>
      </button>
      {error && (
        <p role="alert">
          The reel could not be loaded. Please check your connection and try
          again.
        </p>
      )}
    </div>
  );
}

export function MotionCollection() {
  return (
    <div className="motion-collection">
      {motionSections.map((section) => (
        <section className="motion-section" key={section.title}>
          <div className="motion-copy">
            <span className="eyebrow">{section.title}</span>
            <p>{section.description}</p>
          </div>
          {section.parts && (
            <ChunkedVideo
              title={section.title}
              parts={section.parts}
              poster={motionImageSrc(section.poster || section.images[0])}
              posterFit={section.posterFit}
            />
          )}
          <div className="motion-stills">
            {section.images.map((image, index) => (
              <Image
                key={image}
                src={motionImageSrc(image)}
                alt={`${section.title} selected creative ${index + 1}`}
                width={800}
                height={1000}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

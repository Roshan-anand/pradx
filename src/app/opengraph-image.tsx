import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "PRADXCLUSIVE® — Nothing ordinary leaves this house.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const lockup = await readFile(
    join(process.cwd(), "public/assets/pradxclusive-transparent-lockup.png"),
  );
  const lockupDataUri = `data:image/png;base64,${lockup.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "64px 72px",
        backgroundColor: "#0a0a0a",
        color: "#f7f5f0",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* biome-ignore lint/performance/noImgElement: ImageResponse (Satori) requires a plain <img> */}
        <img
          src={lockupDataUri}
          alt=""
          width={110}
          height={76}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            fontSize: 19,
            letterSpacing: "0.28em",
            color: "#888888",
            textTransform: "uppercase",
          }}
        >
          Creative studio · India · Worldwide
        </div>
      </div>

      {/* Middle */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            width: 72,
            height: 6,
            backgroundColor: "#2d7a4f",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 74,
            lineHeight: 1.12,
            fontWeight: 700,
            color: "#f7f5f0",
            maxWidth: 980,
          }}
        >
          Nothing ordinary leaves this house.
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 24,
            lineHeight: 1.5,
            color: "#888888",
            maxWidth: 780,
          }}
        >
          Brand identity, websites, social content and campaigns — built under
          one connected creative direction.
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #1e1e1e",
          paddingTop: 28,
          fontSize: 19,
          letterSpacing: "0.22em",
          color: "#555555",
          textTransform: "uppercase",
        }}
      >
        <span>Founder-led creative studio</span>
        <span>pradxclusive.com</span>
      </div>
    </div>,
    size,
  );
}

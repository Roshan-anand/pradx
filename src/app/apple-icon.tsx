import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const alt = "PRADXCLUSIVE apple icon";

export default async function AppleIcon() {
  const logo = await readFile(
    join(
      process.cwd(),
      "public/assets/pradxclusive-transparent-lockup-192.png",
    ),
  );
  const logoDataUri = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: ImageResponse (Satori) requires a plain <img> */}
      <img
        src={logoDataUri}
        alt=""
        width={128}
        height={122}
        style={{ objectFit: "contain" }}
      />
    </div>,
    size,
  );
}

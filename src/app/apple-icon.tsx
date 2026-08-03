import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logo = await readFile(
    join(process.cwd(), "public/assets/PRADXCLUSIVE_PRIMARY_LOGO_EMERALD.png"),
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
        width={150}
        height={142}
        style={{ objectFit: "contain" }}
      />
    </div>,
    size,
  );
}

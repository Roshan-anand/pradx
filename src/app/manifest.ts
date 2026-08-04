import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PRADXCLUSIVE",
    short_name: "PRADXCLUSIVE",
    description:
      "Brand identity, websites, social content and campaigns — under one connected creative direction.",
    start_url: "/",
    display: "standalone",
    theme_color: "#0a0a0a",
    background_color: "#0a0a0a",
    icons: [
      {
        src: "/assets/pradxclusive-transparent-lockup-640.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

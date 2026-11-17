import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15181a",
          color: "#ffffff",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        {brand.initials}
      </div>
    ),
    size,
  );
}

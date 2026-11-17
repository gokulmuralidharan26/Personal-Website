import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brand, seo } from "@/content/site";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = await readFile(
  join(process.cwd(), "assets/fraunces-latin-400-normal.woff"),
);

/** Social sharing image, generated at build time from content/site.ts. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f7f5f0",
          color: "#15181a",
          fontFamily: "Fraunces",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 32 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "#15181a",
              marginRight: 18,
            }}
          />
          {brand.name}
        </div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, letterSpacing: -2 }}>
          {seo.ogHeadline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#565b59",
            borderTop: "2px solid #d9d5ca",
            paddingTop: 28,
          }}
        >
          {`${brand.role}. ${brand.location}.`}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Fraunces", data: font, style: "normal", weight: 400 }] },
  );
}

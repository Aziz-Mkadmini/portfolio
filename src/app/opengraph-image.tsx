import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link preview shown when the site is shared on WhatsApp, LinkedIn, etc. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0B0A09",
          color: "#F2EEE6",
          backgroundImage:
            "radial-gradient(circle at 88% 18%, rgba(245,165,36,0.38), rgba(245,165,36,0) 46%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: "#F5A524" }}>
          <div
            style={{ width: 14, height: 14, borderRadius: 14, background: "#F5A524", marginRight: 16 }}
          />
          {site.title}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            J’automatise votre business
          </div>
          <div
            style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, color: "#F5A524" }}
          >
            et je développe vos sites & SaaS.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
          <div style={{ display: "flex" }}>{site.name}</div>
          <div style={{ display: "flex", color: "#A39E94" }}>Réponse sous 24 h</div>
        </div>
      </div>
    ),
    size,
  );
}

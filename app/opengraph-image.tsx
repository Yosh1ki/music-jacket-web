import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} landing page`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #fffaf3 0%, #f4efe4 52%, #dff2f3 100%)",
          color: "#111111",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            borderRadius: "36px",
            border: "1px solid rgba(17,17,17,0.06)",
            background: "rgba(255,255,255,0.82)",
            boxShadow: "0 30px 80px rgba(15,23,42,0.10)",
            padding: "48px",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "58%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  fontSize: 20,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "#5d5b57",
                }}
              >
                iPhone Profile Sharing
              </div>
              <div
                style={{
                  fontSize: 78,
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                }}
              >
                CoverPics
              </div>
              <div
                style={{
                  fontSize: 28,
                  lineHeight: 1.5,
                  color: "#4b5563",
                  whiteSpace: "pre-wrap",
                }}
              >
                {"カバー写真でつくる、音楽プロフィール。\n共有 URL をそのまま Web とアプリの入口に。"}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                color: "#0f766e",
                fontSize: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  background: "#0f766e",
                }}
              />
              {siteConfig.domain}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "34%",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {[
              ["夜のプレイリスト", "#11253b", "#ff8ca8"],
              ["静かな朝の一枚", "#0f766e", "#93c5fd"],
              ["雨の日のループ", "#4c1d95", "#f59e0b"],
            ].map(([title, from, to]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  borderRadius: "28px",
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(17,17,17,0.06)",
                  padding: "18px",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 22,
                    background: `linear-gradient(135deg, ${from}, ${to})`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      color: "#6b7280",
                    }}
                  >
                    Shared profile preview
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getPublicProfileByHandle } from "@/lib/profiles";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: Promise<{ handle: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { handle } = await params;
  const profile = await getPublicProfileByHandle(handle);

  if (!profile) {
    notFound();
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #fffaf3 0%, #f4efe4 50%, #dff2f3 100%)",
          padding: "56px",
          color: "#111111",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            borderRadius: "40px",
            background: "rgba(255,255,255,0.82)",
            border: "1px solid rgba(17,17,17,0.06)",
            boxShadow: "0 30px 80px rgba(15,23,42,0.10)",
            padding: "48px",
            justifyContent: "space-between",
            gap: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "60%",
              flexDirection: "column",
              justifyContent: "space-between",
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
                CoverPics Profile
              </div>
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  lineHeight: 0.96,
                  letterSpacing: "-0.05em",
                }}
              >
                {profile.displayName}
              </div>
              <div
                style={{
                  fontSize: 28,
                  color: "#475569",
                }}
              >
                @{profile.handle}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 30,
                  lineHeight: 1.45,
                  color: "#374151",
                  maxWidth: "92%",
                }}
              >
                {profile.bio}
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px" }}>
              {profile.featuredCovers.map((cover) => (
                <div
                  key={cover.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    borderRadius: "24px",
                    background: "rgba(255,255,255,0.88)",
                    border: "1px solid rgba(17,17,17,0.06)",
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 12,
                      background: `linear-gradient(135deg, ${cover.colors.from}, ${cover.colors.to})`,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      fontSize: 20,
                      color: "#475569",
                    }}
                  >
                    {cover.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "32%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 250,
                height: 250,
                borderRadius: 999,
                background: `linear-gradient(135deg, ${profile.avatar.from}, ${profile.avatar.to})`,
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 88,
                fontWeight: 700,
                letterSpacing: "-0.05em",
                boxShadow: "0 18px 50px rgba(15,23,42,0.16)",
              }}
            >
              {profile.avatar.initials}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

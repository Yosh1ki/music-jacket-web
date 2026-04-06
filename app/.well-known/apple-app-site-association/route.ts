import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const aasaPayload = {
  applinks: {
    apps: [],
    details: [
      {
        appID: siteConfig.appIdentifier,
        paths: ["/u/*"],
      },
    ],
  },
};

export async function GET() {
  return new Response(JSON.stringify(aasaPayload, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

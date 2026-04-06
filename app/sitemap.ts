import type { MetadataRoute } from "next";
import { listPublicProfiles } from "@/lib/profiles";
import { getProfileUrl, siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const profiles = await listPublicProfiles();
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified,
    },
    ...profiles.map((profile) => ({
      url: getProfileUrl(profile.handle),
      lastModified,
    })),
  ];
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const defaultOgImagePath = "/opengraph-image";

export const defaultKeywords = [
  "CoverPics",
  "音楽プロフィール",
  "プロフィール共有",
  "ジャケット写真",
  "ジャケ写",
  "カバー写真",
  "写真SNS",
  "album cover",
  "music profile",
  "profile sharing",
] as const;

type CreatePageMetadataArgs = {
  path: string;
  title?: string;
  description?: string;
  imagePath?: string;
};

function getSeoTitle(title?: string) {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.name;
}

export function getDefaultOgImageUrl() {
  return new URL(defaultOgImagePath, siteConfig.url).toString();
}

export function createPageMetadata({
  path,
  title,
  description = siteConfig.description,
  imagePath = defaultOgImagePath,
}: CreatePageMetadataArgs): Metadata {
  const seoTitle = getSeoTitle(title);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: siteConfig.name,
      url: path,
      title: seoTitle,
      description,
      images: [imagePath],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      images: [imagePath],
    },
  };
}

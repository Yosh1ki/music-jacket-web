export const siteConfig = {
  name: "CoverPics",
  domain: "coverpics.app",
  url: "https://coverpics.app",
  description:
    "好きな写真と曲をジャケ写みたいにして共有できるSNS、CoverPicsの紹介ページです。",
  supportEmail: "shirohebi.i@icloud.com",
  operatorName: "CoverPics Team",
  appStoreUrl: "https://apps.apple.com/us/app/coverpics/id6761432324",
  bundleId: "com.yoshiki.music-jacket",
  appIdentifier: "XMJ7UM8U3W.com.yoshiki.music-jacket",
} as const;

export function getProfileUrl(handle: string) {
  return `${siteConfig.url}/u/${handle}`;
}

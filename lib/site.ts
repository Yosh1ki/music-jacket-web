export const siteConfig = {
  name: "CoverPics",
  domain: "coverpics.app",
  url: "https://coverpics.app",
  description:
    "お気に入りのカバー写真と一言をまとめてシェアできる、CoverPics の iOS プロフィール共有ページです。",
  supportEmail: "shirohebi.i@icloud.com",
  operatorName: "CoverPics Team",
  appStoreUrl: "https://apps.apple.com/app/idYOUR_APPLE_APP_ID",
  bundleId: "com.yoshiki.music-jacket",
  appIdentifier: "XMJ7UM8U3W.com.yoshiki.music-jacket",
} as const;

export function getProfileUrl(handle: string) {
  return `${siteConfig.url}/u/${handle}`;
}

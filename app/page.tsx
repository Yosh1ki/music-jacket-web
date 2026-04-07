import type { Metadata } from "next";
import Link from "next/link";
import { OnboardingHeroCarousel } from "@/components/onboarding-hero-carousel";
import { createPageMetadata, getDefaultOgImageUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  title: "CoverPics : ジャケ写風写真投稿SNS",
});

const onboardingCopy = "好きな曲と写真を組み合わせ\n一つの作品にする";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "ja-JP",
    },
    {
      "@type": "MobileApplication",
      name: siteConfig.name,
      operatingSystem: "iOS",
      applicationCategory: "MusicApplication",
      url: siteConfig.url,
      image: getDefaultOgImageUrl(),
      description: siteConfig.description,
      publisher: {
        "@type": "Organization",
        name: siteConfig.operatorName,
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-(--app-black) text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="mx-auto flex min-h-screen w-full max-w-136 flex-col items-center px-6 pb-14 pt-12 md:max-w-184 md:justify-center md:px-8 md:pb-20 md:pt-20">
        <h1 className="[font-family:var(--font-coverpics-title)] text-center text-[clamp(4.1rem,16vw,5.7rem)] font-bold leading-[0.84] tracking-[-0.075em] text-(--coverpics-title) [text-rendering:geometricPrecision]">
          CoverPics
        </h1>

        <div className="mt-10 flex w-full justify-center md:mt-12">
          <OnboardingHeroCarousel />
        </div>

        <p className="mt-8 whitespace-pre-line text-center [font-family:var(--font-app-ui)] text-[clamp(1.8rem,6vw,2.4rem)] font-bold leading-[1.18] tracking-[-0.05em] text-white md:mt-10">
          {onboardingCopy}
        </p>

        <a
          className="mt-10 inline-flex items-center gap-4 border border-(--app-panel-border) bg-(--app-panel-fill) px-5 py-4 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-(--app-panel-highlight)"
          href={siteConfig.appStoreUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="App Store で CoverPics を開く"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-8 w-8 fill-current"
          >
            <path d="M16.72 12.35c.03 3.27 2.87 4.36 2.9 4.37-.02.08-.45 1.57-1.49 3.11-.9 1.33-1.83 2.66-3.3 2.69-1.44.03-1.9-.86-3.55-.86s-2.16.84-3.52.89c-1.41.05-2.49-1.42-3.39-2.74-1.85-2.68-3.27-7.57-1.37-10.9.95-1.63 2.64-2.66 4.48-2.69 1.4-.03 2.72.95 3.55.95.83 0 2.4-1.17 4.04-1 .69.03 2.64.28 3.89 2.1-.1.06-2.32 1.35-2.29 4.08Zm-2.65-7.08c.75-.92 1.26-2.2 1.12-3.47-1.08.04-2.39.72-3.16 1.64-.69.81-1.29 2.11-1.13 3.35 1.21.09 2.43-.61 3.17-1.52Z" />
          </svg>
          <span className="flex flex-col items-start [font-family:var(--font-app-ui)] leading-none">
            <span className="text-[0.64rem] font-semibold tracking-[0.24em] uppercase">
              Download on the
            </span>
            <span className="mt-1 text-[1.45rem] font-semibold tracking-[-0.05em]">
              App Store
            </span>
          </span>
        </a>

        <footer className="mt-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/8 pt-6 text-[0.72rem] font-medium tracking-[0.18em] text-white/58 uppercase">
          <Link
            className="transition-colors duration-200 hover:text-white"
            href="/support"
          >
            サポート
          </Link>
          <Link
            className="transition-colors duration-200 hover:text-white"
            href="/terms"
          >
            利用規約
          </Link>
          <Link
            className="transition-colors duration-200 hover:text-white"
            href="/privacy"
          >
            プライバシーポリシー
          </Link>
        </footer>
      </section>
    </main>
  );
}

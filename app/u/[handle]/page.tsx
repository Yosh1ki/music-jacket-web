import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProfileAvatar } from "@/components/profile-avatar";
import {
  getPublicProfileByHandle,
  listPublicProfileHandles,
} from "@/lib/profiles";
import { getProfileUrl, siteConfig } from "@/lib/site";

export const dynamicParams = false;

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateStaticParams() {
  const handles = await listPublicProfileHandles();
  return handles.map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const profile = await getPublicProfileByHandle(handle);

  if (!profile) {
    notFound();
  }

  const profileUrl = getProfileUrl(profile.handle);
  const title = `${profile.displayName} (@${profile.handle})`;

  return {
    title,
    description: profile.bio,
    alternates: {
      canonical: `/u/${profile.handle}`,
    },
    openGraph: {
      type: "website",
      url: profileUrl,
      title,
      description: profile.bio,
      images: [`/u/${profile.handle}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: profile.bio,
      images: [`/u/${profile.handle}/opengraph-image`],
    },
  };
}

export default async function PublicProfilePage({ params }: Props) {
  const { handle } = await params;
  const profile = await getPublicProfileByHandle(handle);

  if (!profile) {
    notFound();
  }

  const profileUrl = getProfileUrl(profile.handle);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 sm:py-12">
      <Link
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
        href="/"
      >
        ← CoverPics
      </Link>

      <section className="rounded-[2.2rem] border border-black/6 bg-white/84 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.1)] backdrop-blur sm:p-8">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <ProfileAvatar profile={profile} size="lg" />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.24em] text-zinc-500 uppercase">
              Public Profile
            </p>
            <h1 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
              {profile.displayName}
            </h1>
            <p className="text-sm font-medium text-zinc-500 sm:text-base">
              @{profile.handle}
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-zinc-600 sm:text-base">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800"
            href={profileUrl}
          >
            アプリで開く
          </a>
          <a
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-900 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-50"
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            App Storeで入手
          </a>
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(244,239,228,0.9))] p-5">
          <p className="text-xs font-semibold tracking-[0.24em] text-zinc-500 uppercase">
            Web fallback
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            このページ自体が共有 URL の Web fallback です。iPhone
            では同じ URL を Universal Links に割り当てる想定なので、インストール済みならアプリ側のプロフィール表示に引き継げます。
          </p>
          <div className="mt-4 rounded-2xl border border-black/6 bg-white/80 px-4 py-3 text-sm text-zinc-700">
            {profileUrl}
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-zinc-500 uppercase">
            Favorite Covers
          </p>
          {profile.featuredCovers.map((cover) => (
            <div
              key={cover.title}
              className="flex items-center gap-4 rounded-[1.5rem] border border-black/6 bg-white/80 p-4"
            >
              <div
                className="h-14 w-14 shrink-0 rounded-[1.1rem]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${cover.colors.from}, ${cover.colors.to})`,
                }}
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-zinc-950">
                  {cover.title}
                </p>
                <p className="truncate text-sm text-zinc-500">
                  {cover.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

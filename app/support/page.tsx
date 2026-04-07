import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  path: "/support",
  title: "サポート",
  description: "CoverPics のサポート情報、お問い合わせ先、よくあるご案内です。",
});

const supportItems = [
  {
    title: "お問い合わせ",
    body: `CoverPics に関するお問い合わせは ${siteConfig.supportEmail} までご連絡ください。App Review 向けの公開サポート URL としてもこのページを利用できます。`,
  },
  {
    title: "ログイン方法",
    body: "CoverPics は Sign in with Apple と Google Sign-In に対応しています。メールアドレスとパスワードによる独自ログインは提供していません。",
  },
  {
    title: "Apple Music について",
    body: "楽曲検索と再生導線には Apple Music を利用します。投稿自体に音源は埋め込まれず、楽曲再生は Apple Music 側で行われます。",
  },
  {
    title: "権限は必須ですか",
    body: "写真ライブラリ、カメラ、位置情報、通知、追跡許可はいずれも任意です。許可しなくても、フィード閲覧やプロフィール確認などの主要画面は利用できます。",
  },
  {
    title: "アカウント削除",
    body: "アカウント削除はアプリ内の `Settings > アカウント削除` から行えます。",
  },
  {
    title: "安全対策",
    body: "CoverPics では、不適切語フィルタ、通報、ブロック、ミュートなどの UGC 安全対策を提供しています。",
  },
] as const;

export default function SupportPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--app-black)] text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 sm:py-12">
        <Link
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/62 transition-colors hover:text-white"
          href="/"
        >
          ← トップに戻る
        </Link>

        <section className="rounded-[2rem] border border-[var(--app-panel-border)] bg-[var(--app-panel-fill)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur sm:p-8">
          <p className="text-xs font-semibold tracking-[0.24em] text-white/48 uppercase">
            Support
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
            CoverPics サポート
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
            お問い合わせ先と、App Store Connect に入れやすい公開サポート情報をまとめています。
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/42 uppercase">
              Contact
            </p>
            <a
              className="mt-3 inline-flex text-base font-semibold text-white transition-colors hover:text-white/80"
              href={`mailto:${siteConfig.supportEmail}`}
            >
              {siteConfig.supportEmail}
            </a>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/62">
              <Link className="transition-colors hover:text-white" href="/privacy">
                プライバシーポリシー
              </Link>
              <Link className="transition-colors hover:text-white" href="/terms">
                利用規約
              </Link>
            </div>
          </div>

          <div className="mt-8 space-y-0 text-sm leading-7 text-white/72 sm:text-base">
            {supportItems.map((section, index) => (
              <section
                key={section.title}
                className={index === 0 ? "" : "mt-6 border-t border-white/8 pt-6"}
              >
                <h2 className="text-base font-semibold text-white sm:text-lg">
                  {section.title}
                </h2>
                <p className="mt-2 whitespace-pre-line">{section.body}</p>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

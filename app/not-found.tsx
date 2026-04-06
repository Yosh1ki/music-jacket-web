import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[var(--app-black)] text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <div className="w-full rounded-[2.4rem] border border-[var(--app-panel-border)] bg-[var(--app-panel-fill)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur sm:p-12">
          <p className="text-xs font-semibold tracking-[0.24em] text-white/48 uppercase">
          404
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            プロフィールが見つかりません
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">
            URL が間違っているか、まだ公開されていないハンドルです。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center border border-[var(--app-panel-border)] bg-[var(--app-panel-fill)] px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--app-black)]"
              href="/"
            >
              LP に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

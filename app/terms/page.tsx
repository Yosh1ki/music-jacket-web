import type { Metadata } from "next";
import Link from "next/link";
import { legalDocuments } from "@/lib/legal-documents";

export const metadata: Metadata = {
  title: "利用規約",
  description: "CoverPics の利用規約です。",
  alternates: {
    canonical: "/terms",
  },
};

const document = legalDocuments.terms;

export default function TermsPage() {
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
            Terms of Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
            {document.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
            {document.summary}
          </p>
          <p className="mt-3 text-xs font-semibold tracking-[0.18em] text-white/42 uppercase">
            {document.effectiveDateText}
          </p>

          <div className="mt-8 space-y-0 text-sm leading-7 text-white/72 sm:text-base">
            {document.sections.map((section, index) => (
              <section
                key={section.title}
                className={index === 0 ? "" : "mt-6 border-t border-white/8 pt-6"}
              >
                <h2 className="text-base font-semibold text-white sm:text-lg">
                  {section.title}
                </h2>
                <p className="mt-2">{section.body}</p>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

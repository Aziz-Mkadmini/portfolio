import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="min-h-dvh border-t border-white/10 py-32">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/90">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-white">This page is not here.</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
          The link may be broken, or the page may have moved. If you are trying to reach a project
          or inquiry, the fastest path is the homepage.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-white/15 hover:bg-white/10"
        >
          Back to portfolio
        </Link>
      </Container>
    </div>
  );
}

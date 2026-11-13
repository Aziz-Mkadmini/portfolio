import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="min-h-dvh py-40">
      <Container>
        <p className="label text-accent">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink">This page is not here.</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          The link may be broken, or the page may have moved. If you are trying to reach a project
          or inquiry, the fastest path is the homepage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-surface transition-colors hover:bg-ink"
        >
          Back to portfolio
        </Link>
      </Container>
    </div>
  );
}

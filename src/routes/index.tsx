/**
 * PATH: $REPO/src/routes/index.tsx
 */

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    // TODO: Replace boilerplate.
    <main className="flex items-center justify-center h-screen">
      <section>TODO</section>
    </main>
  );
}

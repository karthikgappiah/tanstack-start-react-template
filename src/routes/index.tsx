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
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <section>TODO</section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Yoga Website | Gallery" },
      {
        name: "description",
        content: "Gallery page foundation for a five-page yoga website.",
      },
      { property: "og:title", content: "Yoga Website | Gallery" },
      {
        property: "og:description",
        content: "Gallery page foundation for a five-page yoga website.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: EmptyPage,
});

function EmptyPage() {
  return null;
}

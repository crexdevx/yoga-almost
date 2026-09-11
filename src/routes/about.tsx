import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Yoga Website | About" },
      {
        name: "description",
        content: "About page foundation for a five-page yoga website.",
      },
      { property: "og:title", content: "Yoga Website | About" },
      {
        property: "og:description",
        content: "About page foundation for a five-page yoga website.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: EmptyPage,
});

function EmptyPage() {
  return null;
}

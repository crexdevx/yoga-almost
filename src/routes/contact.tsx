import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Yoga Website | Contact" },
      {
        name: "description",
        content: "Contact page foundation for a five-page yoga website.",
      },
      { property: "og:title", content: "Yoga Website | Contact" },
      {
        property: "og:description",
        content: "Contact page foundation for a five-page yoga website.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: EmptyPage,
});

function EmptyPage() {
  return null;
}

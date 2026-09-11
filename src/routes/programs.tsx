import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import courseYogaPranayama from "@/assets/course-yoga-pranayama.webp";
import courseYogaEducation from "@/assets/course-yoga-education.webp";
import courseDiplomaYoga from "@/assets/course-diploma-yoga.webp";
import courseDiplomaFoundations from "@/assets/course-diploma-foundations.webp";
import courseMeditation from "@/assets/course-meditation.webp";
import courseYogaKids from "@/assets/course-yoga-kids.webp";

const courses = [
  { title: "Yoga & Pranayama", description: "Build a steady practice through mindful movement and conscious breathwork.", image: courseYogaPranayama, alt: "Yoga and pranayama certification course artwork" },
  { title: "Yoga Education", description: "Study the foundations of yoga with guidance from experienced instructors.", image: courseYogaEducation, alt: "Yoga education certification course artwork" },
  { title: "Diploma in Yoga Education", description: "A one-year journey into practice, philosophy, anatomy, and teaching.", image: courseDiplomaYoga, alt: "Diploma in yoga education course artwork" },
  { title: "Diploma Foundations", description: "A practical path into professional yoga education and confident instruction.", image: courseDiplomaFoundations, alt: "Diploma in yoga foundations course artwork" },
  { title: "Meditation Classes", description: "Learn simple, lasting practices for a calmer mind and a balanced life.", image: courseMeditation, alt: "Meditation classes course artwork" },
  { title: "Yoga for Kids", description: "Playful classes that build strength, focus, and confidence in young minds.", image: courseYogaKids, alt: "Yoga for kids course artwork" },
];

export const Route = createFileRoute("/programs")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Our Yoga Courses | North East Yoga" },
      {
        name: "description",
        content: "Explore yoga education, pranayama, diploma, and meditation courses at North East Yoga and Meditation Centre.",
      },
      { property: "og:title", content: "Our Yoga Courses | North East Yoga" },
      {
        property: "og:description",
        content: "Explore yoga education, pranayama, diploma, and meditation courses at North East Yoga and Meditation Centre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <main className="min-h-screen bg-about-canvas px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-courses-accent">Our Courses</p>
          <h1 className="font-serif text-4xl leading-tight text-courses-heading sm:text-5xl lg:text-6xl">Find your path to deeper practice</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-courses-body sm:text-lg sm:leading-8">
            Explore thoughtfully guided programs designed to support your wellbeing, deepen your practice, and grow your confidence as a student or teacher.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <article key={course.title} className="overflow-hidden rounded-[1.25rem] bg-courses-card shadow-sm">
              <img
                src={course.image}
                alt={course.alt}
                className="aspect-square w-full object-cover"
                width={1200}
                height={1200}
                sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
              <div className="p-6">
                <h2 className="font-serif text-2xl text-courses-heading">{course.title}</h2>
                <p className="mt-3 text-sm leading-6 text-courses-body">{course.description}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-courses-link">
                  Ask about this course <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

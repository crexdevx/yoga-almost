import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { FloatingHeader } from "@/components/floating-header";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import pallabiPhoto from "@/assets/pallabi-saikia.webp.asset.json";
import syedPhoto from "@/assets/syed-inamul-hussain.webp.asset.json";
import champMedal from "@/assets/champ-medal-ceremony.webp.asset.json";
import champTeam from "@/assets/champ-team-india.webp.asset.json";
import champAsana from "@/assets/champ-asana-performance.webp.asset.json";
import champSolo from "@/assets/champ-solo-performance.webp.asset.json";
import threeMedals from "@/assets/three-yoga-medals.webp.asset.json";

const teamPhotos = [
  { src: champMedal.url, alt: "Medal ceremony at the 2nd International Yoga Sports Championship" },
  { src: champTeam.url, alt: "Team India with medals and the national flag at the championship" },
];

const medals = [
  { count: "4", label: "Gold", surface: "bg-wa-gold", text: "text-wa-medal-dark" },
  { count: "2", label: "Silver", surface: "bg-wa-silver", text: "text-wa-medal-dark" },
  { count: "1", label: "Bronze", surface: "bg-wa-bronze", text: "text-wa-medal-light" },
];

const recognitions = [
  {
    year: "2018",
    title: "Most Innovative Yoga Health Club",
    body: "India's Most Prominent Fitness Awards",
  },
  {
    year: "2017",
    title: "Patanjali Yoga Lover Award",
    body: "Yoga Society of Kashmir",
  },
  {
    year: "2019 & 2021",
    title: "Yog-Ratan / Yoga Ratna Award",
    body: "Yoga Sports Development Association India",
  },
];

const faqs = [
  {
    q: "Do I need any experience to join?",
    a: "Not at all. Our classes start from the very basics, and instructors adjust every posture to your comfort and ability.",
  },
  {
    q: "Who teaches the classes?",
    a: "Sessions are led by Pallabi Saikia and Syed Inamul Hussain, along with our trained faculty — all nationally and internationally certified.",
  },
  {
    q: "Are the certifications recognised?",
    a: "Yes. Our diploma and teacher training certifications are accredited and accepted for professional yoga instruction.",
  },
  {
    q: "Can children join?",
    a: "Yes. We run dedicated Yoga for Kids batches that build strength, focus, and confidence through playful practice.",
  },
  {
    q: "What should I bring to my first class?",
    a: "Comfortable clothing, a water bottle, and an empty stomach. Mats are available at the centre if you do not have one.",
  },
];

const pallabiHighlights = [
  {
    title: "M.A. in Yoga Therapy",
    body: "Advanced academic training in applying yoga for clinical and physical rehabilitation.",
  },
  {
    title: "International Diploma in Yoga & Naturopathy",
    body: "Certified expertise in natural healing and traditional yogic sciences.",
  },
  {
    title: "Two-Time National Gold Medalist",
    body: "Secured top national honors in 2000 and 2017, including gold at the 22nd National Yoga Competition.",
  },
  {
    title: "Patanjali Yoga Lover Award (2017)",
    body: "Honored internationally by the Yoga Society of Kashmir for outstanding contributions to yoga sports and therapy.",
  },
  {
    title: "Yogathon Gold Certificate",
    body: "Earned this endurance distinction by successfully completing 108 continuous rounds of Surya Namaskar.",
  },
  {
    title: "International Grade “A” Referee",
    body: "Certified at the highest levels to officiate international yoga sports competitions.",
  },
  {
    title: "State-Level Official",
    body: "Official Referee for the 1st All Assam Yoga Convention & Seminar at Sankardev University, Guwahati.",
  },
  {
    title: "Community Leadership",
    body: "Primary instructor for state health initiatives, leading International Yoga Day sessions at the Gauhati Medical College Auditorium.",
  },
];

const syedHighlights = [
  {
    title: "M.Sc. in Yoga & Yogic Science",
    body: "Deep academic grounding in yogic philosophy, science, and applied practice.",
  },
  {
    title: "2017 International Silver Medalist",
    body: "Competed at the 2nd International Yoga Sports Championship and brought home silver for India.",
  },
  {
    title: "International Yoga Sports Referee",
    body: "Certified to officiate at national and international yoga sports events.",
  },
  {
    title: "Program Director & Owner",
    body: "Registered owner and primary operational contact for the centre, guiding its growth and day-to-day mission.",
  },
  {
    title: "Curriculum Overseer",
    body: "Designs and runs the centre's most advanced and specialized programs, including:",
    nested: [
      "Advanced Yoga Teacher's Training Course — preparing the next generation of certified instructors.",
      "Sports Yoga Training Programme — training athletes in Power, Traditional, Artistic, and Rhythmic Yoga for competition.",
    ],
  },
];

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Who Are We | North East Yoga and Meditation Centre" },
      {
        name: "description",
        content:
          "Meet the instructors behind North East Yoga and Meditation Centre — national and international medallists, certified referees, and award-winning teachers in Guwahati.",
      },
      { property: "og:title", content: "Who Are We | North East Yoga and Meditation Centre" },
      {
        property: "og:description",
        content:
          "Instructor accolades, our legacy, international championship wins, and national recognition.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-about-canvas">
      <section className="relative bg-about-navy px-4 pb-16 pt-28 text-about-on-navy sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <FloatingHeader />
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-about-accent">
            North East Yoga and Meditation Centre
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Who Are We
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-about-muted sm:text-base sm:leading-7">
            Key instructor accolades, the journey of our centre, and the achievements that continue
            to shape yoga in North East India.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="pallabi-heading"
        className="bg-wa-beige px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <img
            src={pallabiPhoto.url}
            alt="Pallabi Saikia, Managing Director and Chief Professionalist"
            className="w-full rounded-[2rem] object-cover shadow-2xl"
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <div className="text-wa-beige-foreground">
            <h2 id="pallabi-heading" className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Pallabi Saikia
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-wa-beige-muted">
              Managing Director &amp; Chief Professionalist
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {pallabiHighlights.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-wa-beige-foreground" />
                  <span className="text-sm leading-6 sm:text-base sm:leading-7">
                    <strong className="font-semibold">{item.title}:</strong>{" "}
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="syed-heading"
        className="bg-wa-brown px-4 py-14 text-wa-brown-foreground sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <img
            src={syedPhoto.url}
            alt="Syed Inamul Hussain, Senior Yoga Professional"
            className="w-full rounded-[2rem] object-cover shadow-2xl"
            width={800}
            height={980}
            loading="lazy"
            decoding="async"
          />
          <div>
            <h2 id="syed-heading" className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Syed Inamul Hussain
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-wa-brown-muted">
              Senior Yoga Professional
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {syedHighlights.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-wa-brown-foreground" />
                  <span className="text-sm leading-6 sm:text-base sm:leading-7">
                    <strong className="font-semibold">{item.title}:</strong>{" "}
                    {item.body}
                    {item.nested && (
                      <ul className="mt-2 space-y-1.5 pl-4">
                        {item.nested.map((n) => (
                          <li key={n} className="relative pl-4 text-sm leading-6">
                            <span aria-hidden="true" className="absolute left-0 top-2.5 size-1 rounded-full bg-wa-brown-muted" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="legacy-heading" className="bg-wa-ink px-4 py-16 text-wa-ink-foreground sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 h-px w-16 bg-wa-gold" />
          <h2
            id="legacy-heading"
            className="font-serif text-5xl leading-none sm:text-6xl lg:text-7xl"
          >
            Our Legacy
          </h2>
          <p className="mt-7 text-base font-bold leading-7 text-wa-ink-muted sm:text-lg sm:leading-8">
            What began as a small practice space in Guwahati has grown into one of North East
            India's most respected centres for yoga and meditation. Over the years our students
            and instructors have carried Assam's name to national and international stages,
            while thousands more have found calm, strength, and healing on our mats. Teaching,
            competing, and serving the community remain the three threads of everything we do.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="championship-heading"
        className="bg-wa-ink px-4 pb-16 pt-4 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl text-wa-ink-foreground">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-wa-gold">
              International Championship Sweep — 2017
            </p>
            <h2 id="championship-heading" className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              2nd International Yoga Sports Championship
            </h2>
          </div>

          <img
            src={threeMedals.url}
            alt="Gold, silver, and bronze championship medals"
            className="mx-auto mt-10 aspect-[2/1] w-full max-w-4xl rounded-lg object-cover"
            width={1400}
            height={700}
            loading="lazy"
            decoding="async"
          />

          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-3 gap-2 sm:gap-5">
            {medals.map(({ count, label, surface, text }) => (
              <div
                key={label}
                className={`${surface} ${text} rounded-lg px-2 py-5 text-center sm:py-7`}
              >
                <p className="font-serif text-4xl leading-none sm:text-6xl">{count}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="wa-scroll mt-14 overflow-x-auto pb-4">
            <ul className="flex w-max gap-5">
              {teamPhotos.map((photo) => (
                <li key={photo.src} className="w-[84vw] max-w-2xl shrink-0 sm:w-[38rem]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[16/9] w-full rounded-lg object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </div>
          <h3 className="mt-3 text-center font-serif text-2xl leading-snug sm:text-3xl">
            Representing India at the 2nd International Yoga Sports Championship
          </h3>

          <figure className="mx-auto mt-16 max-w-4xl">
            <img
              src={champAsana.url}
              alt="Himanshu Saikia performing yoga at the 2nd International Yoga Sports Championship"
              className="aspect-[16/9] w-full rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-5 text-center font-serif text-2xl leading-snug sm:text-3xl">
              Our student Himanshu Saikia performing yoga at the 2nd International Yoga Sports Championship
            </figcaption>
          </figure>

          <figure className="mx-auto mt-16 max-w-4xl">
            <img
              src={champSolo.url}
              alt="Student performing artistic yoga at an international championship"
              className="aspect-[16/9] w-full rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-5 text-center font-serif text-2xl leading-snug sm:text-3xl">
              Our student performing artistic pair yoga at the International Championship
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        aria-labelledby="recognition-heading"
        className="bg-courses-card px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2
              id="recognition-heading"
              className="font-serif text-3xl leading-tight text-courses-heading sm:text-4xl lg:text-5xl"
            >
              National &amp; Regional Recognition
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recognitions.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-wa-recognition-border bg-wa-recognition-card p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-serif text-3xl font-bold text-wa-recognition-year sm:text-4xl">
                  {item.year}
                </p>
                <h3 className="mt-3 font-serif text-xl leading-snug text-courses-heading sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-courses-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-wa-pastel px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
          <h2
            id="cta-heading"
            className="font-serif text-2xl leading-tight text-wa-pastel-foreground sm:text-3xl lg:text-4xl"
          >
            A Legacy Built Through Practice, Achievement &amp; Service
          </h2>
          <Button
            asChild
            size="lg"
            className="group mt-8 gap-3 rounded-full bg-about-navy px-7 text-base font-semibold text-about-on-navy hover:bg-about-navy/90"
          >
            <Link to="/programs">
              Explore Our Courses
              <ArrowRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="text-center font-serif text-3xl leading-tight text-courses-heading sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left font-serif text-base text-courses-heading sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-6 text-courses-body sm:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}

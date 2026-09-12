import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Medal, Trophy } from "lucide-react";

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

const championshipPhotos = [
  { src: champMedal.url, alt: "Medal ceremony at the 2nd International Yoga Sports Championship" },
  { src: champTeam.url, alt: "Team India with medals and the national flag at the championship" },
  { src: champAsana.url, alt: "Young athlete performing an advanced asana on the championship stage" },
  { src: champSolo.url, alt: "Solo artistic yoga performance during the championship finals" },
];

const medals = [
  { icon: Trophy, count: "4", label: "Gold", color: "text-wa-gold" },
  { icon: Medal, count: "2", label: "Silver", color: "text-wa-silver" },
  { icon: Award, count: "1", label: "Bronze", color: "text-wa-bronze" },
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

      <section aria-labelledby="legacy-heading" className="bg-black px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-12 bg-white" />
          <h2
            id="legacy-heading"
            className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Our Legacy
          </h2>
          <p className="mt-5 text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
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
        className="wa-mosaic px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl text-wa-mosaic-foreground">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-wa-mosaic-muted">
              International Championship Sweep — 2017
            </p>
            <h2 id="championship-heading" className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              2nd International Yoga Sports Championship
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
            {medals.map(({ icon: Icon, count, label, color }) => (
              <div
                key={label}
                className="rounded-2xl bg-courses-card/95 px-3 py-6 text-center shadow-xl"
              >
                <Icon aria-hidden="true" className={`mx-auto size-8 ${color}`} />
                <p className="mt-3 font-serif text-3xl text-courses-heading sm:text-4xl">{count}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-courses-body">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="wa-scroll mt-10 overflow-x-auto pb-4">
            <ul className="flex w-max gap-5">
              {championshipPhotos.map((photo) => (
                <li key={photo.src} className="w-[80vw] max-w-md shrink-0 sm:w-[26rem]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[16/9] w-full rounded-2xl object-cover shadow-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-xs text-wa-mosaic-muted">Scroll sideways to see more moments</p>
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
                className="rounded-2xl border border-border bg-courses-card p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-courses-accent">
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

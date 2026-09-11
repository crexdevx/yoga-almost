import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import communityYogaImg from "@/assets/community-yoga-class.webp";
import whyYogaImg from "@/assets/why-yoga-benefits.webp";
import heroPosterImg from "@/assets/yoga-hero-poster.webp";
import courseYogaPranayama from "@/assets/course-yoga-pranayama.webp";
import courseYogaEducation from "@/assets/course-yoga-education.webp";
import courseDiplomaYoga from "@/assets/course-diploma-yoga.webp";
import courseDiplomaFoundations from "@/assets/course-diploma-foundations.webp";
import courseMeditation from "@/assets/course-meditation.webp";
import courseYogaKids from "@/assets/course-yoga-kids.webp";
import newsYogaMeet from "@/assets/news-yoga-meet.webp";
import newsYogaDay from "@/assets/news-yoga-day.webp";
import newsAccreditation from "@/assets/news-accreditation.webp";
import newsTopFive from "@/assets/news-top-five.webp";
import newsAward from "@/assets/news-award.webp";
import newsDirectory from "@/assets/news-directory.webp";
import { Button } from "@/components/ui/button";

const heroWebm = "/yoga-hero.webm";
const heroMp4 = "/yoga-hero.mp4";
import { FloatingHeader } from "@/components/floating-header";

const courses = [
  {
    title: "Yoga & Pranayama",
    description: "Build a steady practice through mindful movement and conscious breathwork.",
    image: courseYogaPranayama,
    alt: "Yoga and pranayama certification course artwork",
  },
  {
    title: "Yoga Education",
    description: "Study the foundations of yoga with guidance from experienced instructors.",
    image: courseYogaEducation,
    alt: "Yoga education certification course artwork",
  },
  {
    title: "Diploma in Yoga Education",
    description: "A one-year journey into practice, philosophy, anatomy, and teaching.",
    image: courseDiplomaYoga,
    alt: "Diploma in yoga education course artwork",
  },
  {
    title: "Diploma Foundations",
    description: "A practical path into professional yoga education and confident instruction.",
    image: courseDiplomaFoundations,
    alt: "Diploma in yoga foundations course artwork",
  },
  {
    title: "Meditation Classes",
    description: "Learn simple, lasting practices for a calmer mind and a balanced life.",
    image: courseMeditation,
    alt: "Meditation classes course artwork",
  },
  {
    title: "Yoga for Kids",
    description: "Playful classes that build strength, focus, and confidence in young minds.",
    image: courseYogaKids,
    alt: "Yoga for kids course artwork",
  },
];

const reviews = [
  {
    name: "Rashmi Rekha",
    text: "🌿 Starting my journey at this yoga center has been truly uplifting. The positive atmosphere and supportive instructors make every session inspiring and refreshing. I'm grateful to be part of this space, where each breath feels like a step toward transformation. Truly, a perfect place to grow in mind, body, and soul.🌸✨🧘‍♀️",
  },
  {
    name: "Nitu Kumar Kalita",
    text: "My son and I have had a wonderful experience at North East Yoga and Meditation Centre. The classes are well-structured, welcoming, and suitable for all ages. The instructors create a warm, positive environment that makes yoga enjoyable for everyone.",
  },
  {
    name: "Bidyut Baishya",
    text: "My daughter is a new learner in this institution & this institution have surely some positive vibes that nurture the body as well as mind. Best wishes for the future. 🌺🌹",
  },
  {
    name: "Bhanita Deka",
    text: "Northeast Yoga & Meditation Centre is truly exceptional. The trainers are highly qualified and bring a wealth of experience to each class. I love the variety of styles offered, from energising flows to the deeply relaxing Restorative sessions.",
  },
  {
    name: "Loni Mahanta",
    text: "North East Yoga and Meditation Centre is an amazing institute. Faculties are well experienced, well behaved and well trained for everyone. A cool environment is in this institute which I got. I will prefer this institute for everyone, all ages included.",
  },
  {
    name: "Prayas Kakoty",
    text: "First day experience was awesome. Yoga Ma'am was so nice and friendly. The entire session was very interactive for me. Looking forward to a long term association with NEYMC.🙏",
  },
  {
    name: "Helena Kherkatary",
    text: "Thank you with all of my heart for your guidance since I joined your course. Being able to commit myself to something so positive on a daily basis is a big thing for me, and your kindness and sensitivity has helped me to do that.",
  },
  {
    name: "Jyoti Hati Barooah",
    text: "Nice place to rejuvenate oneself and instructors are really well experienced and take care with postures with individual attention to all. Love to suggest everybody, especially those who want to change not only for 75 days but for 75 years.🙏",
  },
  {
    name: "Surajita Sarma Goswami",
    text: "Thanking you.. North East Yoga and Meditation Centre is helping me a lot to build my physical and mental strength.",
  },
  {
    name: "Suprava Nath",
    text: "Hii.. I'm Suprava.🧘 I'm glad to express my gratitude and feelings towards Northeast Yoga and Meditation Centre for improving the flexibility in my body and refreshing my mind.",
  },
  {
    name: "Manju Mehta",
    text: "Great learning and experience center. The trainer is exceptional at her job. I have been practicing yoga at her center for the past 5 years and I definitely recommend this to anyone seeking yoga and meditation therapy/practice.",
  },
  {
    name: "Sugandh Sharma",
    text: "The best place to learn yoga around. Very experienced and dedicated instructors who train the students with patience and persistence. Very positive environment and positive aura makes the yoga so relaxing and energising here.",
  },
];

const news = [
  {
    source: "The Assam Tribune",
    title: "National Yoga Sports Meet",
    description:
      "Our 6-member team represented Assam at the national stage — featuring Chief Instructor Pallabi Saikia's national-level accolades and Senior Professional Syed Inamul Hussain receiving the prestigious “Yoga-Ratna” title.",
    image: newsYogaMeet,
    alt: "Illustration of a yoga athlete in a competition pose framed by laurel wreaths",
    href: "https://assamtribune.com/national-yoga-sports-meet",
  },
  {
    source: "The Assam Tribune",
    title: "Enthusiastic participation in Yoga Day celebrations",
    description:
      "International Yoga Day celebrations in Guwahati, including a special session at the Gauhati Medical College Auditorium led by Pallabi Saikia, honoured as “Assam Yoga Samragyee” — Yoga Empress of Assam.",
    image: newsYogaDay,
    alt: "Illustration of a community yoga day celebration at sunrise led by an instructor",
    href: "https://assamtribune.com/enthusiastic-participation-in-yoga-day-celebration",
  },
  {
    source: "Government of Assam",
    title: "Officially Registered & Recognised",
    description:
      "Accredited under the Registrar of Societies, Govt. of Assam, as a recognised health and yoga training organization — featured in local news and directory archives for our meets, workshops, and community health initiatives.",
    image: newsAccreditation,
    alt: "Illustration of a meditating figure beside a golden recognition seal",
    href: "https://www.searchguwahati.com/",
  },
  {
    source: "Enigmatic Horizon",
    title: "Top Five Yoga Centres in Guwahati",
    description:
      "Featured among the top five yoga centres in Guwahati, recognised for specialised instruction in Hatha Yoga, Power Yoga, Sports Yoga and Yogic Therapy under experienced leadership.",
    image: newsTopFive,
    alt: "Illustration of a yogi meditating at sunrise with the Guwahati skyline",
    href: "https://enigmatichorizon.com/top-five-yoga-centres-in-guwahati",
  },
  {
    source: "India's Most Prominent Fitness Awards",
    title: "Most Innovative Yoga Health Club",
    description:
      "Awarded 'Most Innovative Yoga Health Club in Guwahati' at the 2018 industry awards, honouring our unique blend of athletic sports yoga and therapeutic practices.",
    image: newsAward,
    alt: "Illustration of a golden trophy with a meditating yogi figure and laurel wreath",
    href: "https://www.google.com/search?q=India%27s+Most+Prominent+Fitness+Awards+2018+Guwahati+yoga",
  },
  {
    source: "SearchGuwahati",
    title: "Premier Yoga & Meditation Centre",
    description:
      "Listed as a premier centre in Guwahati's featured yoga and meditation archive, highlighting Pallabi Saikia's designation as Assam Yoga Samraggi.",
    image: newsDirectory,
    alt: "Illustration of a meditating figure with Guwahati cityscape and river at sunset",
    href: "https://www.searchguwahati.com/yoga-meditation-centre-in-guwahati/",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North East Yoga and Meditation Centre" },
      {
        name: "description",
        content:
          "North East Yoga and Meditation Centre — quality training for better living. Yoga, meditation and teacher training classes.",
      },
      { property: "og:title", content: "North East Yoga and Meditation Centre" },
      {
        property: "og:description",
        content: "Quality training for better living. Yoga and meditation classes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-about-canvas">
      <section
        aria-label="North East Yoga and Meditation Centre"
        className="relative aspect-[4/3] max-h-[100svh] w-full overflow-hidden bg-hero-sky"
      >
        <video
          className="absolute inset-0 h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPosterImg}
        >
          <source src={heroWebm} type="video/webm" />
          <source src={heroMp4} type="video/mp4" />
        </video>
        <FloatingHeader />
      </section>

      <section aria-labelledby="about-heading" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <article className="about-feature mx-auto w-full max-w-6xl overflow-hidden rounded-t-[1.5rem] shadow-2xl sm:rounded-t-[2rem]">
          <div className="aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
            <img
              src={communityYogaImg}
              alt="A community yoga class practicing together outdoors in Guwahati"
              className="h-full w-full object-cover"
              width={1080}
              height={604}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-feature__body relative bg-about-navy px-6 pb-24 pt-8 text-about-on-navy sm:px-10 sm:pb-24 sm:pt-10 lg:min-h-64 lg:px-14 lg:pb-10 lg:pr-80 lg:pt-10">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-about-accent">
                About Us
              </p>
              <h1 id="about-heading" className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Welcome to our Holistic Sanctuary
              </h1>
              <p className="mt-4 text-sm leading-6 text-about-muted sm:text-base sm:leading-7">
                North East Yoga and Meditation Centre in Guwahati, Assam, is a premier sanctuary
                for holistic well-being and professional growth. Whether you are seeking personal
                healing or aspiring to become a certified instructor, our expert-led programs
                empower you to transform your life. Experience the authentic power of daily
                practices, or build your career with our accredited yoga teacher training and
                diploma certifications.
              </p>
            </div>

            <div className="about-feature__action absolute bottom-0 right-0 z-20 flex h-20 items-center rounded-tl-[2.5rem] bg-about-button pl-8 pr-4 sm:h-20 sm:pl-10 sm:pr-6 lg:bottom-0 lg:right-0">
              <Button
                asChild
                size="lg"
                className="group h-auto gap-4 rounded-none bg-transparent p-0 text-base font-bold text-about-button-foreground shadow-none transition-transform duration-300 hover:-translate-y-0.5 hover:bg-transparent focus-visible:ring-about-button sm:text-lg"
              >
                <Link to="/contact">
                  Join the Community
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-about-arrow text-about-on-navy transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-12">
                    <ArrowUpRight aria-hidden="true" className="size-6" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </section>

      <section aria-labelledby="why-yoga-heading" className="why-yoga-section px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <img
              src={whyYogaImg}
              alt="Illustration of yoga benefits: strength, flexibility, immunity, calm mind, focus, and better sleep"
              className="mx-auto w-full max-w-lg"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-4 h-1 w-12 bg-why-yoga-accent"></div>
            <h2 id="why-yoga-heading" className="font-serif text-3xl leading-tight text-why-yoga-heading sm:text-4xl lg:text-5xl">
              WHY YOGA?
            </h2>
            <p className="mt-5 text-base leading-7 text-why-yoga-body sm:text-lg sm:leading-8">
              Yoga is more than movement. It is a practice that brings together the body, breath,
              and mind — helping us build strength, flexibility, awareness, and inner balance.
            </p>
            <p className="mt-6 text-base italic leading-7 text-why-yoga-tagline sm:text-lg sm:leading-8">
              Move with awareness. Breathe with purpose. Live with balance.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-us-heading" className="why-us-section px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-why-yoga-accent">
            Why Choose Us
          </p>
          <h2 id="why-us-heading" className="font-serif text-3xl leading-tight text-why-yoga-heading sm:text-4xl lg:text-5xl">
            A Space to Grow, Heal & Transform
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-why-yoga-body sm:text-lg sm:leading-8">
            At Northeast Yoga and Meditation Centre, we believe yoga is more than a practice—it is
            a journey toward greater balance, awareness, and well-being. Through authentic yoga and
            meditation practices, experienced guidance, and a supportive environment, we help
            individuals deepen their practice and grow with purpose.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-why-yoga-body sm:text-lg sm:leading-8">
            We are committed to creating a welcoming space where everyone can learn, practice, and
            experience the transformative benefits of yoga.
          </p>

          <Button
            asChild
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-why-cta px-8 text-base font-semibold text-why-cta-text shadow-lg transition-all duration-300 hover:bg-why-cta-hover hover:shadow-xl focus-visible:ring-why-cta sm:h-14 sm:px-10 sm:text-lg"
          >
            <Link to="/about">Who We Are</Link>
          </Button>
        </div>
      </section>

      <section aria-labelledby="courses-heading" className="courses-section overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-courses-accent sm:text-base">
              Our Courses
            </p>
            <h2 id="courses-heading" className="font-serif text-4xl leading-tight text-courses-heading sm:text-5xl lg:text-6xl">
              Learn, practice, transform
            </h2>
          </div>

          <div className="courses-scroll -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {courses.map((course) => (
              <Link
                key={course.title}
                to="/programs"
                className="course-card group w-[min(78vw,18rem)] shrink-0 snap-start overflow-hidden rounded-[1.25rem] bg-courses-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[18.5rem]"
              >
                <img
                  src={course.image}
                  alt={course.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  width={1200}
                  height={1200}
                  sizes="(min-width: 640px) 296px, 78vw"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-5">
                  <h3 className="font-serif text-xl text-courses-heading">{course.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-courses-body">{course.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-courses-link">
                    View course <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}

            <Link
              to="/programs"
              className="course-card group flex w-[min(78vw,18rem)] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-[1.25rem] bg-courses-card p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[18.5rem]"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-about-arrow text-about-on-navy transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight aria-hidden="true" className="size-8" />
              </span>
              <span className="font-serif text-2xl text-courses-heading">Explore more</span>
              <span className="text-sm leading-6 text-courses-body">
                See every course and program we offer
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="reviews-heading" className="reviews-section overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-courses-accent sm:text-base">
              Student Voices
            </p>
            <h2 id="reviews-heading" className="font-serif text-4xl leading-tight text-courses-heading sm:text-5xl lg:text-6xl">
              What our students say
            </h2>
          </div>
        </div>

        <div className="reviews-marquee" aria-label="Student reviews">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((review, i) => (
              <figure
                key={`${review.name}-${i}`}
                aria-hidden={i >= reviews.length ? "true" : undefined}
                className="flex aspect-square w-[min(78vw,18.5rem)] shrink-0 flex-col justify-between rounded-[1.25rem] bg-courses-card p-6 shadow-sm sm:w-[18.5rem]"
              >
                <blockquote className="overflow-hidden text-sm leading-6 text-courses-body">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-4 font-serif text-lg text-courses-heading">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            className="inline-flex h-12 items-center justify-center rounded-full bg-why-cta px-8 text-base font-semibold text-why-cta-text shadow-lg transition-all duration-300 hover:bg-why-cta-hover hover:shadow-xl focus-visible:ring-why-cta sm:h-14 sm:px-10 sm:text-lg"
          >
            <a
              href="https://www.google.com/search?q=North+East+Yoga+and+Meditation+Centre+Guwahati+reviews"
              target="_blank"
              rel="noreferrer noopener"
            >
              Read more reviews
              <ArrowUpRight aria-hidden="true" className="ml-2 size-5" />
            </a>
          </Button>
        </div>
      </section>

      <section aria-labelledby="news-heading" className="news-section overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-courses-accent sm:text-base">
              News & Blog
            </p>
            <h2 id="news-heading" className="font-serif text-4xl leading-tight text-courses-heading sm:text-5xl lg:text-6xl">
              In the headlines
            </h2>
          </div>

          <div className="courses-scroll -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {news.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noreferrer noopener"
                className="course-card group w-[min(78vw,18rem)] shrink-0 snap-start overflow-hidden rounded-[1.25rem] bg-courses-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[18.5rem]"
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  width={1024}
                  height={1024}
                  sizes="(min-width: 640px) 296px, 78vw"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-courses-accent">
                    {article.source}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-courses-heading">{article.title}</h3>
                  <p className="mt-2 line-clamp-4 text-sm leading-6 text-courses-body">{article.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-courses-link">
                    Read More <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

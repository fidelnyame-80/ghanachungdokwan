import Image from "next/image";
import HeroParallax from "./hero-parallax";
import ScrollReveal from "./scroll-reveal";

const benefits = [
  "Practical self-defense",
  "Confidence & discipline",
  "Fitness & mobility",
];

const programs = [
  {
    name: "Kids Taekwondo",
    description: "Room to move, learn, and grow.",
    image: "/taekwondo3.png",
    alt: "Young taekwondo student practicing a high kick.",
    color: "bg-[#EDE8DD]",
    position: "object-center",
  },
  {
    name: "Teens",
    description: "Build skill and trust in yourself.",
    image: "/taekwondo1.jpg",
    alt: "Taekwondo practitioner in a guard stance.",
    color: "bg-[#DDE9F0]",
    position: "object-[center_30%]",
  },
  {
    name: "Adults",
    description: "Find strength in every session.",
    image: "/taekwondo2.jpg",
    alt: "Adult martial artist wearing a black belt.",
    color: "bg-[#EEE0DB]",
    position: "object-[center_30%]",
  },
  {
    name: "Self-Defense Classes",
    description: "Practice for the moments that matter.",
    image: "/taekwondo-hero.png",
    alt: "Two taekwondo practitioners training together.",
    color: "bg-[#E3E2ED]",
    position: "object-center",
  },
];

export default function Home() {
  return (
    <>
    <ScrollReveal />
    <main>
      <section
        data-hero
        aria-labelledby="hero-heading"
        className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden px-6 pt-24 pb-12 text-center sm:pt-32 sm:pb-20"
      >
        <HeroParallax />
        <div className="hero-decor-shell hero-decor-left pointer-events-none absolute -left-10 top-9 -z-10 w-24 sm:-left-16 sm:top-28 sm:w-44 lg:left-0 lg:w-52">
        <svg
          viewBox="0 0 160 200"
          aria-hidden="true"
          className="hero-decor-graphic hero-decor-graphic-left w-full"
          fill="none"
        >
          <path d="M20 25C130-20 180 110 100 175L65 133C112 94 88 53 35 78Z" fill="#F2793D" />
          <path d="m38 24 42 37M68 20l38 49M100 32l25 54M126 54l12 54M139 84l-9 52M137 118l-28 39" stroke="#171717" strokeWidth="2" />
          <path d="m111 4 4 7m19-1-2 8m17 5-7 4" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
        </svg>
        </div>
        <div className="hero-decor-shell hero-decor-right pointer-events-none absolute -right-12 top-44 -z-10 w-24 sm:-right-20 sm:top-48 sm:w-48 lg:-right-8 lg:w-60">
        <svg
          viewBox="0 0 180 210"
          aria-hidden="true"
          className="hero-decor-graphic hero-decor-graphic-right w-full"
          fill="none"
        >
          <path d="M93 10C164-4 190 86 161 157C129 230 22 194 15 128C8 69 40 21 93 10Z" fill="#3976EB" />
          <ellipse cx="91" cy="103" rx="48" ry="86" stroke="#171717" strokeWidth="2" transform="rotate(24 91 103)" />
          <ellipse cx="91" cy="103" rx="34" ry="85" stroke="#171717" strokeWidth="2" transform="rotate(-28 91 103)" />
          <ellipse cx="91" cy="103" rx="77" ry="30" stroke="#171717" strokeWidth="2" transform="rotate(-18 91 103)" />
        </svg>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center">
        <h1
          id="hero-heading"
          className="max-w-5xl text-5xl leading-tight font-[600] tracking-tighter text-balance sm:text-7xl lg:text-8xl"
        >
          <span className="hero-line-mask inline-block whitespace-nowrap align-bottom">
            <span className="hero-line-content hero-line-first inline-block">
              <span className="relative inline-block">
                Self-defense
                <svg
                  viewBox="0 0 240 36"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 left-0 h-7 w-full overflow-visible sm:-bottom-5 sm:h-9"
                >
                  <path
                    d="M3 24C54 9 108 7 153 13c31 4 52 10 72 4m0 0-12 7m12-7-11-6"
                    stroke="#F2793D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hero-arrow-path"
                  />
                </svg>
              </span>{" "}
              is
            </span>
          </span>{" "}
          <span className="hero-line-mask inline-block whitespace-nowrap align-bottom">
            <span className="hero-line-content hero-line-second inline-block">
              not optional
            </span>
          </span>
        </h1>
        <p className="hero-supporting-text mt-5 max-w-sm text-lg leading-relaxed text-black/65 sm:mt-6 sm:max-w-lg sm:text-xl">
          Build confidence. Move with purpose. Learn the skills to protect
          yourself, on and off the mat.
        </p>
        <a
          href="#programs"
          className="hero-cta mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-lg bg-[#171717] px-7 py-3 text-base font-[600] text-white shadow-sm transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Find a class
          <svg className="hero-cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div
          aria-label="Taekwondo photo gallery"
          className="mt-12 flex w-full max-w-4xl items-center justify-center px-3 pt-4 pb-8 sm:mt-16 sm:px-8 sm:pt-6 sm:pb-12"
        >
          {[
            {
              src: "/taekwondo1.jpg",
              alt: "Martial artist wearing a white uniform and red belt in a guard stance.",
              style: "z-10 translate-y-3 -rotate-[8deg]",
            },
            {
              src: "/taekwondo2.jpg",
              alt: "Martial artist wearing a white uniform and black belt in a guard stance.",
              style: "z-20 -ml-[5%] -translate-y-2 rotate-[2deg]",
            },
            {
              src: "/taekwondo3.png",
              alt: "Young martial artist with a yellow belt practicing a high kick in a training studio.",
              style: "z-30 -ml-[5%] translate-y-4 rotate-[9deg]",
            },
          ].map((card) => (
            <div
              key={card.src}
              className={`hero-card-shell relative w-[42%] shrink-0 ${card.style}`}
            >
              <div className="hero-card-parallax">
              <div className="hero-card-motion relative aspect-[2/3] overflow-hidden rounded-xl shadow-[0_12px_28px_-12px_rgba(0,0,0,0.28)] sm:rounded-2xl">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 38vw, (max-width: 1024px) 34vw, 310px"
                  className="object-cover"
                />
              </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
      <section
        aria-labelledby="safety-heading"
        className="w-full pt-0 pb-24 text-center sm:pt-6 sm:pb-32"
      >
        <div data-reveal className="relative isolate w-full px-14 pt-12 pb-16 text-white sm:px-22 sm:pt-14 sm:pb-20">
          <svg
            viewBox="0 0 900 250"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden"
          >
            <defs>
              <filter id="paint-rough-edge" x="-5%" y="-15%" width="110%" height="130%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.025 0.16"
                  numOctaves="2"
                  seed="12"
                  result="noise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="11" />
              </filter>
            </defs>
            <path
              d="M-30 42L12 50L51 44L76 35L111 40L148 29L190 35L221 27L259 34L295 25L330 34L366 27L405 34L449 26L484 33L522 26L563 35L601 25L640 33L679 24L719 33L757 25L797 34L838 29L884 38L930 35L930 194L884 200L846 194L817 202L784 195L748 206L712 198L675 210L638 201L599 211L562 201L523 211L486 202L448 211L411 202L372 210L336 201L298 209L262 200L225 210L187 199L150 208L113 197L78 204L45 193L12 200L-30 194Z"
                fill="#18181B"
              filter="url(#paint-rough-edge)"
            />
            <path
              d="M32 53L67 47L98 52L131 43L166 48L202 40L238 45L274 38L310 45L348 38L385 45L421 39L459 45L497 39L533 46L570 39L608 46L645 39L683 46L721 40L758 47L797 42L862 50M33 194L69 187L106 194L143 185L181 194L217 186L254 194L292 187L329 195L367 187L404 195L442 188L479 196L516 188L554 196L592 188L629 197L667 188L704 197L742 189L780 196L818 189L861 192"
                stroke="#18181B"
              strokeWidth="5"
              strokeLinecap="round"
              opacity=".8"
            />
          </svg>
          <h2
            id="safety-heading"
            className="relative mx-auto max-w-5xl text-5xl leading-[0.9] font-[600] tracking-tighter text-balance sm:text-7xl lg:text-8xl"
          >
            Your Safety Starts With You
          </h2>
          <p className="relative mx-auto mt-5 max-w-sm text-lg leading-relaxed text-white/80 sm:mt-6 sm:max-w-lg sm:text-xl">
            Respond with confidence when it counts.
          </p>
        </div>
      </section>
      <section
        id="why-train"
        aria-labelledby="why-train-heading"
        className="px-6 pb-24 sm:px-8 sm:pb-32"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div
            data-reveal
            aria-label="Taekwondo training photos"
            className="relative mx-auto h-[340px] w-full max-w-[430px] sm:h-[420px] md:max-w-none"
          >
            <svg
              viewBox="0 0 360 300"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute top-[13%] left-[4%] h-[76%] w-[94%] -rotate-6"
            >
              <path
                d="M9 73 104 48 197 57 311 25 343 63 305 84 351 135 306 166 345 213 269 238 157 220 45 268 10 213 41 172 5 134Z"
                fill="#E8BD4C"
              />
            </svg>
            <div className="absolute top-[4%] left-[2%] z-10 h-[53%] w-[47%] -rotate-6 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/taekwondo1.jpg"
                alt="Taekwondo practitioner wearing a red belt."
                fill
                sizes="(max-width: 768px) 47vw, 260px"
                className="object-cover object-[center_30%]"
              />
            </div>
            <div className="absolute top-[11%] right-[2%] z-20 h-[56%] w-[48%] rotate-5 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/taekwondo2.jpg"
                alt="Martial artist in a white uniform and black belt."
                fill
                sizes="(max-width: 768px) 48vw, 270px"
                className="object-cover object-[center_30%]"
              />
            </div>
            <div className="absolute bottom-[2%] left-[27%] z-30 h-[52%] w-[48%] -rotate-3 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/taekwondo3.png"
                alt="Young taekwondo student practicing a high kick."
                fill
                sizes="(max-width: 768px) 48vw, 270px"
                className="object-cover object-[center_35%]"
              />
            </div>
          </div>

          <div data-reveal className="mx-auto w-full max-w-lg text-center md:text-left">
            <span className="text-sm font-[600] tracking-[0.18em] uppercase text-[#AD4C28]">
              Training that stays with you
            </span>
            <h2
              id="why-train-heading"
              className="mt-3 text-5xl leading-[0.95] font-[600] tracking-tighter text-balance sm:text-6xl"
            >
              Why train with us?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-black/65 md:mx-0">
              Training that helps you move with purpose, wherever life takes you.
            </p>
            <div className="mt-10 border-t border-black/20 text-left">
              {benefits.map((benefit, index) => (
                <div
                  data-reveal
                  key={benefit}
                  className="benefit-row grid grid-cols-[2.75rem_1fr] items-center gap-3 border-b border-black/20 py-5"
                >
                  <span className="text-sm text-[#AD4C28]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl leading-tight font-[600] tracking-tight sm:text-3xl">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="programs"
        aria-labelledby="programs-heading"
        className="px-6 pb-28 sm:px-8 sm:pb-36"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-10 text-center sm:mb-14">
            <span className="text-sm font-[600] tracking-[0.18em] uppercase text-[#AD4C28]">
              Find your place on the mat
            </span>
            <h2
              id="programs-heading"
              className="mx-auto mt-3 max-w-3xl text-5xl leading-[0.95] font-[600] tracking-tighter text-balance sm:text-6xl lg:text-7xl"
            >
              Programs / Classes
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {programs.map((program, index) => (
              <article
                data-reveal
                key={program.name}
                className={`program-card grid min-h-44 grid-cols-[38%_1fr] overflow-hidden rounded-2xl sm:min-h-52 ${program.color}`}
              >
                <div className="relative min-h-full">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    sizes="(max-width: 768px) 38vw, 240px"
                    className={`object-cover ${program.position}`}
                  />
                </div>
                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <span className="text-sm font-[600] text-black/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl leading-[1.05] font-[600] tracking-tight sm:text-3xl">
                      {program.name}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-black/65 sm:text-base">
                      {program.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="final-cta-heading"
        className="bg-[#E8E3F2] px-6 py-20 text-center sm:px-8 sm:py-28"
      >
        <div data-reveal className="mx-auto max-w-5xl">
          <span className="text-sm font-[600] tracking-[0.18em] uppercase">
            The first step is yours
          </span>
          <h2
            id="final-cta-heading"
            className="mx-auto mt-5 max-w-4xl text-5xl leading-[0.95] font-[600] tracking-tighter text-balance sm:text-7xl lg:text-8xl"
          >
            Your First Class Could Change More Than You Think.
          </h2>
          <a
            href="#programs"
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-5 rounded-lg bg-[#18181B] px-7 py-3 text-base font-[600] text-white transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18181B]"
          >
            Explore the classes
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>
    <footer className="bg-[#18181B] px-6 py-12 text-white sm:px-8 sm:py-16">
      <div data-reveal className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-9 border-b border-white/20 pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#hero-heading" className="text-2xl tracking-tight">
              ghanachungdokwan
            </a>
            <p className="mt-3 text-white/60">Move with purpose.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3 text-white/80">
            <a href="#why-train" className="hover:text-white">Why train</a>
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#hero-heading" className="hover:text-white">Back to top</a>
          </nav>
        </div>
        <p className="pt-6 text-sm text-white/50">© {new Date().getFullYear()} Ghana Chung Do Kwan</p>
      </div>
    </footer>
    </>
  );
}

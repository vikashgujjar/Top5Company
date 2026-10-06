import Image from "next/image";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Richa Wadhawan",
    content:
      "Future IT Touch has been an invaluable partner for our company. They have helped us to streamline our IT operations, improve our cybersecurity, and save money. Their team of experts is always available to solve our queries and provide support.",
    img: "/images/opt/avatar-1.webp",
  },
  {
    name: "Nitin Rajput",
    content:
      "Future IT Touch is the best IT company that we have ever worked with. They are always on time, on budget, and on target. They have helped us to achieve our IT goals and objectives.",
    img: "/images/opt/avatar-2.webp",
  },
  {
    name: "Gourav Rajput",
    content:
      "Future IT Touch is a true innovator in the IT industry. They are always at the forefront of new technology and have helped us stay ahead of the competition. We are so impressed!",
    img: "/images/opt/avatar-3.webp",
  },
  {
    name: "Vishali",
    content:
      "It's a pleasure to work with Future IT Touch. They are always professional, courteous, and respectful. They take the time to understand our needs and always deliver on their promises.",
  },
  {
    name: "Himanshi Mehra",
    content:
      "Future IT Touch has helped me to grow my business. They implemented new systems and processes that improved our efficiency, productivity, and profitability.",
  },
  {
    name: "Shivam Thakur",
    content:
      "A breath of fresh air in the IT industry. They are honest, transparent, and ethical — always putting our needs first and willing to go the extra mile.",
  },
];

const reviewBadges = [
  { src: "/images/reviews-icon-1..webp", href: "https://g.co/kgs/Xpqu7J", alt: "Google 5 star customer rating" },
  { src: "/images/reviews-icon-2..webp", alt: "Clutch top web developer" },
  { src: "/images/reviews-icon-3..webp", alt: "GoodFirms top company" },
];

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

const ReviewCard = ({ review }) => (
  <figure className="glass relative w-[340px] shrink-0 rounded-3xl p-7 sm:w-[400px]">
    <span aria-hidden className="absolute right-7 top-3 font-display text-7xl leading-none text-white/10">“</span>
    <span role="img" aria-label="5 out of 5 stars" className="stars text-sm text-amber-400" />
    <blockquote className="mt-5 leading-7 text-slate-300">“{review.content}”</blockquote>
    <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
      {review.img ? (
        <Image src={review.img} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
      ) : (
        <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
          {initials(review.name)}
        </span>
      )}
      <span>
        <span className="block font-semibold text-white">{review.name}</span>
        <span className="block text-xs text-slate-500">Verified client</span>
      </span>
    </figcaption>
  </figure>
);

const MarqueeRow = ({ items, reverse }) => (
  <div className="mask-fade-x overflow-hidden">
    <div
      className={`marquee-track flex w-max animate-marquee-slow gap-5 py-2 ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      {[...items, ...items].map((review, i) => (
        <div key={i} className="flex" aria-hidden={i >= items.length}>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="cv-auto relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span className="eyebrow">What our clients say</span>
            <h2 className="section-title mt-5">
              Over <span className="text-gradient">1200+ satisfied clients</span> and growing
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {reviewBadges.map((b) => {
              const img = (
                <Image src={b.src} alt={b.alt} width={130} height={60} className="h-10 w-auto" />
              );
              return (
                <div key={b.src} className="rounded-2xl bg-white px-4 py-2 transition-transform hover:-translate-y-0.5">
                  {b.href ? (
                    <a href={b.href} target="_blank" rel="noopener noreferrer">
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="mt-14 space-y-5">
        <MarqueeRow items={testimonials.slice(0, 3).concat(testimonials.slice(0, 3))} />
        <MarqueeRow items={testimonials.slice(3).concat(testimonials.slice(3))} reverse />
      </div>
    </section>
  );
};

export default Testimonials;

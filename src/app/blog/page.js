import Link from "next/link";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import BlogCover from "../components/blog/BlogCover";
import PostCard from "../components/blog/PostCard";
import Reveal from "../components/Reveal";
import { sortedPosts, formatDate, readTime } from "../data/blog";

export const metadata = {
  title: "Insights & Articles - Future IT Touch",
  description:
    "Practical articles on AI, cloud, cybersecurity, web and app development, and choosing the right IT partner in India — from the Future IT Touch team.",
};

const BlogIndex = () => {
  const [featured, ...rest] = sortedPosts;
  const categories = [...new Set(sortedPosts.map((p) => p.category))];

  return (
    <div className="relative pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="grid-bg absolute inset-x-0 top-0 -z-10 h-[700px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <header className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <span className="eyebrow">Insights</span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1] tracking-[-0.05em] text-ink-950 sm:text-7xl">
              Ideas for building <span className="text-holo">what&apos;s next</span>
            </h1>
          </div>
          <div>
            <p className="leading-8 text-ink-600">
              Practical guides on AI, cloud, security and digital products — written for business
              owners and teams who want technology that actually moves the needle.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics">
              {categories.map((c) => (
                <li key={c} className="glass rounded-full px-3.5 py-1.5 font-mono text-[11px] text-ink-700">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </header>

        {/* Featured */}
        <Reveal className="mt-14">
          <Link
            href={`/blog/${featured.slug}/`}
            className="glass holo-edge group grid grid-cols-1 overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:shadow-lift lg:grid-cols-2"
          >
            <BlogCover
              post={featured}
              index={0}
              size="lg"
              className="aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.02] lg:aspect-auto lg:min-h-[420px]"
            />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-holo animate-shimmer rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  Latest
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                  <span className="text-brand-violet">{featured.category}</span> · {formatDate(featured.date)} · {readTime(featured)}
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink-950 sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-ink-600">{featured.excerpt}</p>
              <span className="btn-primary mt-8 w-max">
                Read article <FiArrowUpRight />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 80}>
              <PostCard post={post} index={i + 1} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="border-spin holo-foil relative mt-16 flex flex-col items-center gap-6 overflow-hidden rounded-[2.5rem] p-10 text-center shadow-glow sm:p-14 lg:flex-row lg:text-left">
          <div className="sheen" />
          <div className="relative flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-violet">Have a project in mind?</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Turn these ideas into <span className="text-holo">your next product.</span>
            </h2>
          </div>
          <Link href="/#contact" className="btn-primary relative">
            Talk to our team <FiArrowRight />
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default BlogIndex;

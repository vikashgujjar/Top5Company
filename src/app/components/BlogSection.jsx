"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import BlogCover from "./blog/BlogCover";
import Reveal from "./Reveal";
import { sortedPosts, formatDate, readTime } from "../data/blog";

const [featured, ...rest] = sortedPosts;
const listed = rest.slice(0, 3);

const Meta = ({ post, className = "" }) => (
  <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 ${className}`}>
    <span className="text-brand-violet">{post.category}</span>
    <span aria-hidden>·</span>
    <time dateTime={post.date}>{formatDate(post.date)}</time>
    <span aria-hidden>·</span>
    <span>{readTime(post)}</span>
  </p>
);

const BlogSection = () => {
  // Floating cover that follows the cursor over the article list (desktop only).
  const [preview, setPreview] = useState(null);
  const floater = useRef(null);

  const onMove = (e) => {
    if (floater.current) floater.current.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 90}px)`;
  };

  return (
    <section id="blog" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span className="eyebrow">Insights</span>
            <h2 className="section-title mt-5">
              Ideas for building <span className="text-holo">what&apos;s next</span>
            </h2>
          </div>
          <Link href="/blog/" className="btn-ghost shrink-0">
            View all articles <FiArrowRight />
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
          {/* Featured story */}
          <Reveal>
            <Link
              href={`/blog/${featured.slug}/`}
              className="glass holo-edge group flex h-full flex-col overflow-hidden rounded-[2.25rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <BlogCover post={featured} index={0} className="aspect-[16/10] rounded-t-[2.25rem] transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="bg-holo animate-shimmer rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    Latest
                  </span>
                  <Meta post={featured} />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-ink-950 sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 leading-7 text-ink-600">{featured.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink-950">
                  Read article
                  <span className="icon-3d h-8 w-8 !rounded-full text-sm transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Indexed list with hover preview */}
          <Reveal delay={100}>
            <ol className="glass h-full divide-y divide-white rounded-[2.25rem] p-3 sm:p-4" onMouseMove={onMove} onMouseLeave={() => setPreview(null)}>
              {listed.map((post, i) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    onMouseEnter={() => setPreview({ post, index: i + 1 })}
                    className="group flex items-start gap-5 rounded-3xl p-4 transition-all duration-300 hover:bg-white/70 sm:p-5"
                  >
                    <span className="font-mono text-xs text-ink-400 transition-colors group-hover:text-brand-violet">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <BlogCover post={post} index={i + 1} className="hidden aspect-square w-20 shrink-0 rounded-2xl sm:block lg:hidden" />
                    <div className="min-w-0 flex-1">
                      <Meta post={post} />
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink-950 transition-colors group-hover:text-brand-violet sm:text-xl">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-600">{post.excerpt}</p>
                    </div>
                    <FiArrowUpRight className="mt-1 shrink-0 text-xl text-ink-300 transition-all duration-300 group-hover:rotate-45 group-hover:text-ink-950" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog/" className="flex items-center justify-between rounded-3xl p-5 font-mono text-xs uppercase tracking-[0.18em] text-ink-500 transition hover:text-brand-violet">
                  Browse all {sortedPosts.length} articles <FiArrowRight />
                </Link>
              </li>
            </ol>
          </Reveal>
        </div>
      </div>

      {/* Cursor-following preview */}
      <div
        ref={floater}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden [@media(hover:hover)]:lg:block"
      >
        <div
          className={`w-64 overflow-hidden rounded-3xl shadow-lift ring-1 ring-white transition-all duration-300 ${
            preview ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {preview && <BlogCover post={preview.post} index={preview.index} className="aspect-[4/3]" />}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";
import BlogCover from "../../components/blog/BlogCover";
import PostCard from "../../components/blog/PostCard";
import ShareBar from "../../components/blog/ShareBar";
import Toc from "../../components/blog/Toc";
import { sortedPosts, getPost, slugify, formatDate, readTime } from "../../data/blog";

export const dynamicParams = false;

export const generateStaticParams = () => sortedPosts.map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Future IT Touch`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
};

// Renders one content block from data/blog.js
const Block = ({ block }) => {
  if (block.p) return <p className="text-lg leading-8 text-ink-700">{block.p}</p>;
  if (block.list)
    return (
      <ul className="space-y-3">
        {block.list.map((item) => (
          <li key={item} className="flex gap-3 text-lg leading-8 text-ink-700">
            <span aria-hidden className="bg-holo mt-3 h-2 w-2 shrink-0 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    );
  if (block.quote)
    return (
      <blockquote className="border-spin holo-foil relative overflow-hidden rounded-3xl px-7 py-6 shadow-glow sm:px-9">
        <span aria-hidden className="text-holo absolute -top-3 left-5 font-display text-7xl font-bold opacity-40">
          “
        </span>
        <p className="relative font-display text-xl font-semibold leading-snug tracking-tight text-ink-950 sm:text-2xl">
          {block.quote}
        </p>
      </blockquote>
    );
  return null;
};

const BlogPost = async ({ params }) => {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const position = sortedPosts.findIndex((p) => p.slug === post.slug);
  const newer = sortedPosts[position - 1];
  const older = sortedPosts[position + 1];
  const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const toc = post.sections.map((s) => ({ id: slugify(s.heading), label: s.heading }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Future IT Touch Pvt. Ltd." },
  };

  return (
    <article className="relative pb-24 pt-32 lg:pb-32 lg:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid-bg absolute inset-x-0 top-0 -z-10 h-[700px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink-950">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog/" className="hover:text-ink-950">Blog</Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-brand-violet">{post.category}</li>
          </ol>
        </nav>

        {/* Title block */}
        <header className="mt-8 max-w-4xl">
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink-950 sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ink-600">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-soft ring-1 ring-white">
              <Image src="/images/opt/logo-future.webp" alt="" width={32} height={32} className="h-7 w-7 object-contain mix-blend-multiply" />
            </span>
            <div>
              <p className="font-semibold text-ink-950">{post.author}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {readTime(post)}
              </p>
            </div>
          </div>
        </header>

        <BlogCover
          post={post}
          index={position}
          size="lg"
          className="mt-12 aspect-[16/10] rounded-[2.5rem] shadow-lift sm:aspect-[21/9]"
        />

        {/* Body */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[230px_minmax(0,1fr)_240px] xl:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <Toc items={toc} />
            </div>
          </aside>

          <div className="min-w-0 max-w-3xl">
            {/* Key takeaways */}
            <div className="glass rounded-3xl p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-violet">Key takeaways</p>
              <ul className="mt-4 space-y-3">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 leading-7 text-ink-800">
                    <span className="icon-3d mt-0.5 h-6 w-6 shrink-0 !rounded-full text-xs">
                      <FiCheck />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {post.sections.map((section, i) => (
              <section key={section.heading} className="mt-14">
                <h2 id={toc[i].id} className="scroll-mt-28 font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                  <span className="mr-3 font-mono text-sm font-medium text-brand-violet">{String(i + 1).padStart(2, "0")}</span>
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-6">
                  {section.blocks.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}

            {/* Mobile share */}
            <div className="mt-14 lg:hidden">
              <ShareBar title={post.title} />
            </div>

            {/* Newer / older */}
            <nav aria-label="More articles" className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {older ? (
                <Link href={`/blog/${older.slug}/`} className="glass holo-edge group rounded-3xl p-5 transition hover:-translate-y-0.5">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    <FiArrowLeft className="transition-transform group-hover:-translate-x-1" /> Previous
                  </span>
                  <span className="mt-2 block font-display font-semibold leading-snug text-ink-950">{older.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {newer && (
                <Link href={`/blog/${newer.slug}/`} className="glass holo-edge group rounded-3xl p-5 text-right transition hover:-translate-y-0.5">
                  <span className="flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    Next <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="mt-2 block font-display font-semibold leading-snug text-ink-950">{newer.title}</span>
                </Link>
              )}
            </nav>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <ShareBar title={post.title} />
              <div className="border-spin holo-foil relative overflow-hidden rounded-3xl p-6 shadow-glow">
                <div className="sheen" />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-brand-violet">Work with us</p>
                <p className="relative mt-3 font-display text-lg font-semibold leading-snug text-ink-950">
                  Ready to put this into practice?
                </p>
                <Link href="/#contact" className="btn-primary relative mt-5 w-full !px-4 !py-3">
                  Start a project <FiArrowRight />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        <section className="mt-24" aria-labelledby="related-heading">
          <div className="flex items-end justify-between gap-6">
            <h2 id="related-heading" className="section-title">
              Keep <span className="text-holo">reading</span>
            </h2>
            <Link href="/blog/" className="btn-ghost hidden shrink-0 sm:inline-flex">
              All articles <FiArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} index={sortedPosts.indexOf(p)} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default BlogPost;

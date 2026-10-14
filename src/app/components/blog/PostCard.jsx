import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import BlogCover from "./BlogCover";
import { formatDate, readTime } from "../../data/blog";

// Grid card used on the blog index and in "related articles".
const PostCard = ({ post, index }) => (
  <Link
    href={`/blog/${post.slug}/`}
    className="glass holo-edge group flex h-full flex-col overflow-hidden rounded-[2rem] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
  >
    <BlogCover post={post} index={index} className="aspect-[16/10] rounded-t-[2rem] transition-transform duration-700 group-hover:scale-[1.03]" />
    <div className="flex flex-1 flex-col p-6">
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
        <span className="text-brand-violet">{post.category}</span>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{readTime(post)}</span>
      </p>
      <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink-950 transition-colors group-hover:text-brand-violet">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink-600">{post.excerpt}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-ink-950">
        Read article
        <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </div>
  </Link>
);

export default PostCard;

import { FiCompass, FiCpu, FiCloud, FiShield, FiCode } from "react-icons/fi";

// Generated cover art in the site's holographic style — no stock photos needed.
const themes = {
  compass: { icon: FiCompass, a: "bg-brand-cyan/45", b: "bg-brand-violet/40" },
  cpu: { icon: FiCpu, a: "bg-brand-violet/45", b: "bg-brand-pink/40" },
  cloud: { icon: FiCloud, a: "bg-brand-cyan/45", b: "bg-brand-amber/35" },
  shield: { icon: FiShield, a: "bg-brand-pink/40", b: "bg-brand-violet/45" },
  code: { icon: FiCode, a: "bg-brand-amber/40", b: "bg-brand-pink/40" },
};

const BlogCover = ({ post, index = 0, size = "md", className = "" }) => {
  const theme = themes[post.icon] || themes.compass;
  const Icon = theme.icon;
  const large = size === "lg";

  return (
    <div aria-hidden className={`holo-foil relative isolate overflow-hidden ${className}`}>
      <div className="grid-bg absolute inset-0" />
      <div className={`glow -left-1/4 -top-1/3 h-[110%] w-[80%] ${theme.a}`} />
      <div className={`glow -bottom-1/3 -right-1/4 h-[110%] w-[80%] ${theme.b}`} />
      <div className="orb absolute -right-[6%] -top-[18%] aspect-square w-[34%] opacity-80" />
      <div className="sheen" />

      {/* Oversized index */}
      <span
        className={`num-outline absolute -bottom-[0.18em] right-[4%] font-display font-extrabold leading-none tracking-[-0.06em] ${
          large ? "text-[clamp(7rem,16vw,15rem)]" : "text-[clamp(5rem,9vw,8rem)]"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Category glyph */}
      <span
        className={`icon-3d absolute left-[8%] top-1/2 -translate-y-1/2 ${
          large ? "h-24 w-24 text-5xl sm:h-28 sm:w-28" : "h-16 w-16 text-3xl"
        }`}
      >
        <Icon />
      </span>

      <span className="absolute left-[8%] top-[10%] font-mono text-[10px] uppercase tracking-[0.2em] text-ink-700">
        insights / {post.category}
      </span>
    </div>
  );
};

export default BlogCover;

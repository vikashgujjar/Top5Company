"use client";
import { useState } from "react";
import { FiLink, FiCheck } from "react-icons/fi";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// Share the current article. URLs are read at click time so this works on any domain.
const ShareBar = ({ title }) => {
  const [copied, setCopied] = useState(false);

  const open = (build) => {
    const url = encodeURIComponent(window.location.href);
    window.open(build(url, encodeURIComponent(title)), "_blank", "noopener,noreferrer,width=640,height=560");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); fail quietly.
    }
  };

  const btn = "glass grid h-11 w-11 place-items-center rounded-full text-ink-700 transition hover:-translate-y-0.5 hover:bg-ink-950 hover:text-white";

  return (
    <div className="glass rounded-3xl p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Share article</p>
      <div className="mt-4 flex gap-2.5">
        <button
          type="button"
          className={btn}
          aria-label="Share on LinkedIn"
          onClick={() => open((u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`)}
        >
          <FaLinkedinIn />
        </button>
        <button
          type="button"
          className={btn}
          aria-label="Share on X"
          onClick={() => open((u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}`)}
        >
          <FaXTwitter />
        </button>
        <button type="button" className={btn} aria-label={copied ? "Link copied" : "Copy link"} onClick={copy}>
          {copied ? <FiCheck className="text-emerald-500" /> : <FiLink />}
        </button>
      </div>
      <p role="status" className="mt-2 h-4 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-600">
        {copied ? "Link copied" : ""}
      </p>
    </div>
  );
};

export default ShareBar;

import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // A stray lockfile in the home folder otherwise makes Next guess the wrong project root.
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

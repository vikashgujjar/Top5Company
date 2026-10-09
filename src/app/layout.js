import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import Aurora from "./components/Aurora";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Top 5 IT companies in India - Future IT Touch",
  description:
    "Find top 5 IT companies in India, including Future IT Touch. Innovative services such as AI, solutions, and Web & App development help businesses succeed.",
  keywords:
    "Top 5 IT companies in India, web app development companies in india, Top IT solutions providers India, Top IT companies in India, Best IT Companies in India, IT companies in India, no 1 it company in india, Leading IT companies in India, IT services India, Top technology companies India",
};

export const viewport = {
  themeColor: "#f6f7fb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${mono.variable}`}>
      <body>
        <Aurora />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

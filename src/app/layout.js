import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Top 5 IT companies in India - Future IT Touch</title>
        <meta
          name="description"
          content="Find top 5 IT companies in India, including Future IT Touch. Innovative services such as AI, solutions, and Web & App development help businesses succeed."
        />
        <meta
          name="keywords"
          content="Top 5 IT companies in India, web app development companies in india, Top IT solutions providers India, Top IT companies in India, Best IT Companies in India, IT companies in India, no 1 it company in india, Leading IT companies in India, IT services India, Top technology companies India"
        />
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

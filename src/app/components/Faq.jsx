"use client";
import { useState } from "react";
import { FiPlus, FiMessageCircle } from "react-icons/fi";
import Reveal from "./Reveal";
import { contact } from "../data/site";

const faqs = [
  {
    question: "What are the upcoming trends in IT?",
    answer:
      "The future of IT promises remarkable advancements such as quantum computing, augmented reality, the Internet of Things (IoT), and immersive technologies. These will revolutionize how we interact with the digital world, paving the way for a more connected and efficient future.",
  },
  {
    question: "How do IT companies influence technological advancements?",
    answer:
      "IT companies serve as the pioneers of innovation. They invest in research, development, and cutting-edge technologies, steering the trajectory of technological evolution. These companies drive progress by pushing boundaries, developing groundbreaking solutions, and creating a roadmap for the future.",
  },
  {
    question: "What sets the top Indian IT companies apart from others globally?",
    answer:
      "Indian IT companies stand out for their cost-effective yet high-quality services. They possess a pool of skilled professionals, offer diverse services, and often pioneer in adopting new technologies and delivering cutting-edge solutions across various industry verticals.",
  },
  {
    question: "What are the primary services offered by top IT companies in India?",
    answer:
      "Top IT companies in India provide a broad spectrum of services, including software development, application maintenance, system integration, cloud computing, cybersecurity, data analytics, IoT solutions, and digital transformation services.",
  },
  {
    question: "What services does Future IT Touch offer?",
    answer:
      "Future IT Touch offers a range of services, including but not limited to IT consulting, infrastructure management, cloud solutions, cybersecurity, data analytics, software development, web development, and app development.",
  },
  {
    question: "What makes Future IT Touch different from other IT service providers?",
    answer:
      "Future IT Touch distinguishes itself through its personalized approach, tailoring solutions to specific client needs. Its dedication to innovation and adaptability sets it apart, and its emphasis on cutting-edge solutions differentiates it within the industry.",
  },
  {
    question: "What role do IT companies play in enhancing search results?",
    answer:
      "IT companies are pivotal in enhancing search results by creating relevant, high-quality content, optimizing websites for better performance, and implementing user-centric strategies. Their influence extends to shaping algorithms and search engine preferences.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="cv-auto relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
        <Reveal className="lg:sticky lg:top-28 lg:h-max">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-5">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            Everything you need to know about India&apos;s IT landscape and how Future IT Touch can
            help your business.
          </p>
          <div className="glass mt-8 rounded-3xl p-6">
            <FiMessageCircle className="text-2xl text-brand-pink" />
            <p className="mt-3 font-semibold text-white">Still have questions?</p>
            <p className="mt-1 text-sm text-slate-400">Our team is happy to help.</p>
            <a href={`mailto:${contact.email}`} className="btn-ghost mt-5 !py-2.5">
              {contact.email}
            </a>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = activeIndex === index;
            return (
              <Reveal
                key={faq.question}
                delay={index * 40}
                className={`rounded-2xl border transition-colors duration-300 ${
                  open ? "border-brand-pink/40 bg-white/[0.05]" : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${index}`}
                    aria-expanded={open}
                    aria-controls={`faq-a-${index}`}
                    onClick={() => setActiveIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 p-6 text-left"
                  >
                    <span className={`font-display text-base font-semibold sm:text-lg ${open ? "text-white" : "text-slate-200"}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        open ? "rotate-45 bg-brand-pink text-white" : "bg-white/[0.06] text-slate-300"
                      }`}
                    >
                      <FiPlus />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${index}`}
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-slate-400">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                "Future IT Touch offers a range of services, including but not limited to IT consulting, infrastructure management, cloud solutions, cybersecurity, data analytics, software development, web development, and App Development.",
        },
        {
            question: "What makes Future IT Touch different from other IT service providers?",
            answer:
                "Future IT Touch distinguishes itself through its personalized approach, tailoring solutions to specific client needs. Their dedication to innovation and adaptability sets them apart. The company’s emphasis on innovation and cutting-edge solutions differentiates it within the industry.",
        },
        {
            question: "What role do IT companies play in enhancing search results?",
            answer:
                "IT companies are pivotal in enhancing search results by creating relevant, high-quality content, optimizing websites for better performance, and implementing user-centric strategies. Their influence extends to shaping algorithms and search engine preferences.",
        },
    ];

    return (
        <section className="bg-[#f6f5fb] py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 border border-gray-200"
                        >
                            <button
                                className={`flex justify-between items-center w-full text-left ${activeIndex === index ? "text-[#f20791]" : "text-gray-800"}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg font-semibold">
                                    {faq.question}
                                </span>
                                <span
                                    className={`transform transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-[max-height] text-base duration-500 ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                                style={{ maxHeight: activeIndex === index ? "500px" : "0" }}
                            >
                                <div className="mt-4 text-justify text-gray-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

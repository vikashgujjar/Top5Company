"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";
import Link from "next/link";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Richa wadhawan",
      content:
        "Future IT Touch has been an invaluable partner for our company. They have helped us to streamline our IT operations, improve our cybersecurity, and save money. Their team of experts is always available to solve our queries and provide support. We highly recommend Future IT Touch to any business that is looking for a top-notch IT provider.",
      img: "/images/testimonial1.jpg"
    },
    {
      name: "Nitin Rajput",
      content:
        "Future IT Touch is the best IT company that we have ever worked with. They are always on time, on budget, and on target. They have helped us to achieve our IT goals and objectives. We highly recommend Future IT Touch to any business that is looking for a reliable and trustworthy IT partner.",
      img: "/images/testimonial2.jpg"
    },
    {
      name: "Gourav Rajput",
      content:
        "Future IT Touch is a true innovator in the IT industry. They are always at the forefront of new technology and they are always looking for ways to improve our IT infrastructure. They have helped us to stay ahead of the competition and they have given us a competitive edge. We are so impressed with Future IT Touch!",
      img: "/images/testimonial3.jpg"
    },
    {
      name: "Vishali",
      content:
        "It's a pleasure to work with Future Touch. They are always professional, courteous, and respectful. They take the time to understand our needs and they always deliver on their promises. I highly recommend Future IT Touch to any business that is looking for a customer-centric IT provider.",
      img: "/images/testimonial.webp"
    },
    {
      name: "Himanshi Mehra",
      content:
        "Future IT Touch has helped me to grow my business. They have implemented new systems and processes that have improved our efficiency, productivity, and profitability. I and my entire team are so grateful for their expertise and guidance. We highly recommend Future IT Touch to any business that is looking to take its business to the next level.",
      img: "/images/testimonial.webp"
    },
    {
      name: "Shivam Thakur",
      content:
        "Future IT Touch is a breath of fresh air in the IT industry. They are honest, transparent, and ethical. They always put our needs first, they are always looking for ways to save us money and are always willing to go the extra mile and they always have our best interests at heart. We are so happy that we chose Future IT Touch as our IT provider.",
      img: "/images/testimonial.webp"
    },
  ];

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    customPaging: function (i) {
      return (
        <div
          className={`w-2 h-2 rounded-full ${i === activeIndex ? "bg-blue-500" : "bg-black"
            }`}
        />
      );
    },

    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index),
  };


  return (
    <section className="bg-none py-20 px-0 sm:px-0 md:px-10 lg:px-28 overflow-hidden">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="p-4 md:col-span-6">
            <div className="text-left">
              <span className="text-lg text-[#e60072]">
                What our clients say about Future IT Touch Pvt. Ltd..
              </span>
              <h2 className="text-4xl font-semibold mt-4 text-[#050748]">
                Over 1200+ Satisfied Clients and Growing
              </h2>
            </div>
            <div className="mt-8">
              <h4 className="text-xl text-[#050748] mb-10 font-bold">
                Read More Reviews
              </h4>
              <div className="flex gap-5 relative mt-4">
                <Link href="https://g.co/kgs/Xpqu7J" target="blank" className="w-1/4 mx-1">
                  <img src="/images/reviews-icon-1..webp" alt="review" />
                </Link>
                <Link href="#" className="w-1/4 mx-1">
                  <img src="/images/reviews-icon-2..webp" alt="review" />
                </Link>
                <Link href="#" className="w-1/4 mx-1">
                  <img src="/images/reviews-icon-3..webp" alt="review" />
                </Link>
              </div>
            </div>
          </div>
          <div className="px-4 md:col-span-6">
            <div className="pl50 relative">
              <img
                src="/images/shape-3.webp"
                alt="shape"
                className="test-image absolute bottom-0 w-52 h-auto"
              />
              <Slider {...settings}>
                {testimonials.map((review, index) => (
                  <div key={index}>
                    <div className="testimonial-card bg-white relative w-full p-2 sm:p-2 md:p-5 lg:p-12 h-max rounded-lg">
                      <div className="mb-10 text-lg leading-7">
                        <p className="scrollable">{review.content}</p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-4 items-center">
                          <div className="">
                            <img
                              src={review.img}
                              alt="user"
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          </div>
                          <div className="">
                            <h5 className="font-bold text-xl">
                              {review.name}
                            </h5>
                            <ul className="flex gap-3">
                              <li><i className="bi bi-star-fill text-[#ffc600]"></i></li>
                              <li><i className="bi bi-star-fill text-[#ffc600]"></i></li>
                              <li><i className="bi bi-star-fill text-[#ffc600]"></i></li>
                              <li><i className="bi bi-star-fill text-[#ffc600]"></i></li>
                              <li><i className="bi bi-star-fill text-[#ffc600]"></i></li>
                            </ul>
                          </div>
                        </div>
                        <FaQuoteRight className="w-24 text-[#00f2a6] text-6xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

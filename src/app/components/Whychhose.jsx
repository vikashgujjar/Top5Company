"use client";
import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Image from "next/image";

const services = [
    {
        id: 1,
        title: "Expertise and Experience",
        description: "We have a proven track record of delivering successful IT projects for businesses of all sizes and industries.",
        imageSrc: '/assets/images/service1.png',
        altText: 'Web Development',
        icon: "🌟"
    },
    {
        id: 2,
        title: "Technological Advancements",
        description: "Embracing AI, machine learning, and data analytics, Future IT Touch is at the forefront of technological advancements.",
        imageSrc: '/assets/images/service2.png',
        altText: 'IT Management',
        icon: "🔧",
    },
    {
        id: 3,
        title: "Customer-Centric Approach",
        description: "We prioritize understanding your unique business goals and challenges, ensuring that our solutions align seamlessly with your objectives.",
        imageSrc: '/assets/images/service3.png',
        altText: 'Digital Marketing',
        icon: "🤝",
    },
    {
        id: 4,
        title: "Innovation-Driven Solutions",
        description: "We continuously explore and adopt emerging technologies to deliver cutting-edge solutions that drive business value.",
        imageSrc: '/assets/images/service4.png',
        altText: 'App Development',
        icon: "💡",
    },
    {
        id: 5,
        title: "Scalable and Cost-Effective Solutions",
        description: "We design solutions that adapt to your changing business needs and optimize your IT costs.",
        imageSrc: '/assets/images/service3.png',
        altText: 'Digital Marketing',
        icon: "📈",
    },
    {
        id: 6,
        title: "Comprehensive Support",
        description: "We provide ongoing support and maintenance to ensure the long-term success of your IT investments.",
        imageSrc: '/assets/images/service4.png',
        altText: 'App Development',
        icon: "🔒",
    },
];

const WhyChooseUs = () => {
    return (
        <>

            <div className="flex flex-col items-center relative py-20 px-5 lg:px-28 bg-[#f6f5fb]" id="why-choose-us">
                <div className="text-center mb-12">
                    {/* <h5 className="text-xl font-semibold text-gray-600"></h5> */}
                    <h1 className="text-4xl font-bold text-gray-900">Why Choose Us</h1>

                </div>

                {/* Swiper Carousel */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="w-full"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div className="service-single-box p-6 bg-white h-max lg:h-[320px] border border-white relative group z-10 rounded-lg overflow-hidden">
                                <div className="service-icon text-5xl mb-5 text-center">
                                    {service.icon}
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title text-xl font-semibold  text-gray-800 group-hover:text-white">{service.title}</h3>
                                    <p className="service-text text-gray-600 text-sm my-4 group-hover:text-white ">{service.description}</p>
                                    <div className="service-btn">
                                        <Link href="#" className="text-white flex items-center font-semibold">
                                            <FaPlus className="mr-2 text-[#f20791] group-hover:bg-[#f20791] bg-[#f4f4f4] rounded-full p-1.5 text-3xl group-hover:text-white " /> READ MORE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Image src="/images/shape/12.svg" alt="image" width={500} height={500} className="shape-img5 w-auto h-auto absolute left-[12%] top-[14%] " />
                <Image src="/images/shape/13.svg" alt="image" width={500} height={500} className="shape-img2 w-auto h-auto  absolute right-[38%] lg:right-[16%] left-auto top-[5%] transform -translate-y-[20%] -translate-x-[15%]" />


            </div>

            <section className="software-wrapper  relative futureTouch py-10 md:px-16 xl:px-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex  flex-col lg:flex-row items-center lg:gap-12">

                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <div
                                className="software-content fadeInLeft animated"
                                style={{ visibility: "visible" }}
                            >
                                <h2 className="text-2xl lg:text-4xl  mb-4 font-bold">
                                    {/* {/ People use <span className="text-primary">our software</span > /} */}
                                    Empower Your Business with <span className='text-[#f20791]'>Future IT Touch </span>

                                </h2>
                                <p className=" text-gray-600 mb-6">
                                    Future IT Touch shines as a rising star. Focused on cutting-edge technological solutions, Future IT Touch aims to revolutionize the IT landscape through its emphasis on artificial intelligence, machine learning, and data analytics.

                                </p>
                                <p className='text-gray-600'>Future IT Touch, while relatively newer, is making significant strides in transforming the Indian IT sector. With a clear vision to embrace the future through technology, Future IT Touch has taken charge of the final destination. Our commitment to innovation, client satisfaction, and technological advancement cements their positions as leaders in the industry.</p>


                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div
                                className="software-img fadeInRight animated"
                                style={{ visibility: "visible" }}
                            >
                                <img
                                    loading="lazy"
                                    src="/images/map-img2.webp"
                                    alt="software"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;

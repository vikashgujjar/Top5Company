"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactArea from './Contacts';





// const services = [
//     {
//         id: 1,
//         title: "TCS (Tata Consultancy Services)",
//         description:
//             "TCS stands as a titan in the IT realm, offering a diverse array of services, including IT consulting, software development, and business solutions. With a robust global presence and an extensive talent pool, TCS has consistently ranked among the top IT companies worldwide.",
//         icon: "/assets/img/icons/service-icon1.png",
//         link: "service-details.html",
//         aosDuration: "700",
//     },
//     {
//         id: 2,
//         title: "Infosys",
//         description:
//             "Infosys, another industry giant, specializes in IT consulting, technology, and outsourcing services. Renowned for its innovative approach and dedication to client satisfaction, Infosys has been a driving force behind India's tech revolution.",
//         icon: "/assets/img/icons/service-icon2.png",
//         link: "service-details.html",
//         aosDuration: "1100",
//     },
//     {
//         id: 3,
//         title: "Wipro Limited",
//         description:
//             "Wipro Limited, with its broad spectrum of IT services, has been a key player in the industry. Its expertise spans across technology, consulting, and business process services, solidifying its position in the market.",
//         icon: "/assets/img/icons/service-icon3.png",
//         link: "service-details.html",
//         aosDuration: "800",
//     },
//     {
//         id: 4,
//         title: "HCL Technologies",
//         description:
//             "HCL Technologies, known for its focus on providing innovative technology solutions, has gained prominence globally. Its offerings in cybersecurity, cloud computing, and IoT solutions have propelled it to the forefront of technological innovation.",
//         icon: "/assets/img/icons/service-icon4.png",
//         link: "service-details.html",
//         aosDuration: "1200",
//     },
//     {
//         id: 5,
//         title: "Future IT Touch",
//         description:
//             "Future IT Touch is a global IT services provider with a strong presence in India and a growing footprint across the globe.We offer a wide range of IT services, including application development, website development, digital marketing, web designing, industrial training, and BPO services.Our commitment to innovation and its focus on delivering value to customers has made us a trusted partner for businesses worldwide.",
//         icon: "/assets/img/icons/service-icon5.png",
//         link: "service-details.html",
//         aosDuration: "900",
//     },
// ];


const companyData = [
    {
        logo: "/images/tcs.avif",
        altText: "tcs Logo",
        name: "TCS (Tata Consultancy Services)",
        profileLink: "https://www.tcs.com/",
        description:
            "TCS stands as a titan in the IT realm, offering a diverse array of services, including IT consulting, software development, and business solutions. With a robust global presence and an extensive talent pool, TCS has consistently ranked among the top IT companies worldwide.",
    },
    {
        logo: "/images/Infosys.avif",
        altText: "Infosys Logo",
        name: "Infosys",
        profileLink: "https://www.infosys.com/",
        description:
            "Infosys, another industry giant, specializes in IT consulting, technology, and outsourcing services. Renowned for its innovative approach and dedication to client satisfaction, Infosys has been a driving force behind India's tech revolution.",
    },
    {
        logo: "/images/Wipro Limited_0.avif",
        altText: "Wipro Logo",
        name: "Wipro Limited",
        profileLink: "https://www.wipro.com/",
        description:
            "Wipro Limited, with its broad spectrum of IT services, has been a key player in the industry. Its expertise spans across technology, consulting, and business process services, solidifying its position in the market.",
    },
    {
        logo: "/images/HCL Technologies.avif",
        altText: "Technologies Logo",
        name: "HCL Technologies",
        profileLink: "https://www.hcltech.com/",
        description:
            "HCL Technologies, known for its focus on providing innovative technology solutions, has gained prominence globally. Its offerings in cybersecurity, cloud computing, and IoT solutions have propelled it to the forefront of technological innovation.",
    },
    {
        logo: "/images/logo-future.jpg",
        altText: "future Logo",
        name: "Future IT Touch",
        profileLink: "https://www.futuretouch.in/",
        description:
            "Future IT Touch is a global IT services provider with a strong presence in India and a growing footprint across the globe.We offer a wide range of IT services, including application development, website development, digital marketing, web designing, industrial training, and BPO services.Our commitment to innovation and its focus on delivering value to customers has made us a trusted partner for businesses worldwide.",
    },

];


const ServicesSection = () => {


    return (
        <>
            <div className="px-0 lg:px-28 py-20 bg-[#f6f5fb] relative " id='about' >
                <h5 className='text-xl md:text-4xl font-bold text-gray-800 mt-4 mb-10 text-center' id='contact'>Overview of Top 5 IT Companies in India</h5>

                <div className="block lg:flex gap-10">
                    <div className="w-full lg:w-3/5 px-5 lg:px-0">
                        <div className="embedded-entities">
                            {companyData.map((company, index) => (
                                <div key={index} className="embedded-entity ">
                                    <div className={`embedded-entity ${index === companyData.length - 1 ? "" : "mb-20"
                                        }`}>
                                        <div className="company-info-wrapper border-b  border-gray-300 flex items-center gap-6 mb-4 mt-8 pb-6">
                                            <div className="logo-wrapper-small">
                                                <div className="centered bg-white border-b flex overflow-hidden items-center justify-center text-center border border-gray-300 rounded-md h-20 w-20">
                                                    <Image
                                                        src={company.logo}
                                                        alt={company.altText}
                                                        width={100}
                                                        height={100}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h3 className="title text-lg lg:text-2xl font-bold">
                                                    <Link href={company.profileLink} target="_blank">
                                                        {company.name}
                                                    </Link>
                                                </h3>
                                                <div className="link mt-1">
                                                    <Link href={company.profileLink} target="_blank" className="text-[#f20791] font-semibold text-sm uppercase tracking-[1.055px] ">
                                                        View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-gray-700">{company.description}</p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 sticky top-20 h-max mt-8 lg:mt-0">
                        <ContactArea />
                    </div>
                </div>
                <Image src="/images/shape/1.webp" alt="shape1" width={900} height={900} className="shape-img1  hidden lg:block absolute z-[1] left-[22%] top-[2.5%] w-[150px]  h-auto animate-moveLeftBounce" />
                <Image src="/images/shape/2.webp" alt="shape2" width={50} height={50} className="shape-img2 hidden lg:block absolute z-[1] right-[30%] w-auto h-auto top-[2%] " />
            </div>

        </>

    );
};

export default ServicesSection;

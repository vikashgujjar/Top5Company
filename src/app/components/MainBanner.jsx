"use client"
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';

const MainBanner = () => {
    return (
        <section className="main-banner relative h-max lg:h-[800px] border-b py-5 lg:py-20 overflow-hidden border-[#f5f5f5]">
            <div className="d-table">
                <div className="d-table-cell align-middle">
                    <div className=" mx-auto">
                        <div className="block lg:flex  justify-center items-center py-5 md:py-28 mx-5 lg:mx-28">

                            <div className="w-full lg:w-1/2">
                                <div className="main-banner-content">
                                    <h1 className="text-2xl lg:text-5xl font-semibold mb-4">Top 5 IT Company</h1>
                                    <p className="text-base text-[#6a6c72] font-normal m-0 tracking-[1px] leading-8 text-justify">
                                        India has emerged as a global hub for IT innovation, boasting a thriving ecosystem of talented professionals and cutting-edge technologies. As businesses across industries embrace digital transformation, the demand for IT expertise continues to skyrocket. To help you navigate this dynamic landscape, we've compiled a list of the top five IT companies in India, each with a proven track record of excellence and a commitment to driving success in the digital age.
                                    </p>

                                    <div className="banner-btn mt-5">
                                        <Link
                                            href="tel:917056937000"
                                            className="inline-block px-8 py-3 text-white capitalize bg-[#f20791] border border-[#f20791] transition-all duration-500 rounded-full text-sm font-medium hover:bg-white hover:text-[#f20791]"
                                        >
                                            Contact Us
                                        </Link>

                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:w-1/2">
                                <div className="banner-image relative">
                                    <img
                                        src="/images/main/arrow.webp"
                                        className="animate__animated animate__fadeInLeft animate__delay-0.5s hidden lg:block absolute max-w-full h-auto top-[-200px] right-0"
                                        alt="arrow"
                                    />
                                    <img
                                        src="/images/main/box1.webp"
                                        className="animate__animated animate__fadeInUp animate__delay-0.5s hidden lg:block absolute w-auto h-auto right-[55px] top-[-100px]"
                                        alt="box1"
                                    />
                                    <img
                                        src="/images/main/boy1.webp"
                                        className="animate__animated animate__fadeInLeft animate__delay-0.5s hidden lg:block absolute w-auto h-auto right-[36%] z-[1] top-[-170px]"
                                        alt="boy1"
                                    />
                                    <img
                                        src="/images/main/boy2.webp"
                                        className="animate__animated animate__zoomIn animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-[27%] top-[110px] z-[2]"
                                        alt="boy2"
                                    />
                                    <img
                                        src="/images/main/boy3.webp"
                                        className="animate__animated animate__bounceIn animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-[15%] top-[80px] z-[2]"
                                        alt="boy3"
                                    />
                                    <img
                                        src="/images/main/digital-screen.webp"
                                        className="animate__animated animate__fadeInDown animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-1/4 top-[-170px]"
                                        alt="digital-screen"
                                    />
                                    <img
                                        src="/images/main/filter1.webp"
                                        className="animate__animated animate__zoomIn animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-[47%] top-[96px] z-[2]"
                                        alt="filter1"
                                    />
                                    <img
                                        src="/images/main/filter2.webp"
                                        className="animate__animated animate__fadeInUp animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-[22%] top-[45px] z-[1]"
                                        alt="filter2"
                                    />
                                    <img
                                        src="/images/main/filter3.webp"
                                        className="animate__animated animate__rotateIn animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-[75px] top-[20px]"
                                        alt="filter3"
                                    />
                                    <img
                                        src="/images/main/girl1.webp"
                                        className="animate__animated animate__fadeInUp animate__delay-0.5s hidden lg:block absolute w-auto h-auto right-[32%] top-[-76px] z-[1]"
                                        alt="girl1"
                                    />
                                    <img
                                        src="/images/main/girl2.webp"
                                        className="animate__animated animate__zoomIn animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-[40%] top-[-20px]"
                                        alt="girl2"
                                    />
                                    <img
                                        src="/images/main/monitor.webp"
                                        className="animate__animated animate__fadeInRight animate__delay-0.5s hidden lg:block absolute w-auto h-auto top-[-292px] right-[45px]"
                                        alt="monitor"
                                    />
                                    <img
                                        src="/images/main/4.webp"
                                        className="animate__animated animate__zoomIn animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-[38%] top-[100px] z-[2]"
                                        alt="4"
                                    />
                                    <img
                                        src="/images/main/7.webp"
                                        className="animate__animated animate__zoomIn animate__delay-0.5s hidden lg:block absolute w-auto h-auto left-[16%] bottom-[120px] z-[2]"
                                        alt="7"
                                    />
                                    <img
                                        src="/images/main-image.png"
                                        className="relative block lg:hidden"
                                        alt="7"
                                    />

                                </div>
                            </div>
                        </div>


                        <div className="banner-bg-text text-[70px] left-0 text-center  absolute bottom-40  lg:bottom-4 right-0 lg:left-[4%] lg:text-[90px] text-[#f9f8fc] font-extrabold leading-none">
                            TOP 5 IT COMPANY
                        </div>
                    </div>
                </div>
            </div>


            <div className=" ">
                <Image src="/images/shape/1.webp" alt="shape1" width={900} height={900} className="shape-img1 hidden lg:block absolute z-[-1] left-5 top-[14%] w-[150px]  h-auto animate-moveLeftBounce" />
                <Image src="/images/shape/2.webp" alt="shape2" width={50} height={50} className="shape-img2 hidden lg:block absolute z-[-1] left-[30%] w-auto h-auto top-[17%] " />
                <Image src="/images/shape/3.webp" alt="shape3" width={50} height={50} className="shape-img3 hidden lg:block absolute z-[-1] left-[50px] w-auto h-auto top-[60%] " />
                <Image src="/images/shape/4.webp" alt="shape4" width={400} height={400} className="shape-img4 hidden lg:block absolute z-[-1] bottom-0 w-auto h-auto left-0 " />
                <Image src="/images/shape/5.webp" alt="shape5" width={50} height={50} className="shape-img5 hidden lg:block absolute z-[-1] left-[20%] w-auto h-auto bottom-[8%] " />
                <Image src="/images/shape/6.webp" alt="shape6" width={50} height={50} className="shape-img6 hidden lg:block mx-auto absolute z-[-1] left-0 w-auto h-auto top-[20%] right-0 text-center " />
                <Image src="/images/shape/2.webp" alt="shape7" width={50} height={50} className="shape-img7 hidden lg:block absolute z-[-1] left-1/2 w-auto h-auto bottom-[28%] " />
                <Image src="/images/shape/10.webp" alt="shape8" width={50} height={50} className="shape-img8 hidden lg:block absolute z-[-1] right-[25%] w-auto h-auto bottom-[12%] " />
                <Image src="/images/shape/2.webp" alt="shape9" width={100} height={100} className="shape-img9 hidden lg:block absolute z-[-1] right-[8%] w-auto h-auto top-[15%] " />
                <Image src="/images/shape/5.webp" alt="shape10" width={50} height={50} className="shape-img10 hidden lg:block absolute z-[-1] left-[5%] w-auto h-auto top-[5%] " />
                <Image src="/images/shape/11.webp" alt="shape11" width={900} height={900} className="shape-img11 hidden lg:block     absolute z-[-1] right-[0%] w-auto h-auto bottom-[5%] " />
            </div>

        </section>
    );
};

export default MainBanner;

import React from "react";
import MainBanner from "./components/MainBanner";
import ITCompanies from "./components/ITcompanies";
import Testimonials from "./components/Testimonial";
import FAQSection from "./components/Faq";
import WhyChooseUs from "./components/Whychhose";

const page = () => {
  return (
    <>
      <MainBanner />
      <ITCompanies />

      <div className="px-5 md:px-16 xl:px-32 software-wrapper relative z-10 overflow-hidden futureTouch py-12">
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-3">
            <h5 className="text-lg font-semibold  uppercase tracking-wide">
              Who We Are
            </h5>
            <div className="flex justify-center lg:justify-between">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
                Introducing Future IT Touch: <br /> Your Gateway to Digital
                Excellence
              </h2>
              <button className="hidden lg:flex items-center gap-2  border-b px-3 py-3 rounded-sm bg-white hover:bg-[#ffffffdc] font-semibold h-fit ">
                <span> Learn more about us</span>
                <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-y-8 lg:gap-x-12 lg:items-center">
          <div className="">
            <img
              src="/images/about-image.webp"
              alt="Future IT Touch Team"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl  font-semibold">
                Future IT Touch: Your Partner in Digital Transformation
              </h3>
              <p className="text-base text-[#4b5563]  leading-relaxed">
                As you embark on your digital transformation journey, Future IT
                Touch is here to guide you every step of the way. Our team of
                experienced IT professionals possesses in-depth expertise across
                a wide range of technologies, enabling us to tailor solutions
                that align with your specific business needs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl  font-semibold">
                Kickstart Your Success with Future IT Touch
              </h3>
              <p className="text-base text-[#4b5563]  leading-relaxed">
                Initiate your journey with Future IT Touch and harness the power
                of technology to achieve your business goals. Our team of
                experts is ready to collaborate with you to develop and
                implement innovative IT solutions that drive growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <Testimonials />

      <FAQSection />
    </>
  );
};

export default page;

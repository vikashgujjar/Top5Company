import MainBanner from "./components/MainBanner";
import ITCompanies from "./components/ITcompanies";
import About from "./components/About";
import WhyChooseUs from "./components/Whychhose";
import Testimonials from "./components/Testimonial";
import FAQSection from "./components/Faq";
import CtaBand from "./components/CtaBand";

const page = () => {
  return (
    <>
      <MainBanner />
      <ITCompanies />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <CtaBand />
    </>
  );
};

export default page;

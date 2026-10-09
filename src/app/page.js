import MainBanner from "./components/MainBanner";
import About from "./components/About";
import ITCompanies from "./components/ITcompanies";
import WhyChooseUs from "./components/Whychhose";
import Vision from "./components/Vision";
import Testimonials from "./components/Testimonial";
import FAQSection from "./components/Faq";
import ContactSection from "./components/ContactSection";

const page = () => {
  return (
    <>
      <MainBanner />
      <About />
      <ITCompanies />
      <WhyChooseUs />
      <Vision />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default page;

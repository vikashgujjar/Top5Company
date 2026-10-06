import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const contact = {
  phone: "+91-7056937000",
  phoneHref: "tel:+917056937000",
  email: "info@futuretouch.in",
  city: "Chandigarh, India",
};

export const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/Futureittouch" },
  { name: "X (Twitter)", icon: FaXTwitter, href: "https://x.com/futureittouch" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://in.linkedin.com/company/future-it-touch" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/future_it_touch/" },
  { name: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/Future-IT-Touch-Private-Limited" },
];

export const navLinks = [
  { label: "Companies", href: "#companies" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const companies = [
  {
    logo: "/images/tcs.avif",
    name: "TCS",
    fullName: "Tata Consultancy Services",
    profileLink: "https://www.tcs.com/",
    tags: ["IT Consulting", "Software", "Business Solutions"],
    description:
      "TCS stands as a titan in the IT realm, offering a diverse array of services, including IT consulting, software development, and business solutions. With a robust global presence and an extensive talent pool, TCS has consistently ranked among the top IT companies worldwide.",
  },
  {
    logo: "/images/Infosys.avif",
    name: "Infosys",
    fullName: "Infosys Limited",
    profileLink: "https://www.infosys.com/",
    tags: ["Consulting", "Technology", "Outsourcing"],
    description:
      "Infosys, another industry giant, specializes in IT consulting, technology, and outsourcing services. Renowned for its innovative approach and dedication to client satisfaction, Infosys has been a driving force behind India's tech revolution.",
  },
  {
    logo: "/images/Wipro Limited_0.avif",
    name: "Wipro",
    fullName: "Wipro Limited",
    profileLink: "https://www.wipro.com/",
    tags: ["Technology", "Consulting", "BPS"],
    description:
      "Wipro Limited, with its broad spectrum of IT services, has been a key player in the industry. Its expertise spans across technology, consulting, and business process services, solidifying its position in the market.",
  },
  {
    logo: "/images/HCL Technologies.avif",
    name: "HCLTech",
    fullName: "HCL Technologies",
    profileLink: "https://www.hcltech.com/",
    tags: ["Cybersecurity", "Cloud", "IoT"],
    description:
      "HCL Technologies, known for its focus on providing innovative technology solutions, has gained prominence globally. Its offerings in cybersecurity, cloud computing, and IoT solutions have propelled it to the forefront of technological innovation.",
  },
  {
    logo: "/images/opt/logo-future.webp",
    name: "Future IT Touch",
    fullName: "Future IT Touch Pvt. Ltd.",
    profileLink: "https://www.futuretouch.in/",
    tags: ["Web & App Dev", "Digital Marketing", "Training"],
    highlight: true,
    description:
      "Future IT Touch is a global IT services provider with a strong presence in India and a growing footprint across the globe. We offer a wide range of IT services, including application development, website development, digital marketing, web designing, industrial training, and BPO services. Our commitment to innovation and focus on delivering value to customers has made us a trusted partner for businesses worldwide.",
  },
];

export const services = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Solutions",
  "Cybersecurity",
  "Web Development",
  "App Development",
  "Data Analytics",
  "Digital Marketing",
  "IT Consulting",
  "IoT Solutions",
];

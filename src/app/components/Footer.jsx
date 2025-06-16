import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaEnvelope, FaHeart, FaMapPin, FaInstagram,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-[#f8f9fa] py-10">
      <div className=" px-3 sm:px-3 md:px-5 lg:px-28 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center sm:text-center md:text-center lg:text-start">
            <h5 className="mb-4 text-xl font-bold text-[#3a3a3a]">Top 5 IT Companies in India</h5>
            <p className="mb-7 font-medium text-[#727272] pr-0 sm:pr-0 md:pr-5 lg:pr-40 ">
              India excels globally in IT with innovation, digital solutions, and cutting-edge technology leadership.
            </p>

            <div className="flex items-center justify-normal max-lg:justify-center  max-sm:justify-center gap-3">
              <p className='font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text  text-lg'>Follow Us :</p>
              <Link href="https://www.facebook.com/Futureittouch" target="blank">  <FaFacebookF className="h-7 w-7 rounded bg-[#4243c9] text-white p-1" /></Link>
              <Link href="https://x.com/futureittouch" target="blank"> <FaTwitter className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" /></Link>
              <Link href="https://in.linkedin.com/company/future-it-touch" target="blank"> <FaLinkedinIn className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" /></Link>
              <Link href="https://www.instagram.com/future_it_touch/" target="blank"> <FaInstagram className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" /></Link>
              <Link href="https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about" target="blank">    <FaYoutube className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" /></Link>

              <Link href="https://github.com/Future-IT-Touch-Private-Limited" target="blank">    <FaGithub className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" /></Link>

            </div>
          </div>
          <div className="lg:w-1/2">
            <ul className="flex justify-center max-lg:flex-wrap lg:justify-end">
              <li className="mx-2">
                <Link href="#">
                  <img
                    src="/images/badges-a.webp"
                    alt="badges"
                    className="max-md:w-40"
                  />
                </Link>

              </li>
              <li className="mx-2">
                <Link href="#">
                  <img
                    src="/images/badges-b.webp"
                    alt="badges"
                    className="max-md:w-40"
                  />
                </Link>
              </li>
              <li className="mx-2">
                <Link href="#">
                  <img
                    src="/images/badges-c.webp"
                    alt="badges"
                    className="max-md:w-40"
                  />
                </Link>
              </li>
              <li className="mx-2">
                <Link href="#">
                  <img
                    src="/images/badges-d.webp"
                    alt="badges"
                    className="max-md:w-40"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="block sm:block lg:flex text-center sm:text-center md:text-center lg:text-start lg:justify-between mt-8">
          <div className="w-full lg:w-2/5">
            <ul className="font-medium text-[#727272]">
              <li>Copyright © 2017 <Link href="https://futuretouch.in/"> Future IT Touch Pvt. Ltd.</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-full lg:w-1/4">
            <ul className="font-medium text-[#727272] ">
              <li className='flex justify-center sm:justify-center  lg:justify-start items-center'>
                Made with <FaHeart className='mx-2' style={{ color: "#f00" }} /> in Chandigarh
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4">
            <ul className="flex gap-5 font-medium text-[#727272] justify-center">
              <li>
                <Link href="#">Privacy & Policy</Link>
              </li>
              <li>
                <Link href="#">Faq</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Footer;

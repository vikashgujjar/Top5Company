
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";


const SidebarModal = ({ toggleSidebar }) => {

    const meeee = () => {
        console.log('xcvbfff')
    }

    return (
        <div
            className={`fixed top-0 left-0 bottom-0 bg-[#000c] z-[999] ${toggleSidebar ? "right-0 " : "right-full "
                } transition-all duration-500 ease-in-out`}
        >
            <div
                className={`fixed top-0 right-0 h-screen w-full sm:w-[440px] bg-white shadow-lg z-50 transform `}
            >
                <span
                    className="absolute top-4 right-4 text-gray-600 cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <i className="bi bi-x-lg text-xl font-medium" aria-hidden="true"></i>
                </span>

                <div className="px-8 py-16">
                    {/* About Us Section */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                        <p className="text-base text-[#6a6c72] m-0 tracking-[1px] leading-8 text-justify">
                            Future IT Touch is a leading web design and development firm in
                            Chandigarh, known for creating visually appealing and functioning
                            websites. We provide responsive web design, e-commerce development,
                            and custom online solutions with a customer-centric approach and
                            cutting-edge technology.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-8">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-center">
                                <p className="text-[#f20791]">+91-7056937000</p>
                                <p className="mx-2 text-gray-500 my-2">OR</p>
                                <p className="text-[#202647]">info@futuretouch.in</p>
                            </h2>
                        </div>

                        {/* Social Links */}
                        <ul className="flex space-x-4 justify-center mt-8">
                            <Link href="https://www.linkedin.com/company/future-it-touch/" className='relative  bg-gray-200 h-10 w-10 text-center leading-8 rounded-full transition-all duration-400 hover:text-white hover:bg-gray-500'>
                                <FaLinkedin className="absolute top-2.5 left-2.5 text-xl" />
                            </Link>
                            <Link href="https://twitter.com/futureittouch" className='relative  bg-gray-200 h-10 w-10 text-center leading-8 rounded-full transition-all duration-400 hover:text-white hover:bg-gray-500'>
                                <FaTwitter className="absolute top-2.5 left-2.5 text-xl" />
                            </Link>
                            <Link href="https://www.facebook.com/Futureittouch" className='relative  bg-gray-200 h-10 w-10 text-center leading-8 rounded-full transition-all duration-400 hover:text-white hover:bg-gray-500'>
                                <FaFacebookF className="absolute top-2.5 left-2.5 text-xl" />
                            </Link>
                            <Link href="https://www.instagram.com/future_it_touch/" className='relative  bg-gray-200 h-10 w-10 text-center leading-8 rounded-full transition-all duration-400 hover:text-white hover:bg-gray-500'>
                                <FaInstagram className="absolute top-2.5 left-2.5 text-xl" />
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarModal;

"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SidebarModal from './Slider'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar((prevState) => !prevState);
    };


    return (
        <>
            <header className="bg-white shadow sticky top-0 z-50">
                <div className="relative mx-auto px-6 lg:px-28 bg-white">
                    <div className="flex flex-wrap items-center justify-between py-2">

                        <div className="flex items-center">
                            <Link href="/">
                                <Image
                                    width={700}
                                    height={700}
                                    src="/images/logo.webp"
                                    alt="Move It Solution Logo"
                                    className="w-40 md:w-[300px]"
                                />
                            </Link>
                        </div>

                        {/* Navbar Menu */}
                        <div className="flex items-center">
                            <nav className="">
                                {/* Burger Icon for Mobile */}
                                <button
                                    type="button"
                                    className="block md:hidden text-[#131f58] hover:text-gray-800"
                                    onClick={toggleSidebar}
                                >
                                    <div className="burger-menu w-9 h-auto bg-transparent cursor-pointer inline-block relative top-[1px]">
                                        <span className="block w-9 h-[3px] bg-[#5b5b98] transition-all duration-500 rounded-full mb-1"></span>
                                        <span className="block w-9 h-[3px] bg-[#5b5b98] transition-all duration-500 rounded-full mb-1"></span>
                                        <span className="block w-[28px] ml-auto h-[2px] bg-[#5b5b98] transition-all duration-500 rounded-full"></span>
                                    </div>
                                </button>

                                {/* Desktop Menu */}
                                <ul className="hidden md:flex justify-center items-center md:gap-10">
                                    <li>
                                        <Link href="/">
                                            <span className="text-[#131f58] font-semibold text-lg hover:text-[#f20791]">
                                                Home
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#about">
                                            <span className="text-[#131f58] font-semibold text-lg hover:text-[#f20791]">
                                                About us
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#why-choose-us">
                                            <span className="text-[#131f58] font-semibold text-lg hover:text-[#f20791]">
                                                Why Choose Us
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact">
                                            <span className="text-[#131f58] font-semibold text-lg hover:text-[#f20791]">
                                                Contact
                                            </span>
                                        </a>
                                    </li>
                                    <li onClick={() => setShowSidebar(true)}>
                                        <div className="burger-menu w-9 h-auto bg-transparent cursor-pointer inline-block relative top-[1px]">
                                            <span className="block w-9 h-[3px] bg-[#5b5b98] transition-all duration-500 rounded-full mb-1"></span>
                                            <span className="block w-9 h-[3px] bg-[#5b5b98] transition-all duration-500 rounded-full mb-1"></span>
                                            <span className="block w-[28px] ml-auto h-[2px] bg-[#5b5b98] transition-all duration-500 rounded-full"></span>
                                        </div>
                                    </li>

                                </ul>

                                {/* Mobile Menu */}
                                <ul className={`absolute right-0 top-14 z-50 py-2 border-t w-full bg-white  md:hidden transition-all duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-96'}`}>
                                    <li>
                                        <Link href="/" className="block py-3 px-4 text-[#131f58] font-semibold text-base hover:text-[#f20791]" onClick={() => setIsOpen(false)}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#about" className="block py-3 px-4 text-[#131f58] font-semibold text-base hover:text-[#f20791]" onClick={() => setIsOpen(false)}>
                                            About us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#why-choose-us" className="block py-3 px-4 text-[#131f58] font-semibold text-base hover:text-[#f20791]" onClick={() => setIsOpen(false)}>
                                            Why Choose Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact" className="block py-3 px-4 text-[#131f58] font-semibold text-base hover:text-[#f20791]" onClick={() => setIsOpen(false)}>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {showSidebar && <SidebarModal toggleSidebar={toggleSidebar} showSidebar={showSidebar} />}
        </>
    )
}

export default Navbar;

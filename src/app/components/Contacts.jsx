"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaAddressBook, FaEnvelope, FaInternetExplorer, FaPhoneAlt, FaUser } from 'react-icons/fa';
import Swal from "sweetalert2";

const ContactArea = () => {

  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",
    new_url: "",
    message: "",
    userEmailsir:  "info@futuretouch.in"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!formData.S_name.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Name is required.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#f44336",
      });
      return;
    }
  
    if (!formData.S_email.trim() || !/\S+@\S+\.\S+/.test(formData.S_email)) {
      Swal.fire({
        title: "Error!",
        text: "A valid email is required.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#f44336",
      });
      return;
    }
  
    if (!formData.S_phone.trim() || !/^\d{10}$/.test(formData.S_phone)) {
      Swal.fire({
        title: "Error!",
        text: "A valid 10-digit phone number is required.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#f44336",
      });
      return;
    }
  
    if (!formData.new_url.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Website URL is required.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#f44336",
      });
      return;
    }
  
    if (!formData.message.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Message cannot be empty.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#f44336",
      });
      return;
    }
  
    const urlEncodedData = new URLSearchParams();
  
    for (const [key, value] of Object.entries(formData)) {
      urlEncodedData.append(key, value);
    }
  
    try {
      const response = await fetch(
        "https://sendingmail-6znv.onrender.com/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedData.toString(),
        }
      );
  
      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#4CAF50",
        });
  
        // Reset form
        setFormData({
          S_name: "",
          S_email: "",
          S_phone: "",
          new_url: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Failed to submit the form. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
          confirmButtonColor: "#f44336",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
        confirmButtonColor: "#f44336",
      });
    }
  };
  


  return (

    <div className="w-full border p-5 lg:p-10 bg-white">
      <div className="text-left">
        <h5 className="text-sm text-[#f20791] uppercase tracking-wider">Contact Us</h5>
        <h1 className="text-lg lg:text-xl font-bold text-gray-800">Make an Online Appointment Booking</h1>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">For Business Planning.</h1>
      </div>
      <div className="mt-8">
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 relative">
              <FaUser className="absolute top-5 left-4 text-gray-500 " />
              <input
                type="text"
                name="S_name"
                placeholder="Enter Name"
                value={formData.S_name}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-xl h-14 px-8 mb-5 text-base leading-6 text-gray-500 font-normal font-fira transition duration-500 focus:outline-none focus:border-[#f20791]"
              />

            </div>
            <div className="w-1/2 px-2 relative">
              <FaEnvelope className="absolute top-5 left-4 text-gray-500 " />
              <input
                type="email"
                name="S_email"
                placeholder="Enter Email"
                value={formData.S_email}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-xl h-14 pl-8 pr-4 mb-5 text-base leading-6 text-gray-500 font-normal font-fira transition duration-500 focus:outline-none focus:border-[#f20791]"
              />
            </div>

            <div className="w-1/2 px-2 relative">
              <FaPhoneAlt className="absolute top-5 left-4 text-gray-500 " />
              <input
                id="form_phone"
                type="tel"
                name="S_phone"
                placeholder="Phone *"
                value={formData.S_phone}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-xl h-14 px-8 mb-5 text-base leading-6 text-gray-500 font-normal font-fira transition duration-500 focus:outline-none focus:border-[#f20791]"
              />
            </div>
            <div className="w-1/2 px-2 relative">
              <FaInternetExplorer className="absolute top-5 left-4 text-gray-500 " />
              <input
                id="form_from"
                type="text"
                name="new_url"
                value={formData.new_url}
                onChange={handleChange}
                placeholder="Website *"
                className="w-full border border-gray-400 rounded-xl h-14 px-8 mb-5 text-base leading-6 text-gray-500 font-normal font-fira transition duration-500 focus:outline-none focus:border-[#f20791]"
              />
            </div>
            <div className="w-full px-2 relative">
              <FaEnvelope className="absolute top-4 left-4 text-gray-500 " />
              <textarea
                id="form_message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                className="w-full border border-gray-400 rounded-xl h-28 px-8 py-3 mb-5 text-base leading-6 text-gray-500 font-normal font-fira transition duration-500 focus:outline-none focus:border-[#f20791]"
              ></textarea>
            </div>
            <div className="w-full px-2">
              <button
                type="submit"
                className="bg-[#f20791] text-white px-12 py-4 font-semibold rounded-full transition duration-500 text-base  font-fira hover:bg-[#f20790de]"
              >
                SEND NOW <i className="bi bi-arrow-right inline-block text-[20px] relative top-[2px] ml-2 rotate-[-45deg]"></i>
              </button>

            </div>
          </div>
        </form>
        <div id="status" className="text-red-500 mt-4"></div>
      </div>
    </div>


  );
};

export default ContactArea;

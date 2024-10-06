import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto !px-6 bg-[#23655A] text-secondary-green">
      <div className="grid grid-cols-12 p-3 text-sm">
        <ul className="grid grid-cols-2 col-span-12 md:col-span-9 md:grid-cols-8">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="counselors">Counselors</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="booking">Booking</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="faq">FAQ</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
        <ul className="grid justify-end grid-cols-2 col-span-12 gap-2 py-1 md:flex md:col-span-3">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <hr className="w-full col-span-12" />
        <ul className="flex col-span-12 gap-5 py-1 md:col-span-6">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>©2021 by Mental Health & You</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

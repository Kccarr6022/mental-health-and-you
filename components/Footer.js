import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-footer-background-green md:h-32 md:flex flex-col justify-evenly p-6 md:p-0 overflow-hidden">
      <div className="md:flex hidden justify-between">
        <ul className="md:flex text-xl mx-[10%] gap-16 pl-6">
          <li className="text-footer-text-green cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="text-footer-text-green cursor-pointer">
            <Link href="/">Counselors</Link>
          </li>
          <li className="text-footer-text-green cursor-pointer">
            <Link href="/">Services</Link>
          </li>
          <li className="text-footer-text-green cursor-pointer">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-footer-text-green cursor-pointer">
            <Link href="/">Booking</Link>
          </li>
          <li className="text-footer-text-green cursor-pointer">
            <Link href="/">About</Link>
          </li>
          <li className="text-footer-text-green cursor-pointer">
            <Link href="/">FAQ</Link>
          </li>
          <li className="text-footer-text-green cursor-pointer">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <ul className="md:flex md:mr-0 mr-[11%] gap-x-6">
          <li>
            <FaFacebook size={35} color="#6B9D95" />
          </li>
          <li>
            <FaTwitter size={35} color="#6B9D95" />
          </li>
          <li>
            <FaInstagram size={35} color="#6B9D95" />
          </li>
          <li>
            <FaLinkedin size={35} color="#6B9D95" />
          </li>
        </ul>
      </div>
      <hr className="mx-[10%] border-2 rounded-full border-secondary-green hidden md:block" />
      <div className="md:flex items-center mx-[10%]">
        <div className="text-footer-text-green mx-5 cursor-pointer text-xl">
          Terms & Conditions
        </div>
        <div className="text-footer-text-green mx-5 cursor-pointer text-xl">
          Privacy Policy
        </div>
        <div className="text-footer-text-green mx-5 cursor-pointer text-xl">
          @2021 by Mental Health & You
        </div>
      </div>
    </div>
  );
};

export default Footer;

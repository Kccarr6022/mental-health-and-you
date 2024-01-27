import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // TODO" 800 px adjustment for mobile
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = () => setNav(!nav);

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const MobileNav = () => {
    return (
      <div className="h-[80px] bg-slate-100 relative flex w-[100vw] text-slate-800 z-50 drop-shadow-lg justify-between">
        <ul className="flex w-full justify-between items-center">
          <li
            className="pl-8 text-primary-green border-0 rounded-full"
            onClick={toggleMenu}
          >
            {!nav ? <GiHamburgerMenu size={40} /> : <HiOutlineX size={40} />}
          </li>
          <li className="">
            <Link href="/">
              <Image src={"/logo.png"} height={80} width={80} alt="" />
            </Link>
          </li>
          <li className="pr-8 font-bold text-primary-green text-2xl">
            <Link href="/login">Log in</Link>
          </li>
        </ul>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute z-20 mt-[80px] bg-slate-100 text-2xl border-0 rounded-br-2xl text-center text-primary-green min-w-[12%] animate-fadeDown"
          }
        >
          <li className="border-2 border-primary-green p-2">
            <Link href="/home">Home</Link>
          </li>
          <li className="border-2 border-primary-green p-2">
            <Link href="/counselors">Counselors</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">
            {" "}
            <Link href="/services">Services</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">
            <Link href="/booking">Booking</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="p-2 border-2 rounded-br-2xl border-primary-green">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  };

  const DesktopNav = () => {
    return (
      <div className="h-[100px] bg-slate-100 relative flex w-[100vw] text-primary-green z-50 drop-shadow-lg justify-between overflow-hidden">
        <ul className="flex w-full items-center">
          <li className="pl-14 text-primary-green border-0">
            <Link href="/">
              <Image
                src={"/logo.png"}
                height={80}
                width={80}
                alt=""
                className=""
              />
            </Link>
          </li>
          <li className="ml-4 font-bold text-primary-green text-left">
            <Link href="/">
              <h1 className="md:text-l lg:text-2xl">Mental Health & You</h1>
            </Link>
          </li>
        </ul>

        <ul className="flex w-full items-center gap-10 justify-end mr-6 text-xl z-10">
          <li className="hover:text-shadow-glow transition-all duration-300">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-shadow-glow transition-all duration-300">
            <Link href="/counselors">Counselors</Link>
          </li>
          <li className="hover:text-shadow-glow transition-all duration-300">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-shadow-glow transition-all duration-300">
            <Link href="/booking">Booking</Link>
          </li>
          <li className="hover:text-shadow-glow transition-all duration-300">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-shadow-glow transition-all duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-shadow-glow transition-all duration-300">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="hover:text-shadow-glow transition-all duration-300">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold text-primary-green text-center border-4 border-primary-green rounded-xl py-4 hover:bg-primary-green hover:text-slate-100 transition-all duration-200">
            <Link href="/login">Log in</Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      {isMobile && <MobileNav />}
      {!isMobile && <DesktopNav />}
    </>
  );
};

export default Navbar;

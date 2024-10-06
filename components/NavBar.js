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
    if (window.innerWidth <= 1000) {
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
        <ul className="flex items-center justify-between w-full">
          <li
            className="pl-8 border-0 rounded-full text-primary-green"
            onClick={toggleMenu}
          >
            {!nav ? <GiHamburgerMenu size={40} /> : <HiOutlineX size={40} />}
          </li>
          <li className="">
            <Link href="/">
              <Image src={"/logo.png"} height={80} width={80} alt="" />
            </Link>
          </li>
          <li className="pr-8 text-2xl font-bold text-primary-green">
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
          <li className="p-2 border-2 border-primary-green">
            <Link href="/home">Home</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">
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
            <Link href="/blogs/1">Blog</Link>
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
      <div className="h-[100px] bg-slate-100 relative flex w-full text-primary-green z-50 drop-shadow-lg justify-between overflow-hidden">
        <ul className="flex items-center w-full">
          <li className="border-0 pl-14 text-primary-green">
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
          <li className="ml-4 font-bold text-left text-primary-green">
            <Link href="/">
              <h1 className="md:text-l lg:text-2xl">Mental Health & You</h1>
            </Link>
          </li>
        </ul>

        <ul className="z-10 flex items-center justify-end w-full gap-10 p-1 text-xl sm:text-base md:text-lg lg:text-xl">
          <li className="transition-all duration-300 hover:text-shadow-glow">
            <Link href="/home">Home</Link>
          </li>
          <li className="transition-all duration-300 hover:text-shadow-glow">
            <Link href="/counselors">Counselors</Link>
          </li>
          <li className="transition-all duration-300 hover:text-shadow-glow">
            <Link href="/services">Services</Link>
          </li>
          <li className="transition-all duration-300 hover:text-shadow-glow">
            <Link href="/booking">Booking</Link>
          </li>
          <li className="transition-all duration-300 hover:text-shadow-glow">
            <Link href="/blogs/1">Blog</Link>
          </li>
          <li className="transition-all duration-300 hover:text-shadow-glow">
            <Link href="/about">About</Link>
          </li>
          <li className="transition-all duration-300 hover:text-shadow-glow">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="transition-all duration-300 hover:text-shadow-glow">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-4 font-bold text-center transition-all duration-200 border-4 text-primary-green border-primary-green rounded-xl hover:bg-primary-green hover:text-slate-100">
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

import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
            <Image src={"/logo.png"} height={80} width={80} alt="" />
          </li>
          <li className="pr-8 font-bold text-primary-green text-2xl">
            <Link href="/SignUp">Sign Up</Link>
          </li>
        </ul>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute z-20 mt-[80px] bg-slate-100 text-2xl border-0 rounded-br-2xl text-center text-primary-green min-w-[12%]"
          }
        >
          <li className="p-2 border-2 border-primary-green">
            <Link href="/Home">Home</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">
            <Link href="/Counselors">Counselors</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">Services</li>
          <li className="p-2 border-2 border-primary-green">Booking</li>
          <li className="p-2 border-2 border-primary-green">Blog</li>
          <li className="p-2 border-2 border-primary-green">About</li>
          <li className="p-2 border-2 border-primary-green">FAQ</li>
          <li className="p-2 border-2 rounded-br-2xl border-primary-green">
            Contact
          </li>
        </ul>
      </div>
    );
  };

  const DesktopNav = () => {
    return (
      <div className="h-[80px] bg-slate-100 relative flex w-[100vw] text-slate-800 z-50 drop-shadow-lg justify-between">
        <ul className="flex w-full justify-between items-center">
          <li className="pl-8 text-primary-green border-0 rounded-full">
            <Image src={"/logo.png"} height={80} width={80} alt="" />
          </li>
          <li className="pr-8 font-bold text-primary-green text-2xl">
            <Link href="/SignUp">Sign Up</Link>
          </li>
        </ul>

        <ul className="flex w-full justify-between items-center">
          <li className="p-2 border-2 border-primary-green">
            <Link href="/Home">Home</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">
            <Link href="/Counselors">Counselors</Link>
          </li>
          <li className="p-2 border-2 border-primary-green">Services</li>
          <li className="p-2 border-2 border-primary-green">Booking</li>
          <li className="p-2 border-2 border-primary-green">Blog</li>
          <li className="p-2 border-2 border-primary-green">About</li>
          <li className="p-2 border-2 border-primary-green">FAQ</li>
          <li className="p-2 border-2 rounded-br-2xl border-primary-green">
            Contact
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

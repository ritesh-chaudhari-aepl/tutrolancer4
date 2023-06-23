"use client";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import { BsWhatsapp } from "react-icons/bs";

export default function Header({ myRef }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setScroll(true) : setScroll(false);
    });
  }, []);
  return (
    <header
      className={`${
        scroll
          ? "top-0 z-30 sm:top-0 sm:py-10 bg-lightBg-h shadow-2xl overflow-hidden"
          : "top-0 sm:top-0"
      } py-6 bg-lightBg-h sm:py-8 fixed w-full transition-all z-10`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 flex justify-between items-center">
        {/* logo */}
        <a href="#" className="bg-secondary p-1">
          <span className="font-Inter font-bold tracking-[10px] text-2xl uppercase sm:text-[30px]">
            LOGO
          </span>
          {/* <Image src={logo} className="md:w-24 w-20" alt="logo" /> */}
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Navbar ref={myRef} />
        </div>
          {/* <div className="hidden sm:block"> */}
          <div className="flex">
          <a
            href="#"
            target="_blank"
            className="flex gap-2 items-center rounded-full bg-green md:px-8 md:py-4 px-3 py-3 text-sm font-medium text-normalbg transition hover:bg-indigo-700 capitalize"
          >
            <BsWhatsapp className="md:text-xl md:font-bold text-lg font-normal" />
            Chat on Whatsapp
          </a>
          {/* <a
            onClick={() => handleScroll("contact")}
            className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Contact Us
          </a> */}
          {/* cta button - initially hidden - show on desktop mode */}
          {/* mobile nav trigger btn - hidden on desktop */}
          <button
            className="lg:hidden md:ml-4 ml-1"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <HiOutlineX className="text-3xl text-primary" />
            ) : (
              <AiOutlineMenu className="text-3xl text-secondary" />
            )}
          </button>
          {/* mobile nav - hidden on desktop */}
        </div>
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] block lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

"use client";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";

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
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Navbar ref={myRef} />
        </div>
        <div className="hidden lg:block">
          <a
            href="#"
            className="inline-block rounded-full bg-transparent px-3 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign In
          </a>
          <a
            href="#"
            className="inline-block rounded-full bg-btnColor px-8 py-4 text-sm font-medium text-lightBg-n transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        {/* mobile nav trigger btn - hidden on desktop */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-primary" />
          ) : (
            <AiOutlineMenu className="text-3xl text-secondary" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

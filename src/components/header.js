"use client"
import { useState ,useEffect} from "react"

export default function  Header(){
  const [scroll,setScroll]=useState(false)
  useEffect(()=>{
        window.addEventListener("scroll",()=>{
          window.scrollY>70 ? setScroll(true) : setScroll(false)
        })
  },[])
    return(<>
    <header class={`${
      scroll ? "top-0 z-20 bg-lightBg-n overflow-hidden shadow-sm sm:top-0 sm:py-10 shadow-btnColor" : 
      "top-0 sm:top-0" 
    } py-6 bg-lightBg-h w-full sm:py-8 fixed transition-all z-10`}>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center md:gap-12">
      <a class="block text-red-700 text-xl tracking-[8px] leading-3 bg-btnColor p-3" href="/">
      LOGO
    </a>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <a class="text-black transition font-sans font-medium hover:text-black/75" href="/">
              About Us
            </a>
          </li>

          <li>
            <a class="text-black transition font-sans font-medium hover:text-black/75" href="/">
              Services
            </a>
          </li>

          <li>
            <a class="text-black transition font-sans font-medium hover:text-black/75" href="/">
              Features
            </a>
          </li>

          <li>
            <a class="text-black transition font-sans font-medium hover:text-black/75" href="/">
              Pricing
            </a>
          </li>

          <li>
            <a class="text-black transition font-sans font-medium hover:text-black/75" href="/">
              Review
            </a>
          </li>

          <li>
            <a class="text-black transition font-sans font-medium hover:text-black/75" href="/">
              Become A Tutor
            </a>
          </li>
          <li>
            <a class="text-black transition font-sans font-medium hover:text-black/75" href="/">
              Admin
            </a>
          </li>
        </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
        <a
            class="block rounded-3xl   px-5 py-2.5 text-opacity-0  text-sm font-medium font-sans   transition hover: border-2"
            href="/"
          >
            Sign In
          </a>

          <div class="hidden sm:flex">
          <a
            class="hidden rounded-3xl bg-btnColor text-lightBg-n   px-5 py-2.5 text-sm font-medium font-sans text-teal-600 transition hover:text-teal-600/75 sm:block"
            href="/"
          >
            Sign Up
          </a>
          </div>
        </div>

        <div class="block md:hidden">
          <button
            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
   
        
</>
    )
}

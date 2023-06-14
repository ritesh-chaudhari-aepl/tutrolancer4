"use client"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState ,useEffect} from "react"
import Navbar from "./navbar"
import MobileNav from './mobileNav';
export default function  Header({myRef}){
  const [isMobile,setIsMobile]=useState(false)
  const [scroll,setScroll]=useState(false)
  useEffect(()=>{
        window.addEventListener("scroll",()=>{
          window.scrollY>70 ? setScroll(true) : setScroll(false)
        })
  },[])
    return(<>
    <header class={`${
      scroll ? "top-0 z-20 bg-lightBg-n overflow-hidden   sm:top-0 sm:py-10 shadow-xl shadow-dark" : 
      "top-0 sm:top-0" 
    } py-2 bg-lightBg-h h-fit w-full sm:py-5 fixed transition-all z-10`}>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center md:gap-12">
      <a class="block text-red-700 text-xl tracking-[8px] leading-3 bg-btnColor p-3" href="/">
      LOGO
    </a>
      </div>

      <Navbar ref={myRef}/>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
        <a
            class="block rounded-3xl   px-5 py-2.5 text-opacity-0  text-sm font-medium font-sans   transition border-2"
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

       {/* <button className='lg:hidden' onClick={()=>setIsMobile(!isMobile)}>{isMobile ? (<MenuOutlinedIcon/>) : (<CloseOutlinedIcon/>)}</button>
       <div className={`${isMobile ? "left-0" :"-left-full"} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}><MobileNav/></div> */}
      </div>
    </div>
  </div>
</header>
   
        
</>
    )
}

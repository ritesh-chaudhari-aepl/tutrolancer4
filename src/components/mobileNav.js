import { nav } from "@/data/nav";
import { BsWhatsapp } from "react-icons/bs";

const MobileNav = () => {
  function handleScroll(section){
    let value = document.getElementById(section);
    console.log(value);
    if(value){
      value.scrollIntoView({
        behavior: "smooth",
        block:"center",
        inline: "center",
      });
    }
  }
  return (
    <div className="bg-btnColor w-full h-full">
      <ul className="h-full flex flex-col justify-center no-underline items-center gap-y-8">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li className="no-underline" key={name}>
              <a className="link text-white-white text-xl" onClick={() => handleScroll(href)}>
                {name}
              </a>
            </li>
          );
        })}
        <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
          <a
            href="#" target="_blank"
            className="flex gap-2 items-center rounded-full bg-green px-4 py-4 text-sm font-medium text-normalbg transition hover:bg-indigo-700 capitalize"
          >
            <BsWhatsapp className="md:text-xl md:font-bold text-lg font-normal" />
            Chat on Whatsapp
          </a>
          {/* <a
            onClick={()=>handleScroll('contact')}
            className="inline-block rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Contact Us
          </a> */}
        </div>
        {/* <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
          <a
            href="#"
            className="inline-block rounded-full bg-transparent px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="inline-block text-dark rounded-full bg-lightBg-b px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
        </div> */}
      </ul>
    </div>
  );

  // return (
  //   <div class="hidden md:block">
  //     <nav aria-label="Global">
  //       <ul class="flex items-center gap-6 text-sm">
  //         {nav.map((value) => {
  //           return (
  //             <li key={value.name}>
  //               <a
  //                 class="text-black transition font-sans font-medium hover:text-black/75"
  //                 href={value.href}
  //               >
  //                 {value.name}
  //               </a>
  //             </li>
  //           );
  //         })}

  //         <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
  //           <a
  //             href="#"
  //             className="inline-block rounded-full bg-transparent px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
  //           >
  //             Sign Up
  //           </a>
  //           <a
  //             href="#"
  //             className="inline-block rounded-full bg-yellow-dark px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
  //           >
  //             Sign Up{" "}
  //           </a>
  //         </div>
  //       </ul>
  //     </nav>
  //   </div>
  // );
};

export default MobileNav;

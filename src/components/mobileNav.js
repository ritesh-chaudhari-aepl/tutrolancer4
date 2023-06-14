import {nav} from '@/data/nav'
const MobileNav = () => {
  return(
    <div class="hidden md:block">
         <nav aria-label="Global">
        <ul class="flex items-center gap-6 text-sm">
            
            {nav.map((value)=>{
                return(
                    <li key={value.name}>
                    <a class="text-black transition font-sans font-medium hover:text-black/75" href={value.href}>
                       {value.name}
                    </a>
                  </li>
                )
            })}
         
         <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
          <a
            href="#"
            className="inline-block rounded-full bg-transparent px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="inline-block rounded-full bg-yellow-dark px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >Sign Up </a>
          </div>
        </ul>

        
        </nav>
      </div>
  )
}

export default MobileNav
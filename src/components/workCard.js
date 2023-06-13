
import Image from "next/image"
export default function WorkCard({icon,text,sn}) {
  return (
    <div className=" p-3    w-48 h-38 justif mx-auto my-4   rounded-md">
      <div  className="w-fit   m-auto items-center align-middle">

         <Image
        
         src={icon}
         width={80}
         height={80}
         alt="Not found"
         />
      </div>
        <div className="p-3 text-sm flex font-normal">
          <span className="text-2xl bg-lightBg-n px-2 py-0 h-fit rounded-full text-btnColor">{sn}</span>
          <span className="">{text}</span></div>
        {/* <p>{children}</p> */}
    </div>
  )
}

 
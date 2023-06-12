 
import Image from 'next/image'
import hero from '../assets/img/heroImg.png'
const Hero = () => {
  return (
     <div className='bg-lightBg-h'>
        <div className=' flex-wrap  mx-auto max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 sm:flex'>
            <div className='flex-1 sm:w-2/5'>
                <div className="font-serif font-bold text-4xl    py-3 sm:pt-9    lg:text-5xl lg:pt-0">Broaden Your Knowledge With Tutors</div>
                <div className=" font-sans font-normal text-sm py-3">
                    Use your knowledge for the grouth of our features of our natip no sfgsdfg gsgsg . Tis shoei be ui ther hearit ofg exery lingvig entety .
                </div>
                <div className='flex-1 my-5'>

                <a
            class=" text-lg  rounded-3xl bg-btnColor text-lightBg-n w-fit    px-5 py-2.5   font-medium font-sans text-teal-600 transition hover:text-teal-600/75"
            href="/"
          >
            Join Us
          </a>
                </div>
            </div>
            <div className='sm:py-10    sm:w-3/5'>
            <Image
      src={hero}
     
      alt="Picture of the author"
    />
            </div>
        </div>
        </div>
  )
}

export default Hero
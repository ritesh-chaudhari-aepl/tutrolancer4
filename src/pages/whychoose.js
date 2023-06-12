
 
import Image from 'next/image'
import whychoose from '../assets/img/whychoose.png'
const Whychoose = () => {
    return (
       <div className='bg-lightBg-n'>
          <div className=' flex-wrap  mx-auto max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 sm:flex'>
              <div className='flex-1 sm:w-1/2'>
                  <div className="font-serif font-bold text-4xl    py-3 sm:pt-9    lg:text-5xl lg:pt-0">Why you should choose us?</div>
                  <div className=" font-sans font-normal text-sm py-3">
                      Tutorlancer is an online plateform that connects online tutors with students across the globle who sheeks academic help. We help students across the globe who are stuck with there subjects, by connecting them with tutor. We aim to strategically connect students and tutors online.
                  </div>
                  <div className='flex-1 my-5'>
  
                  <a
              class=" text-lg  rounded-3xl bg-btnColor text-lightBg-n w-fit    px-5 py-2.5   font-medium font-sans text-teal-600 transition hover:text-teal-600/75"
              href="/"
            >
              Contact Us
            </a>
                  </div>
              </div>
              <div className='sm:py-10    sm:w-1/2'>
              <Image
        src={whychoose}
                
                height={500}
        alt="Picture of the author"
      />
              </div>
          </div>
          </div>
    )
  }
  
  export default Whychoose
"use client"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/image"
import demo from '../assets/img/whyChoose.png'
export default function Testimonial(){
    return(
        <div className='bg-lightBg-n my-5 pb-12 font-sans'>
            <div className="align-middle   items-center m-auto">
                <div className=" text-center p-9 font-sans ">
                    <div>
                        Testimonial
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl py-5  font-bold">
                        Our Success Stories
                    </div>
                </div>
                <div className="flex max-w-3xl text-center items-center m-auto">
                <button><ArrowBackIosIcon/></button>
                <div className='bg-normalbg   rounded-xl justify-center items-center flex-col flex shadow-md shadow-btnColor'>
                <blockquote className='relative'>
                        <div className='font-sans '>
                            
                            <svg
                className="sm:h-28 sm:w-28 h-20 w-20 text-gray-100 dark:text-gray-700"
                width="28"
                height="28"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="#F97C5F"
                />
              </svg>
                
                             </div>
               <div className='px-4'> Tutorlancer has helped me not only understand the subject but master the answering techniques required to obtain a istinction. the material is not only well compiled and organies but helps immensely with revision.</div>
                        <div className='font-serif pt-3 text-xl font-bold'>Jhon Dev</div>
                        <div className='font-sans text-sm'>UI/UX Designer</div>


                          <div className="sv">
                  <svg
                    className="sm:h-28 sm:w-28 h-20 w-20 float-right text-gray-100 dark:text-gray-700"
                    width="28"
                    height="28"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.60238 5.7C8.60238 4.92667 8.85112 4.3 9.3486 3.82C9.84608 3.36667 10.4745 3.14 11.2338 3.14C12.1502 3.14 12.9095 3.44667 13.5117 4.06C14.0878 4.67333 14.3758 5.55333 14.3758 6.7C14.3758 7.92667 14.0354 9.12667 13.3547 10.3C12.6477 11.5 11.6658 12.4467 10.409 13.14L9.5057 11.74C10.1865 11.26 10.7363 10.7267 11.1552 10.14C11.5479 9.55333 11.8098 8.87333 11.9407 8.1C11.7051 8.20667 11.4302 8.26 11.116 8.26C10.3828 8.26 9.78062 8.02 9.30933 7.54C8.83803 7.06 8.60238 6.44667 8.60238 5.7ZM1.37579 5.7C1.37579 4.92667 1.62453 4.3 2.12201 3.82C2.61949 3.36667 3.24789 3.14 4.0072 3.14C4.92362 3.14 5.68294 3.44667 6.28516 4.06C6.86119 4.67333 7.14921 5.55333 7.14921 6.7C7.14921 7.92667 6.80883 9.12667 6.12806 10.3C5.42111 11.5 4.43924 12.4467 3.18244 13.14L2.27912 11.74C2.95988 11.26 3.50973 10.7267 3.92866 10.14C4.32141 9.55333 4.58325 8.87333 4.71416 8.1C4.47851 8.20667 4.20359 8.26 3.88939 8.26C3.15626 8.26 2.55304 8.02 2.08175 7.54C1.61045 7.06 1.37579 6.44667 1.37579 5.7Z"
                      fill="#F97C5F"
                    />
                  </svg>
                </div>
                        </blockquote>
                </div>
                <button><ArrowForwardIosIcon/></button>
                        
                </div>
                        <Image
                        className='m-auto rounded-xl shadow-xl shadow-btnColor bottom-10 relative'
                        src={demo}
                        width={130}
                        height={130}
                        alt="Not Found"
                        />
            </div>
        </div>
    
    )
}
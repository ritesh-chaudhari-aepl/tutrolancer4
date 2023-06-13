
 
import Image from 'next/image'
import mobile from '../assets/img/mobile.png'
const WhatsappSupport = () => {
    return (
       <div className='whataappBg text-normalbg'>
          <div className=' flex-wrap  mx-auto max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 sm:flex'>
              <div className='flex-1 sm:w-2/3'>
                  <div className="font-serif font-bold text-4xl    py-3 sm:pt-9    lg:text-5xl lg:pt-0">Instant & Dedicated Whatsapp Support</div>
                  <div className=" font-sans font-normal text-sm py-3">
                  Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience.
                  </div>
                  <div className=" font-sans font-normal text-sm py-3">
                  <ul>
                    <li>Real-Time Tools And Rich.</li>
                    <li>Insights Mean Our Support Solution.</li>
                    <li>Amplifies Your Team For An Unbeatable experience.</li>
                  </ul>
                  </div>
                  
              </div>
              <div className='sm:py-10    sm:w-1/3'>
              <Image
        src={mobile}
                
                height={500}
        alt="Picture of the author"
      />
              </div>
          </div>
          </div>
    )
  }
  
  export default WhatsappSupport
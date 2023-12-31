import workIcon1 from '../assets/img/workIcon1.png'
import workIcon2 from '../assets/img/workIcon2.png'
import workIcon3 from '../assets/img/workIcon3.png'
import workIcon4 from '../assets/img/workIcon4.png'
import WorkCard from "@/components/workCard"
export default function HowItWorks() {
    return (
      <div className='bg-normalbg py-14' >
      <div className=" sm:max-w-5xl mx-auto max-w-screen-xl  items-center gap-8 px-4 sm:px-6 lg:px-10  ">
              <p className="font-serif    text-center text-3xl sm:text-4xl py-7  font-bold">How It Works?</p>
              <div className='flex   flex-wrap justify-items-center'>
              <WorkCard sn={1} text="Quisque curser porttitor risus." icon={workIcon1}/>
              <WorkCard sn={2} text="Quisque curser porttitor risus." icon={workIcon2}/>
              <WorkCard sn={3} text="Quisque curser porttitor risus." icon={workIcon3}/>
              <WorkCard sn={4} text="Quisque curser porttitor risus." icon={workIcon4}/>
                      </div>
           
       </div>
       </div>
    )
  }
   
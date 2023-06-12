"use client"
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

import ServiceCard from '@/components/serviceCard';
export default function Services() {
  return (
    <div className='bg-normalbg py-14' >
    <div className="  mx-auto max-w-screen-xl  items-center gap-8 px-4 sm:px-6 lg:px-8  ">
            <p className="font-serif text-3xl sm:text-4xl py-7  font-bold">Popular Services</p>
            <div className='flex   flex-wrap justify-items-center'>
                    <ServiceCard  text="Online Tutorial" icon={<PeopleOutlineOutlinedIcon className='text-btnColor  '/>}/> 
                    <ServiceCard  text="24/7 Support" icon={<AccessTimeOutlinedIcon className='text-btnColor  '/>}/> 
                    <ServiceCard  text="Live Sessions" icon={<LiveTvOutlinedIcon className='text-btnColor  '/>}/> 
                    <ServiceCard  text="Lab Work" icon={<ScienceOutlinedIcon className='text-btnColor  '/>}/> 
                    </div>
                    <div className='flex    flex-wrap justify-items-center'>
                    <ServiceCard  text="Project Help" icon={<AccountTreeOutlinedIcon className='text-btnColor  '/>}/> 
                    <ServiceCard  text="Vidio Calling Support" icon={<VideoCameraFrontOutlinedIcon className='text-btnColor  '/>}/> 
                    <ServiceCard  text= "Writing Help" icon={<DrawOutlinedIcon className='text-btnColor  '/>}/> 
                    <ServiceCard  text="Homework Help" icon={<EditCalendarOutlinedIcon className='text-btnColor  '/>}/> 
                    </div>
         
     </div>
     </div>
  )
}
 
"use client"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SellIcon from '@mui/icons-material/Sell';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';

import FeatureCard from "@/components/featureCard"
export default function CoreFeatures() {
    return (
      <div className='whyChoose py-14' >
      <div className=" sm:max-w-5xl mx-auto max-w-screen-xl  items-center gap-8 px-4 sm:px-6 lg:px-10  ">
              <p className="font-serif text-3xl sm:text-4xl py-7  font-bold">Our Core Features</p>
              <div className='flex   flex-wrap justify-items-center'>
                      <FeatureCard msg={"I am trying to make better UI. I am few step away from the complition of the task."} title="Online Tutorial" icon={<SupportAgentIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                      <FeatureCard msg={"I am trying to make better UI. I am few step away from the complition of the task."} title="24/7 Support" icon={<AccessAlarmIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                      <FeatureCard msg={"I am trying to make better UI. I am few step away from the complition of the task."} title="Live Sessions" icon={<SellIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                      <FeatureCard msg={"I am trying to make better UI. I am few step away from the complition of the task."} title="Lab Work" icon={<FindInPageOutlinedIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                   
                      <FeatureCard  msg={"I am trying to make better UI. I am few step away from the complition of the task."} title="Lab Work" icon={<MonetizationOnOutlinedIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                      <FeatureCard  msg={"I am trying to make better UI. I am few step away from the complition of the task."} title="Lab Work" icon={<DonutLargeOutlinedIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                       
                      </div>
           
       </div>
       </div>
    )
  }
   
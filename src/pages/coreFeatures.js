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
      <div id='features' className='whyChoose py-14' >
      <div className=" sm:max-w-5xl mx-auto max-w-screen-xl  items-center gap-8 px-4 sm:px-6 lg:px-10  ">
              <p className="font-serif text-3xl sm:text-4xl py-7  font-bold">Our Core Features</p>
              <div className='flex   flex-wrap justify-items-center'>
                <FeatureCard msg={"Good Grades is focused on ensuring to meet the needs of the students around the globe for their assignments."} title="24/7 Support" icon={<SupportAgentIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                <FeatureCard msg={"We make sure your work reach you on time because we know if it's not with you on-time, it will be a waste."} title="On Time Delivery" icon={<AccessAlarmIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                <FeatureCard msg={"Our Prices are reasonable and pocket-friendly because we understand you better."} title="Competitive Pricing" icon={<SellIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                <FeatureCard msg={"Get plagiarism free work where each and every assignment is written from scratch to ensure that no content is plagiarized."} title="Plagiarism Free" icon={<FindInPageOutlinedIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                <FeatureCard msg={"Your payment is secured by Paypal and Razorpay, upto 100% money back guarantee."} title="Refundable" icon={<MonetizationOnOutlinedIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                <FeatureCard msg={"You get 100% customized work as per your requirements, we are always willing to accommodate."} title="Unlimited Revisions" icon={<DonutLargeOutlinedIcon fontSize='30px' className='text-btnColor text-4xl '/>}/> 
                  
              </div>
           
       </div>
       </div>
    )
  }
   
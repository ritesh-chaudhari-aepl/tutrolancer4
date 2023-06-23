"use client";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

import ServiceCard from "@/components/serviceCard";
export default function Services() {
  return (
    <div id="services" className=" bg-normalbg py-6 sm:py-14">
      <div className=" sm:max-w-5xl mx-auto max-w-screen-xl  items-center gap-8 px-4 sm:px-6 lg:px-10  ">
        <p className="font-serif text-3xl sm:text-4xl py-7 text-center sm:text-left  font-bold">
          Popular Services
        </p>
        <div className="flex flex-wrap  items-center">
          <ServiceCard
            text="Online Tutorial"
            icon={<PeopleOutlineOutlinedIcon />}
          />
          <ServiceCard
            text="24/7 Support"
            icon={<AccessTimeOutlinedIcon />}
          />
          <ServiceCard
            text="Live Sessions"
            icon={<LiveTvOutlinedIcon />}
          />
          <ServiceCard
            text="Lab Work"
            icon={<ScienceOutlinedIcon />}
          />
          {/* </div>
                    <div className='flex    flex-wrap justify-items-center'> */}
          <ServiceCard
            text="Project Help"
            icon={<AccountTreeOutlinedIcon />}
          />
          <ServiceCard
            text="Vidio Calling Support"
            icon={<VideoCameraFrontOutlinedIcon />}
          />
          <ServiceCard
            text="Writing Help"
            icon={<DrawOutlinedIcon />}
          />
          <ServiceCard
            text="Homework Help"
            icon={<EditCalendarOutlinedIcon />}
          />
        </div>
      </div>
    </div>
  );
}

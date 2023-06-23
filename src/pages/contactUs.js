"use client"
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const showToastMessage = async() => {
    const data = {
      device_number: "Device 4",
      name,
      email,
      phone,
      subject,
      message,
    };

    if (!name || !email || !phone || !subject || !message) {
      toast.warning("Please fill all required data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const sendData = await axios.post(
      "https://dev6apis.el.r.appspot.com/api/deviceWeb/saveDeviceWebData",
      data
    );

    console.log(sendData.data.success);
    if(sendData.data.success) {
      toast.success("Message Sent Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }
    else{
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <section id="contact" className="">
      <div className="max-w-screen-2xl px-5 pb-10 sm:pb-16 mx-auto">
        <div className="flex flex-col text-center w-full">
          <span className="  text-[19px] text-center uppercase font-Inter font-bold mb-6">
            get in touch
          </span>
          <h1 className="sm:text-[44px] capitalize text-2xl text-[#293452] font-Inter font-bold mb-14">
            Contact Us Now
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={showToastMessage} className="flex flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-[3px] bg-gray-100 bg-opacity-50 border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-[3px] bg-gray-100 bg-opacity-50 border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full rounded-[3px] bg-gray-100 bg-opacity-50 border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <input
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-[3px] bg-gray-100 bg-opacity-50 border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows={4}
                  id="message"
                  name="message"
                  className="w-full rounded-[3px] bg-gray-100 bg-opacity-50 border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                // onClick={showToastMessage}
                className="flex mx-auto bg-btnColor rounded-lg text-normalbg px-8 py-3"
                
              >
                Send Now
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
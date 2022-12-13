import React from 'react'
import fitGroup from "../img/people.JPG"
import {AiFillInstagram} from "react-icons/ai"
import {BsFacebook, BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className="text-center">
        <div className="lg:flex gap-20 mx-auto w-5/6 lg:py-24 pt-8 pb-20 lg:items-center justify-center">
          <div className="flex justify-center lg:w-5/12">
            <img src={fitGroup} alt="fit group" className="h-72 lg:h-80 w-full lg:w-5/6 shadow-lg rounded-3xl" />
          </div>
          <div className="text-left mt-10 lg:mt-0 lg:w-2/6">
            <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- Contact Us -</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl mt-2">
              Get in Touch and Stay Connected
            </h1>
            <p className="mt-5 italic">
              We are looking forward to you Visiting us today, contacting or leaving us a message on our socials
            </p>
          </div>
        </div>

        <div className='bg-white pb-20 pt-3'>
          <div className="lg:flex lg:gap-4 w-5/6 mx-auto">
            <div className="lg:w-4/6">
              <h3 className="font-bold mt-20 text-orange-600 text-lg">LOCATION</h3>
              <p className="">
                12 Water board close, off NYSC road, Byazhin. Kubwa, Abuja
              </p>
      
              <div className="mt-2 flex gap-2 justify-center">
                <p className="flex items-center gap-1">
                  <MdEmail />
                  08095730740
                </p>
                <p className="flex items-center gap-1">
                  <BsFillTelephoneFill />
                  Contact@ericVillagio.com
                </p>
              </div>
              <h3 className="mb-2 font-bold text-lg mt-16 text-orange-600">
                WE ARE SOCIAL
              </h3>
              <div className="w-2/6 m-auto flex gap-2 justify-center">
                <div className="bg-white border-2 border-orange-600 hover:bg-orange-700 hover:text-white w-min p-2 rounded-md">
                  <AiFillInstagram />
                </div>
                <div className="bg-white border-2 border-orange-600 hover:bg-orange-700 hover:text-white w-min p-2 rounded-md">
                  <BsFacebook />
                </div>
              </div>
            </div>
            <div className="mt-6 mb-8 lg:w-4/6 flex flex-col items-center gap-5 py-20">
              <input
                placeholder="Name"
                className="px-3 py-2 border border-orange-600 shadow-md focus:ring-2 rounded-md w-4/6"
              />
              <input
                placeholder="Email"
                className="px-3 py-2 shadow-md border border-orange-600 focus:ring-2 rounded-md w-4/6"
              />
              <textarea
                className="px-4 py-2 shadow-md border border-orange-600 focus:ring-2 rounded-md w-4/6"
                placeholder="Feedback"
                rows={6}
              />
              <motion.button whileTap={{scale:0.7}} className="mt-5 rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-800">Send Message</motion.button>

            </div>
          </div>

          <div className="">
            <div className="w-5/6 mx-auto lg:flex justify-center"><p className='text-red-800 bg-white text-c rounded-lg w-max px-3 py-1 shadow-md'>- FAQs -</p></div>
            <div className="w-5/6 mx-auto lg:flex justify-center">
              <h3 className="text-left text-2xl font-semibold">
                Frequently Asked Question
              </h3>
            </div>
            <div className="w-5/6 mx-auto lg:flex lg:gap-10 rounded-xl bg-orange-100 px-10 py-6 mt-10">
              <div className="my-7 lg:w-[30%]">
                <h4 className="font-bold">
                  Do I get Shorter From Lifting Weight?
                </h4>
                <p>
                  This is a very untrue myth. The truth is that you gain a stronger core, appear bigger thereby
                  simulating the appearance of losing a few inches in height
                </p>
              </div>
              <div className="my-7 lg:w-[30%]">
                <h4 className="font-bold">
                  Do i always need equipment to workout?
                </h4>
                <p>
                  No you dont need equipment. You can gain that dream body by consistently doing smile reps 
                  and routines.
                </p>
              </div>
              <div className="my-7 lg:w-[30%]">
                <h4 className="font-bold">
                  Do Ladies get Big Muscles from Going to the Gym?
                </h4>
                <p>
                  Moderation is the key to everything and also one can always maintain a look with normal reps. 
                  Exercising and body building are not the same and people tend to always confuse one for the other
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
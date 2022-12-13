import React from 'react'
import HomePic from "../img/panter.jpg"
import Stretch from "../img/Stretch.jpg"
import Aerobics from "../img/aerobics.jpg"
import Hikes from "../img/hikes.jpg"
import Squats from "../img/Squats.jpg"
import Brian from "../img/brian.jpg"
import Body from "../img/body.png"
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const plans =()=>{
    navigate("/about")
  }

  const freeTraining =()=>{
    navigate("/free-training")
  }

  return (
    <div className="">

      <section className="lg:flex py-8 lg:py-20 items-center justify-center w-5/6 mx-auto">
        <img src={HomePic} alt='trainer' className='lg:w-3/6 rounded-xl shadow-lg'/>

        <div className="lg:w-2/6 lg:mx-auto mt-8 lg:mt-0">
          <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- Body Goals -</p>
          <p className='font-bold text-5xl mt-2'>Your dream body is never closer than now</p>
          <p className='mt-5 italic text-gray-700'>“I will beat you. I will train harder. I will eat 
          cleaner. I know your strengths. I’ve lost to her before 
          but not this time. You are going down. I have the advantage 
          because I know you well. You are the old me“</p>
          <motion.button whileTap={{scale:0.7}} onClick={freeTraining} className="mt-5 rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-800">Get Inspired</motion.button>
        </div>
      </section>

      <section className='rounded-xl py-16 w-5/6 mx-auto'>
      <div className='flex flex-wrap gap-20 w-5/6 mx-auto justify-center'>
        <motion.div whileHover={{scale:1.2}} className='text-center'>
          <p className='text-2xl font-bold text-orange-600'>50+</p>
          <p className='text-slate-600 text-sm'>Active Members</p>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} className='text-center'>
          <p className='text-2xl font-bold text-orange-700'>12</p>
          <p className='text-slate-600 text-sm'>Online Members</p>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} className='text-center'>
          <p className='text-2xl font-bold text-orange-700'>5</p>
          <p className='text-slate-600 text-sm'>Active Trainers</p>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} className='text-center'>
          <p className='text-2xl font-bold text-orange-800'>300+</p>
          <p className='text-slate-600 text-sm'>Total Members</p>
        </motion.div>
      </div>
      </section>
      
      <section className='py-20 lg:flex gap-28 items-center w-5/6 mx-auto'>
        <div className='lg:w-4/12'>
          <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- Features -</p>
          <p className="font-bold text-3xl mt-2">Quality sessions that gets you maximum results</p>
          <motion.button whileTap={{scale:0.7}} onClick={plans} className="mt-5 rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-800">See Our Plans</motion.button>
        </div>

        <div className="lg:flex lg:3/6 mt-8 lg:mt-0 gap-5">
          <div className='flex gap-2 lg:gap-5 items-center'>
            <div className='relative w-5/12 lg:w-full hover:origin-top hover:rotate-12 duration-500'>
              <img src={Stretch} alt='People stretching' className='text-right rounded-xl shadow-md lg:h-40'/>
              <p className='absolute bottom-3 left-4 text-white font-semibold'>Yoga</p>
            </div>
            <div className='relative lg:mt-16 lg:ml-0 w-7/12 lg:w-full hover:origin-top hover:-rotate-12 duration-500'>
              <img src={Squats} alt='People stretching' className='text-right rounded-xl shadow-md lg:h-40'/>
              <p className='absolute bottom-3 left-4 text-white font-semibold'>Weights</p>
            </div>
          </div>

          <div className='flex gap-2 lg:gap-5 mt-4 items-center'>
            <div className='relative w-7/12 lg:w-full hover:origin-top hover:rotate-12 duration-500'>
              <img src={Aerobics} alt='People stretching' className='text-right rounded-xl shadow-md lg:h-40'/>
              <p className='absolute bottom-3 left-4 text-white font-semibold'>Aerobics</p>
            </div>
            <div className='relative lg:mt-10 lg:ml-0 w-5/12 lg:w-full hover:origin-top hover:-rotate-12 duration-500'>
              <img src={Hikes} alt='People stretching' className='text-right rounded-xl shadow-md lg:h-40'/>
              <p className='absolute bottom-3 left-4 text-white font-semibold'>Hikes</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-20'>
        <div className='lg:flex w-5/6 mx-auto'>
          <div className="lg:w-5/6 mx-auto">
            <p className='font-bold text-3xl mt-2'>Benefits of Our <span className='text-orange-600'>Hot</span> Programs</p>
            <p className='mt-5 italic text-gray-700'>We are always at arms length to ensure you live a healthy and amazing life. Our programs are 
            categorized to fit every body type and level of workout. We pride in that fact that we are a big 
            part of shocking transformation stories and general well being of our customers. We dont sell you 
            fitness, we offer you an experience
            </p>
            
            <div className='mx-auto w-full'>
              <div className='lg:flex lg:mx-0 gap-8 text-center lg:text-left mt-9'>
                <div className='lg:w-40 mb-8 lg:mb-0 px-2 py-3'>
                  <p className='text-red-800 font-bold'>Stronger Core</p>
                  <p className="text-gray-800">Studies have shown that the stronger your core</p>
                </div>
                <div className='lg:w-40 mb-8 lg:mb-0 px-2 py-3'>
                  <p className='text-red-800 font-bold'>Good-looking Frame</p>
                  <p className='text-gray-800'>Studies have shown that the stronger your core</p>
                </div>
                <div className='lg:w-40 mb-8 lg:mb-0 px-2 py-3'>
                  <p className='text-red-800 font-bold'>Healthier Body</p>
                  <p>Studies have shown that the stronger your core</p>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-14 lg:mt-0 flex justify-center'>
            <img alt='' src={Body} />
          </div>
        </div>
      </section>

      <section className='pt-10 pb-32 bg-white'>
        <div className='w-5/6 mx-auto mb-10 lg:flex flex-col lg:items-center'>
          <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- Testimonies -</p>
          <p className = "font-bold text-3xl mt-2">Words on the Streets About Our Program</p>
        </div>

        <Swiper
            className="bg-orange-50 w-5/6 shadow-md rounded-2xl"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 7000 }}
            pagination={{ clickable: true }}
          >
          <SwiperSlide className=" flex flex-col items-center py-20 px-14">
              <p className="italic text-lg mb-8">
                “2 years ago, I couldn't see my genitals while standing but right now, I am 
                as fit as a military uniform”
              </p>
              <img alt="Client review 1" src={Brian} className='rounded-full mb-3 shadow-md h-14 w-14'/>
              <p className='font-bold text-orange-600'>Brian Azukaeme</p>
          </SwiperSlide>
          <SwiperSlide className=" flex flex-col items-center py-20 px-14">
              <p className="italic text-lg mb-8">
                “Never felt so light yet very strong all my life like this period”
              </p>
              <img alt="Client review 1" src={Brian} className='rounded-full mb-3 shadow-md h-14 w-14'/>
              <p className='font-bold text-orange-600'>Brian Azukaeme</p>
          </SwiperSlide>
          <SwiperSlide className=" flex flex-col items-center py-20 px-14">
              <p className="italic text-lg mb-8">
                “2 years ago, I couldnt see my genitals why standing but right now, I am 
                as fit as military uniform”
              </p>
              <img alt="Client review 1" src={Brian} className='rounded-full mb-3 shadow-md h-14 w-14'/>
              <p className='font-bold text-orange-600'>Brian Azukaeme</p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}

export default Home
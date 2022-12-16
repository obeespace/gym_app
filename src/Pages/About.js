import React from 'react'
import villagio from "../img/villago1.jpg"
import villagio2 from "../img/villagio2.jpg"
import trainer1 from "../img/jon.jpg"
import trainer2 from "../img/wisdom.jpg"
import {motion} from "framer-motion"
import trainer3 from "../img/panther.jpg"
import pater from "../img/pater.png"
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const contact = () => {
    navigate("/contact")
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <section className='w-5/6 mx-auto lg:flex py-8 gap-20 lg:py-20 items-center justify-center'>
          <div className='lg:w-max'>
            <div className='lg:mx-auto'>
                <img src={villagio2} alt="Villagio1" className = "rounded-xl shadow-lg h-56"/>
                <img src={villagio} alt="Villagio2" className = "rounded-xl shadow-lg h-56 lg:-mt-28 -mt-32 ml-16 lg:ml-36"/>
            </div>
          </div>

          <div className='lg:w-2/6 mt-8 lg:mt-0'>
              <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- About Us -</p> 
              <p className='font-bold text-5xl mt-2'>Let Us Properly Introduce Ourselves</p>
              <p className='mt-5 italic text-gray-700'>We specialize in giving our customers a transformed 
              and healthy body which in turn, boost confidence and give general satisfaction</p>
          </div>
      </section>

      <section className='w-5/6 mx-auto py-8 lg:py-20'>
        <div className="flex flex-col lg:justify-center lg:items-center">
          <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- Features -</p>
          <p className='font-bold text-3xl mt-2'>Meet Our Trainers</p>
        </div>

        <div className='lg:flex w-5/6 mx-auto justify-between items-center mt-8'>
          <div className="flex flex-col items-center mx-auto w-4/6">
            <img alt='' src={trainer1} className="h-52 w-48 rounded-xl" />
            <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 -m-3 shadow-md'>Jon</p>
          </div>
          <div className="flex flex-col items-center mx-auto w-4/6 mt-10 lg:mt-0">
            <img alt='' src={trainer2} className="h-52 w-48 rounded-xl" />
            <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 -m-3 shadow-md'>Wisdom</p>
          </div>
          <div className="flex flex-col items-center mx-auto w-4/6 mt-10 lg:mt-0">
            <img alt='' src={trainer3} className="h-52 w-48 rounded-xl" />
            <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 -m-3 shadow-md'>Peter</p>
          </div>
        </div>
      </section>

      <section className='bg-white py-8'>
        <div className='w-5/6 mx-auto'><p className='text-5xl font-bold'>activities gallery ready soon...</p></div>
      </section>

      <section id="plans" className="bg-white py-8">
        <div className='w-5/6 mx-auto'>
          <div className="flex flex-col lg:justify-center lg:items-center mb-16">
            <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- Our Plans -</p>
            <p className='font-bold text-3xl mt-2'>Take on a Challenge That Suits You</p>
          </div>
          
          <div className='lg:flex justify-center gap-10'>
            <div className='border border-orange-600 px-12 py-6 text-center rounded-3xl'>
              <p className="text-sm">Daily Plan</p>
              <p className='text-orange-900 font-black mt-3 text-lg'>N1000</p>
              <div className='mt-7'>
                <p>Access to all equipments</p>
                <p>Aerobics</p>
                <p>General Instructor</p>
              </div>
            </div>

            <div className='bg-orange-700 text-white px-12 py-6 mt-6 lg:mt-0 text-center rounded-3xl'>
              <p className="text-sm">Monthly Plan</p>
              <p className='font-black mt-3 text-lg'>N5000</p>
              <div className='mt-7'>
                <p>Access to all equipments</p>
                <p>Aerobics and Yoga</p>
                <p>Personal Instructor</p>
                <p>Dance Classes</p>
                <p>Free Supplements</p>
                <p>Meal Plans</p>
              </div>
            </div>

            <div className='border border-orange-600 px-12 py-6 mt-6 lg:mt-0 text-center rounded-3xl'>
              <p className="text-sm">3 Months Plan</p>
              <p className='text-orange-900 font-black mt-3 text-lg'>N12000</p>
              <div className='mt-7'>
                <p>Access to all equipments</p>
                <p>Aerobics and Yoga</p>
                <p>General Instructor</p>
                <p>Dance Classes</p>
                <p>Free Supplements</p>
                <p>Meal Plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-20'>
        <div className='mx-auto w-5/6 lg:flex gap-40'>
          <div className="flex flex-col mb-16 lg:w-4/6">
            <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- Bold Step -</p>
            <p className='font-bold text-3xl mt-2'>Start This Amazing Journey Today, Not Tomorrow</p>
            <p className="italic my-4">The mind is the most important part of achieving any fitness goal. 
            Mental change always comes before physical change</p>
            <motion.button whileTap={{scale:0.7}} onClick={contact} className="mt-5 rounded-lg w-max bg-orange-600 px-4 py-2 text-white hover:bg-orange-800">Contact Us</motion.button>
          </div>

          <div className="flex justify-center"><img alt='people sitting on a mat' src={pater} className="h-60"/></div>
        </div>
      </section>
    </div>
  )
}

export default About
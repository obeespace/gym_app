import React from 'react'
import {TiSocialFacebook} from "react-icons/ti"
import {RiInstagramFill} from "react-icons/ri"
import {SiTiktok} from "react-icons/si"
import {motion} from "framer-motion"
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-5/6 mx-auto py-10 lg:flex lg:items-center lg:justify-between">
        <p className='font-bold text-2xl'>Eric<span className='text-orange-600'>Villago</span></p>
        <div className='lg:flex lg:gap-7 mt-7 lg:mt-0'>
          <Link to="/"><motion.p whileTap={{scale:0.7}} className='hover:text-black text-lg cursor-pointer'>Home</motion.p></Link>
          <Link to="about"><motion.p whileTap={{scale:0.7}} className='hover:text-black cursor-pointer text-lg'>About</motion.p></Link>
          <Link to="/contact"><motion.p whileTap={{scale:0.7}} className='hover:text-black text-lg cursor-pointer'>Contact</motion.p></Link>
        </div>
        <div className="flex mt-7 lg:mt-0 gap-4">
            <TiSocialFacebook />
            <RiInstagramFill />
            <SiTiktok />
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
const Header = () => {

  const [toggle, setToggle] = React.useState(false)

  const toggleMenu = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div>
      <div className='mx-auto w-5/6 lg:flex hidden justify-between items-center py-5'>
          <div className='font-bold text-2xl'>Eric<span className='text-orange-600'>Villago</span></div>

          <motion.div
          className='flex gap-8 font-semibold text-slate-500'>
              <Link to="/"><motion.p whileTap={{scale:0.7}} className='hover:text-black text-lg cursor-pointer'>Home</motion.p></Link>
              <Link to="about"><motion.p whileTap={{scale:0.7}} className='hover:text-black cursor-pointer text-lg'>About</motion.p></Link>
              <Link to="/contact"><motion.p whileTap={{scale:0.7}} className='hover:text-black text-lg cursor-pointer'>Contact</motion.p></Link>
          </motion.div>

          <Link to = "/free-training"><div>
              <p className="font-bold italic">Free Training</p>
          </div></Link>
      </div>

      {/* Mobile View */}
      <div className='lg:hidden mx-auto w-5/6 flex justify-between items-center py-5'>
        <div className='font-bold text-2xl'>Eric<span className='text-orange-600'>Villago</span></div>

        <div className='relative'>
          <motion.div  whileTap={{scale:0.7}}><GiHamburgerMenu onClick={toggleMenu} className='text-xl cursor-pointer' /></motion.div>
          {toggle && <div className='w-32 h-max bg-white absolute top-8 right-0 py-2 rounded-xl shadow-sm'>
            <Link to="/"><motion.p whileTap={{scale:0.7}} onClick={toggleMenu} className='cursor-pointer rounded-xl hover:text-white hover:bg-orange-700 py-2 w-5/6 mx-auto text-center px-2'>Home</motion.p></Link>
            <Link to="about"><motion.p whileTap={{scale:0.7}} onClick={toggleMenu} className='cursor-pointer hover:text-white hover:bg-orange-700 py-2 w-5/6 mx-auto text-center px-2 rounded-xl'>About</motion.p></Link>
            <Link to="/contact"><motion.p whileTap={{scale:0.7}} onClick={toggleMenu} className='cursor-pointer py-2 w-5/6 mx-auto text-center px-2 hover:text-white hover:bg-orange-700 rounded-xl'>Contact</motion.p></Link>
            <Link to="/free-training"><motion.p whileTap={{scale:0.7}} onClick={toggleMenu} className='cursor-pointer py-2 w-5/6 mx-auto text-center px-2 hover:text-white hover:bg-orange-700 rounded-xl'>Free Training</motion.p></Link>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'

const Workout = (props) => {
  return (
    <div className='rounded-lg px-5 py-4 shadow-md w-[300px]'>
      <img alt='workout' src={props.illustration} className="h-32 rounded-md"/>
      <p className='mt-5 text-orange-700 font-bold'>{props.category}</p>
      <p className="">{props.name}</p>
      <p className="text-sm text-right mt-2 italic">{props.reps}</p>
    </div>
  )
}

export default Workout
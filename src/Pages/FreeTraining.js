import React from 'react'
import Workout from '../Components/Workout'
import hollow from "../img/hollow.gif"

const FreeTraining = () => {
  const exercise = [
        {
            "id":1,
            "category":"chest",
            "name":"Regular push-ups",
            "illustration": "https://www.mitrecsports.com/assets/Push-Ups-Gif.gif",
            "reps": "3 sets of 15 reps"
        },

        {
            "id":2,
            "category":"chest",
            "name":"Incline push-ups",
            "illustration":"https://i0.wp.com/thumbs.gfycat.com/IdenticalAggressiveChihuahua-size_restricted.gif?w=1155&h=840",
            "reps": "3 sets of 20 reps"
        },

        {
            "id":3,
            "category":"chest",
            "name":"Decline push-ups",
            "illustration":"https://www.verywellfit.com/thmb/P2oe9IY1ISHqVgH4dSAlybK-Kzc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/91-3120037--Decline-PushupsGIF-eb1210abbdb04bbf94a05aafb644b24f.gif",
            "reps": "3 sets of 15 reps"
        },

        {
            "id":4,
            "category":"chest",
            "name":"Plyometric push-ups",
            "illustration":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDIDBWxD4Rx4JHKdOQebPoHNGkmfv37pB68QpV4wf5A&s",
            "reps": "3 sets of 10 reps"
        },

        {
            "id":5,
            "category":"chest",
            "name":"Spiderman Press-up",
            "illustration":"https://www.verywellfit.com/thmb/LNiBT3vENbwsKFecfIklievrD_c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/99-4588006-Spiderman-PushupsGIF-de453d0c1f9b40fe9b2c240e3ca6e79d.gif",
            "reps": "3 sets of 10 reps"
        },

        {
            "id":6,
            "category":"arm",
            "name":"Wide Press-up",
            "illustration":"https://hips.hearstapps.com/hmg-prod/images/workouts/2017/10/widegrippushup-1508248881.gif",
            "reps": "3 sets of 15 reps"
        },

        {
            "id":7,
            "category":"arm",
            "name":"triceps dips",
            "illustration":"https://thumbs.gfycat.com/SparseLightheartedEagle-max-1mb.gif",
            "reps": "3 sets of 20 reps"
        },

        {
            "id":8,
            "category":"arm",
            "name":"diamond pushups",
            "illustration":"https://thumbs.gfycat.com/AffectionateImmenseIrishdraughthorse-size_restricted.gif",
            "reps": "3 reps of 15 reps"
        },

        {
            "id":9,
            "category":"arm",
            "name":"Alternating Shuffle Press-up",
            "illustration":"https://thumbs.gfycat.com/ScaredCostlyKingsnake-size_restricted.gif",
            "reps": "3 reps of 10 reps on each side"
        },

        {
            "id":10,
            "category":"arm",
            "name":"Kickboxing punches",
            "illustration":"https://thumbs.gfycat.com/NaiveWelltodoDalmatian-max-1mb.gif",
            "reps": "3 reps of 20 punches with each arm"
        },

        {
            "id":11,
            "category":"shoulder",
            "name":"Plank shoulder taps",
            "illustration":""
        },

        {
            "id":12,
            "category":"shoulder",
            "name":"Crab walk",
            "illustration":"",
            "reps":"2–3 sets of 15–20 steps"
        },

        {
            "id":13,
            "category":"shoulder",
            "name":"Push-back push-up",
            "illustration":"",
            "reps":"3 sets of 12–15 reps"
        },

        {
            "id":14,
            "category":"shoulder",
            "name":"Plank to Down Dog",
            "illustration":"",
            "reps":"5 sets of 20 reps"
        },

        {
            "id":15,
            "category":"shoulder",
            "name":"Side plank with lateral raise ",
            "illustration":"",
            "reps":"3 sets of 10 reps"
        },

        {
            "id":16,
            "category":"back",
            "name":"cobra pose",
            "illustration":"",
            "reps":"3 sets of 2mins each"
        },

        {
            "id":17,
            "category":"back",
            "name":"Superman",
            "illustration":"",
            "reps":"3 reps with a 15-30 second static hold"
        },

        {
            "id":18,
            "category":"back",
            "name":"Dolphin Kick",
            "illustration":"",
            "reps":"3 sets of 5 reps"
        },

        {
            "id":19,
            "category":"back",
            "name":"Reverse Snow Angels",
            "illustration":"",
            "reps":"Repeat for 3 sets of 5 reps,"
        },

        {
            "id":20,
            "category":"back",
            "name":"Dolphin Kick",
            "illustration":"",
            "reps":"3 sets of 5 reps"
        },

        {
            "id":21,
            "category":"abs",
            "name":"Crunch",
            "illustration":"",
            "reps":"3 sets of 10 – 20 reps"
        },

        {
            "id":22,
            "category":"abs",
            "name":"Plank",
            "illustration":"",
            "reps":" 3 sets of 30 seconds"
        },

        {
            "id":23,
            "category":"abs",
            "name":"Mountain climbers",
            "illustration":"",
            "reps":"20 on each leg, for 4 sets each."
        },

        {
            "id":24,
            "category":"abs",
            "name":"Bicycle crunch",
            "illustration":"",
            "reps":"3 sets of 30 reps"
        },

        {
            "id":25,
            "category":"abs",
            "name":"Hollow Holds",
            "illustration": "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/lyinghollowbodyhold-1457044774.gif",
            "reps":"20 seconds of 3 sets. "
        },

        {
            "id":26,
            "category":"legs",
            "name":"jump squats",
            "illustration":"",
            "reps":"3 sets of 10 reps"
        },

        {
            "id":27,
            "category":"legs",
            "name":"Hip bridges",
            "illustration":"",
            "reps":"3 sets of 12 reps"
        },

        {
            "id":28,
            "category":"legs",
            "name":"jumping lunges",
            "illustration":"",
            "reps":"3 sets of 10 reps"
        },

        {
            "id":29,
            "category":"legs",
            "name":"jumping lunges",
            "illustration":"",
            "reps":"3 sets of 10 reps"
        },

        {
            "id":30,
            "category":"legs",
            "name":"step-ups",
            "illustration":"",
            "reps":"3 sets of 15 reps"
        },

        {
            "id":31,
            "category":"rest",
            "name":"rest",
            "illustration":"",
            "reps":"Enough to rejuvenate your body"
        },

        {
            "id":32,
            "category":"walk",
            "name":"Take a long walk",
            "illustration":"",
            "reps":"This helps your mood and you also enjoy nature"
        }
  ]

  const currentDate = new Date()
  const dayOfWeek = currentDate.getDay()

  let selectedDisplay1
  let selectedDisplay2
  if (dayOfWeek === 1 || dayOfWeek === 4){
    selectedDisplay1 = exercise?.filter((n) => n.category === "chest")
    selectedDisplay2 = exercise?.filter((n) => n.category === "arm")
  } else if (dayOfWeek === 2 || dayOfWeek === 5){
    selectedDisplay1 = exercise?.filter((n) => n.category === "shoulder")
    selectedDisplay2 = exercise?.filter((n) => n.category === "back")
  } else if (dayOfWeek === 3 || dayOfWeek === 6){
    selectedDisplay1 = exercise?.filter((n) => n.category === "abs")
    selectedDisplay2 = exercise?.filter((n) => n.category === "legs")
  } else {
    selectedDisplay1 = exercise?.filter((n) => n.category === "rest")
    selectedDisplay2 = exercise?.filter((n) => n.category === "walk")
  }
  

  const test = exercise?.filter((n) => n.category === "chest")

  const hold = selectedDisplay1.sort(() => Math.random() - Math.random()).slice(0, 3)
  const hold2 = selectedDisplay2.sort(() => Math.random() - Math.random()).slice(0, 3)


  const workoutData1 = test.map(n => {
    return <Workout key={n.id} name = {n.name}/>
  })

  console.log(workoutData1)

  return (
    <div className="mx-auto w-5/6 lg:flex gap-16 lg:my-20 my-6 items-start">
      <div className='lg:w-2/6 mt-8 lg:mt-0'>
        <p className='text-red-800 bg-white rounded-lg w-max px-3 py-1 shadow-md'>- Lets Workout -</p> 
        <p className='font-bold text-5xl mt-2'>Exercises of the Day</p>
        <p className='mt-5 italic text-gray-700'>Join us in doing these free routines for 1 hour everyday and watch how you body 
          transforms into a healthy machine</p>
      </div>
      
      <div className='mt-14 lg:mt-0'>
        <div className="lg:flex md:flex flex-wrap text-black gap-10">
            {hold && hold.map(n => {
                return <Workout key={n.id} {...n}/>
            })}
        </div>
        <div className="lg:flex md:flex flex-wrap text-black gap-10 mt-10">
            {hold2 && hold2.map(n => {
                return <Workout key={n.id} {...n}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default FreeTraining
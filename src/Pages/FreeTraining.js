import React from 'react'
import Workout from '../Components/Workout'

// import exercise from json file
import exerciseData from '../Pages/exercise.json'




const FreeTraining = () => {

    const exercise = exerciseData;
    const currentDate = new Date()
    const dayOfWeek = currentDate.getDay()
    let selectedDisplay1
    let selectedDisplay2

    let hold = []
    let hold2 = []

    if (dayOfWeek === 1 || dayOfWeek === 4) {
        selectedDisplay1 = exercise?.filter((n) => n.category === "chest")
        selectedDisplay2 = exercise?.filter((n) => n.category === "arm")
    } else if (dayOfWeek === 2 || dayOfWeek === 5) {
        selectedDisplay1 = exercise?.filter((n) => n.category === "shoulder")
        selectedDisplay2 = exercise?.filter((n) => n.category === "back")

    } else if (dayOfWeek === 3 || dayOfWeek === 6) {
        selectedDisplay1 = exercise?.filter((n) => n.category === "abs")
        selectedDisplay2 = exercise?.filter((n) => n.category === "legs")
    } else {
        selectedDisplay1 = exercise?.filter((n) => n.category === "rest")
        selectedDisplay2 = exercise?.filter((n) => n.category === "walk")
    }
    function updateLocalStorage() {

        const localStore1 = selectedDisplay1.sort(() => Math.random() - Math.random()).slice(0, 3)
        const localStore2 = selectedDisplay2.sort(() => Math.random() - Math.random()).slice(0, 3)

        //  check local storage for current day of the week
        if (localStorage.getItem('dayOfWeek') !== null) {
            // get day of the week and parse the string 
            const dayOfWeekLocal = JSON.parse(localStorage.getItem('dayOfWeek'))
            // if the real day of the week is a different value from  the value in local storage
            if (dayOfWeekLocal !== dayOfWeek) {

                // set the data in local storage
                localStorage.setItem('selectedDisplay1', JSON.stringify(localStore1));
                localStorage.setItem('selectedDisplay2', JSON.stringify(localStore2));
                localStorage.setItem('dayOfWeek', JSON.stringify(dayOfWeek));
                // get items from local storage
                hold = JSON.parse(localStorage.getItem('selectedDisplay1'))
                hold2 = JSON.parse(localStorage.getItem('selectedDisplay2'))
            } else {
                hold = JSON.parse(localStorage.getItem('selectedDisplay1'))
                hold2 = JSON.parse(localStorage.getItem('selectedDisplay2'))
            }


        } else {
            // if they of the week has not been set in local storage
            localStorage.setItem('selectedDisplay1', JSON.stringify(localStore1));
            localStorage.setItem('selectedDisplay2', JSON.stringify(localStore2));
            localStorage.setItem('dayOfWeek', JSON.stringify(dayOfWeek));
            hold = JSON.parse(localStorage.getItem('selectedDisplay1'))
            hold2 = JSON.parse(localStorage.getItem('selectedDisplay2'))
        }
    }

    updateLocalStorage()
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
                    {hold.length > 0 && hold.map(n => {
                        return <Workout key={n.id} {...n} />
                    })}
                </div>
                <div className="lg:flex md:flex flex-wrap text-black gap-10 mt-10">
                    {hold2 && hold2.map(n => {
                        return <Workout key={n.id} {...n} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default FreeTraining
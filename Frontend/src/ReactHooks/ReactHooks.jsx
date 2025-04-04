import React from 'react'
import { useState, useEffect } from 'react'
import Ok from '../Ok'
export const ReactHooks = () => {

  const [text, setText] = useState([])
  const [submit, setSubmit] = useState([])

  const seTheText = () => {
    setSubmit(text)
  }

  const [Car, setCar] = useState({
    name: "Ferrari",
    year: "2020",
    color: "Green"
  })

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "Red" }         //...prev keeps the other states as unchanged
    })
  }
  const changeYear = () => {
    setCar((prev) => {
      return { ...prev, year: "2025" }
    })
  }

  const [Count, setCount] = useState(0)

  const changeCount = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)

    //or setCount(count+4)
  }

  return (
    <>
      <Ok />
      <div className='bg-blue-100 min-h-screen p-10 flex flex-col items-center'>
        <h1>useState different cases</h1>
        {/* Case 1 Section */}
        <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Case 1: Take value from input and set it</h2>
          <div className='flex items-center space-x-4'>
            <input
              type="text"
              placeholder="Search..."
              className="text-black flex-1 bg-purple-300 p-2 rounded-md"
              value={text}
              onChange={(e) => {setText(e.target.value)
                 console.log(text)}}
              
            />
            <button
              className='bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300'
              onClick={seTheText}
            >
              Submit
            </button>
          </div>
          <p className='bg-yellow-200 mt-4 p-3 rounded-md text-center'>{submit}</p>
        </div>

        {/* Car Info Box */}
        <div className={`flex flex-col items-center w-full p-4 mt-6 rounded-lg shadow-md 
    ${Car.color === 'Red' ? 'bg-red-500' : ''} 
    ${Car.color === 'Blue' ? 'bg-blue-500' : ''} 
    ${Car.color === 'Green' ? 'bg-green-500' : ''} 
  `} >
          <h2>Case 2: The data is in form of object</h2>
          <h3 className='text-lg font-semibold'>The car is {Car.name}</h3>
          <h4>The year is {Car.year} and the color is {Car.color}</h4>
        </div>

        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={changeColor}
        >
          Change Color
        </button>

        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={changeYear}
        >
          Change Year
        </button>

        {/* Counter Section */}
        <div className='flex flex-col items-center bg-blue-300 w-full  p-4 mt-6 rounded-lg shadow-md'>
          <h3>Math operations</h3>
          <h3 className='text-lg font-semibold'>Count: {Count}</h3>
        </div>

        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={changeCount}
        >
          Increase Count by 4
        </button>

      </div>
    </>
    /* Now if the data is object and we wanna change only few thingss in it we can use ..prev*/
  )
}

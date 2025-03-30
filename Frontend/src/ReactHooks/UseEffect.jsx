import React, { useState } from 'react'
import { useEffect } from 'react'
import Ok from '../Ok'
export const UseEffect = () => {
    const [count1,setcount1] = useState(0)
    const [count2,setcount2] = useState(0)
    const [count3,setcount3] = useState(0)
    const limit =5

    useEffect(()=>{
      const timer = setTimeout(()=>{
            setcount1(count=>count+1)
        },1500)
        return () => clearTimeout(timer)
    })

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setcount2(count=>count+1)
        },1500)
        return () => clearTimeout(timer)
    },[])

    useEffect(()=>{
        if (count3 < limit) {  // Stops updating after 5 times
            const timer = setTimeout(() => {
                setcount3(count => count + 1)
            }, 1500)
            return () => clearTimeout(timer)
        }
    }, [count3])
  return (
    
    <>
    <Ok/>
    <div className='bg-blue-100 min-h-screen p-10 flex flex-col items-center '>
        <h1>useEffect cases</h1>
        <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
            <h2>Case 1: No dependencies</h2>
            <h3>The count is: {count1}</h3>
        </div>

        <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
            <h2>Case 2: Empty array dependency</h2>
            <h3>The count is: {count2}</h3>
        </div>

        <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
            <h2>Case 3: Dependencies</h2>
            <h3>The count is: {count3}</h3>
        </div>
    </div>
    </>

  )
}

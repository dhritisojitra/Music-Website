
import React, { useEffect, useRef, useState } from 'react'
import Ok from '../Ok'

export const Useref = () => {


    const [value, setValue] = useState(0)

    const[count,setCount] = useState(0)

    const c = useRef(0)

    useEffect(()=>{
        c.current = c.current+1
    })  //useref itself doesnt not re-render therefore it wont cause useeffect to run again and again, the only time useeffect will run is when the setValue is called, which is in user's hand

   /* useEffect(()=>{
        setCount(prev=>prev+1)   //here since setCount itself is a state and it is changing, useeffect will go under infinite loop and keep re-rendering
     });*/
    return (
        <>
        <Ok/>
            <div className='bg-blue-100 min-h-screen p-10 flex flex-col items-center'>
                <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
                    <h1>useRef Hook</h1>
                    <h3>useRef is a React Hook which allow us to create mutable variable,which will not re-render the component</h3>
                    <h3>useRef is also used for accessing DOM elements</h3>
                </div>

                <div className= ' flex items-center flex-col w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
                    <button onClick={() => { setValue(prev => prev - 1) }} className="bg-blue-500 text-white font-semibold py-2 px-4 my-2 rounded-lg hover:bg-blue-700 transition duration-300">-1</button>
                    <h1>{value}</h1>
                    <button onClick={() => { setValue(prev => prev + 1) }} className="bg-blue-500 text-white font-semibold py-2 px-4 my-2 rounded-lg hover:bg-blue-700 transition duration-300">+1</button>
                    <h2>Count is: {count} (if setState is used, code is commented out)</h2>
                    <h2>Count is : {c.current} (with useRef)</h2>

                </div>
            </div>
        </>

    )
}

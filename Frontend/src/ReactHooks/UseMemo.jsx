import React, { useEffect, useMemo, useState } from 'react'
import Ok from '../Ok';


export const UseMemo = () => {

const [number,setNumber] = useState(0)
const [counter, setCounter] = useState(0)
    
    function cube(num){
        console.log("Calculation done");
        
        return Math.pow(num,3)
    }

    //const result = cube(number)

    //problem with this is, whenever any state change happens due to different useStates  it re-renders the whole componenet hence the cube fn is again run 
    //so everytime the counter is changed, compoenent renders again and this function is called again
    //to prevent this we will use useMemo to cache(store) the value of fn, so that it will only change when the specific state related to it change


    const result = useMemo(()=>cube(number),[number])  //[number] is the dependency, this fn will be now only called whenever number state changes

    //NOTE: useRef could also have been used in this case, but for math and calculations useMemo is better way
  return (
    <>
         <Ok/>
            <div className='bg-blue-100 min-h-screen p-10 flex flex-col items-center'>
                <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
                    <h1>useMemo Hook</h1>
                    <h3>This Hook returns a memoized value (it is like caching a value so it does not need to be re-calculated) </h3>
                    <h3>useMemo only runs when one of it's dependencies get updated. This can improve efficiency</h3>
                    <h3>CHECK THE CODE OF THIS PAGE FOR COMPLETE INFO</h3>
                </div>

                <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
                <div className='flex items-center space-x-4'>
                        <input
                            type="number"
                            placeholder="Search..."
                            className="text-black flex-1 bg-purple-300 p-2 rounded-md"
                            value={number}
                            onChange={(e)=>{setNumber(e.target.value)}}
                        />
                        <h2>The cube is: {result}</h2>
                        <button
                            className='bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300'
                            onClick={()=>{setCounter(counter=>counter+1)}}
                        >
                            Counter is : {counter}
                        </button>
                    </div>
                </div>
            </div>
    </>
  )
}

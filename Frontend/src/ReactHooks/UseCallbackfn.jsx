import React, { useCallback, useState } from 'react'
import  HeaderUseCallback from './HeaderUseCallback';

export const UseCallbackfn = () => {

    const [count,setCount] = useState(0);

    //everytime setCount is changed the whole compoenent will re-render therefore the headercallback compoenent will also render again and again
    //to prevent that we use a callbackfn and pass it as props to header compo
    const newFn = useCallback(()=>{},[])
    //[] mean empty dependency, no state change will cause it to re-render
   // const newFn = useCallback((count)=>{}, [count])
    //header will re-render whenever this particular state changes
  return (
    <>
       <div className='bg-blue-100 min-h-screen p-10 flex flex-col items-center'>
        <HeaderUseCallback newFN={newFn}/>
       <div className='flex flex-col items-center bg-blue-300 w-full  p-4 mt-6 rounded-lg shadow-md'>
          <h3>useCallBack example</h3>
          <h3 className='text-lg font-semibold'>Count: {count}</h3>
        </div>

        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={()=>{setCount(prev=>prev+1)}}
        >
          Click here
        </button>
        </div> 
    </>
  )
}

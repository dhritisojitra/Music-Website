import React from 'react'

export const UseContext = () => {
  return (
   <> 
         <div className='bg-blue-100 min-h-screen p-10 flex flex-col items-center'>
             
               <div className='flex flex-col items-center bg-white w-full  p-4 mt-6 rounded-lg shadow-md'>
                  <h2>useContext</h2>
                  <h3>It is a react hook that allows you access data from any component without explicitly passing it down as props at every level</h3>
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

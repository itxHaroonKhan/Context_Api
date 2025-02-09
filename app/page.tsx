'use client'
import { CounContext } from '@/context'
import { useContext } from 'react'
import React from 'react'

const page = () => {
  const obj = useContext(CounContext)
  console.log(obj);

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg w-80 mx-auto border border-gray-300">
  <h1 className="font-bold text-3xl text-gray-800 mb-5">Context API</h1>

  <p className="text-2xl font-semibold text-blue-600 bg-blue-100 px-6 py-2 rounded-lg shadow-sm">

    {obj.Count}

    
  </p>

  <div className="flex justify-center gap-5 mt-5">
    <button

      onClick={() => obj.setCount(obj.Count + 1)}


      className="px-5 py-2 bg-green-500 text-white text-lg rounded-xl shadow-md hover:bg-green-600 transition-all duration-200 active:scale-95"
    >
       Increment
    </button>

    <button

  onClick={() => {
    if (obj.Count > 0) {
      obj.setCount(obj.Count - 1);
    }
  }}



  className="px-5 py-2 bg-red-500 text-white text-lg rounded-xl shadow-md hover:bg-red-600 transition-all duration-200 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"




  disabled={obj.Count === 0}
>
   Decrement
</button>

  </div>
</div>

  )
}

export default page


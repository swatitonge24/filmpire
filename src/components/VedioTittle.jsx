import React from 'react'

const VedioTittle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video py-[20%]  px-6 md:px-12 absolute text-white'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-sm w-1/4'>{overview}</p>
        <div className='my-4 md:my-0'>
            <button className='bg-white text-black py-1 px-1 md:p-2  md:px-10 text-xl mx-2 rounded-lg hover:bg-opacity-80'>
              ⏯️Play</button>
            <button className='hidden md:inline-block bg-gray-500 text-white p-2 px-10 text-xl  mx-2 bg-opacity-50 rounded-lg'>More Info</button>
        </div>

        </div>
  )
}

export default VedioTittle;
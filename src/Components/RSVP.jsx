import { useState } from 'react'


function RSVP() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#545454] py-20 px-5 flex flex-col gap-10 mt-10 justify-center items-center'>
        <span className='text-white! font-[SparklingValentine]! lg:text-6xl text-4xl'>
            RSVP
        </span>
        <span className='text-white/50 text-md uppercase'>
            Please let us know if you'll be able to join us
        </span>
        <div className='border-t-4  h-1 w-2/12 border-white'></div>
        <div className='flex justify-center items-center gap-5 mt-10'>
           
        </div>
    </div>
    </>
  )
}

export default RSVP

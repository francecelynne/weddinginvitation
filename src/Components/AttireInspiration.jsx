import { useState } from 'react'


function AttireInspiration() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col gap-10 md:px-10 md:pb-10 pb-5 px-5">
            <span className='text-black! font-[SparklingValentine]! md:text-6xl text-4xl'>
                Attire Inspiration
            </span>
            <span className='text-black/50 lg:text-md text-xs uppercase'>
                to maintain the tone of the event, we kindly request the pleasure of your company in
            </span>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
                    <span className='min-w-18 min-h-18 bg-[#000000] rounded-full flex items-center justify-center border border-black/40' />
                    <span className='min-w-18 min-h-18 bg-[#545454] rounded-full flex items-center justify-center border border-black/40' />
                    <span className='min-w-18 min-h-18 bg-[#b3916a] rounded-full flex items-center justify-center border border-black/40' />
                    <span className='min-w-18 min-h-18 bg-[#fefcf4] rounded-full flex items-center justify-center border border-black/40' />
            </div>
      </div>
    </>
  )
}

export default AttireInspiration

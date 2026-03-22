import { useState } from 'react'


function Gifts() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col gap-5  justify-center items-center py-20 relative overflow-hidden'>
        <span className='text-black! font-[SparklingValentine]! lg:text-6xl text-4xl z-10'>
            Gifts
        </span>
        <div className='flex flex-col gap-1 lg:mr-100 lg:w-5/12 w-10/12 z-10'>
            <br/>
            <span className='text-black/50 text-sm uppercase'>
                Your presence truly means the word to us, and that’s already the best gift we could ever ask for.
            </span>
            <br/>
            <span className='text-black/50 text-sm uppercase'>
                But if you’d like to share a little something, monetary gifts are sincerely appreciated.
            </span>
        </div>
        <img src="../src/assets/img/flower1.jpg" alt="" width="600px" className='absolute -right-40 -rotate-60 opacity-[0.2] lg:opacity-[1]'/>
    </div>
    </>
  )
}

export default Gifts

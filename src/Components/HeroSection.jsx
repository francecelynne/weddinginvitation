import { useState } from 'react'

// import bgMusic from '../src/assets/audio/goodness-of-god-piano-instrumenta.org.mp3';
import bgMusic from '../public/audio/goodness-of-god-piano.mp3';
function HeroSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div className="h-screen bg-[url('../src/assets/img/kiss.jpg')] bg-no-repeat bg-center 
                        bg-cover grayscale flex justify-center items-start">
            <div className='flex flex-col items-center gap-5 w-screen bg-linear-to-b from-black pt-20! h-screen'>
                <span className='text-white'>A WEDDING OF</span>
                <span className='text-white! font-[SparklingValentine]! md:text-[160px] text-[50px]
                                 z-10 text-shadow-sm text-stroke-gray-900 leading-none'>
                  France & Celynne
                </span>
                <span className='text-white w-fit px-5 py-1 rounded-2xl'>WEDNESYDAY, APRIL 22, 2026</span>
            </div>
            <div>
              <audio autoPlay loop >
                {/* <source src={"../src/public/audio/goodness-of-god-piano-instrumenta.org.mp3"} type="audio/mpeg" /> */}
                <source src={bgMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection

import { useState } from 'react'


function RSVP() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#545454] py-20 px-5 flex flex-col gap-5 mt-10 justify-center items-center'>
        <span className='text-white! font-[SparklingValentine]! lg:text-6xl text-4xl'>
            RSVP
        </span>
        <span className='text-white/50 text-md uppercase'>
            kindly rsvp by filling up the form below
        </span>
        <span className='text-white/50 text-md uppercase'>
            we can’t wait to celebrate this special day with you, and would be so grateful to receive your response on or before april 01, 2026
        </span>
        <div className='border-t-4  h-1 w-2/12 border-white'/>
        <div className='flex justify-center items-center gap-5 mt-5'>
           <div className="lg:w-[50dvw] w-screen h-screen p-10">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdVV5uqST57o4-kJF-7OQuDCxJd_EixG3AZbx3uqfxEz2Jp0g/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    </div>
    </>
  )
}

export default RSVP

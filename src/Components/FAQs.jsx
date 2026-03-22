import { useState } from 'react'


function FAQs() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col gap-5  justify-center items-center mb-20 relative overflow-hidden'>
        <span className='text-black! font-[SparklingValentine]! lg:text-6xl text-4xl z-10'>
            Frequently Asked Questions
        </span>
        <br/>
        <div className='flex flex-col gap-1 lg:w-5/12 w-10/12 lg:ml-100  border p-5 rounded z-10'>
            <span className='text-black/80 text-sm uppercase font-semibold'>
                what if i can’t make it?
            </span>
            <br/>
            <span className='text-black/50 text-sm '>
                No worries at all - just send us a quick message if we don’t hear from you by April 1, we’ll happily count you in
            </span>
        </div>
        <div className='flex flex-col gap-1 lg:w-5/12 w-10/12 lg:ml-100  border p-5 rounded z-10'>
            <span className='text-black/80 text-sm uppercase font-semibold'>
                IS THERE PARKING AVAILABLE?
            </span>
            <br/>
            <span className='text-black/50 text-sm '>
                Absolutely! There’s parking on-site for your convenience.
            </span>
        </div>
        <div className='flex flex-col gap-1 lg:w-5/12 w-10/12 lg:ml-100  border p-5 rounded z-10'>
            <span className='text-black/80 text-sm uppercase font-semibold'>
                can i take photos or videos during the ceremony?
            </span>
            <br/>
            <span className='text-black/50 text-sm '>
                Yes! You’re welcome to capture special moments during the ceremony and reception—we’d love for you to share the memories with us.  
            </span>
        </div>
        <div className='flex flex-col gap-1 lg:w-5/12 w-10/12 lg:ml-100  border p-5 rounded z-10'>
            <span className='text-black/80 text-sm uppercase font-semibold'>
                can i bring someone or my children with me?
            </span>
            <br/>
            <span className='text-black/50 text-sm '>
                As much as we’d love to celebrate with everyone, we’re keeping our wedding intimate. The invitation is reserved for the named guest(s) only.
                <br/><br/>
                We adore your children, but we’ve chosen to make this an adults-only celebration so everyone can fully enjoy the evening.
            </span>
        </div>
        <div className='flex flex-col gap-1 lg:w-5/12 w-10/12 lg:ml-100  border p-5 rounded z-10'>
            <span className='text-black/80 text-sm uppercase font-semibold'>
                Can i sit anywhere?
            </span>
            <br/>
            <span className='text-black/50 text-sm '>
                Don’t worry - seats will be prepared for everyone.
            </span>
        </div>
        <div className='flex flex-col gap-1 lg:w-5/12 w-10/12 lg:ml-100  border p-5 rounded z-10'>
            <span className='text-black/80 text-sm uppercase font-semibold'>
                When can i leave?
            </span>
            <br/>
            <span className='text-black/50 text-sm '>
                We’d love for you to stay and celebrate with us until the end of the program(around 7:00 PM)
            </span>
        </div>
        
        <img src="../src/public/img/flower2.jpg" alt="" width="1200px" className='absolute md:-left-70 -left-30 opacity-[0.2] lg:opacity-[1]'/>
    </div>
    </>
  )
}

export default FAQs

import { useState } from 'react'


function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#545454] py-20 px-5 flex flex-col gap-5 justify-center items-center'>
        <span className='text-white! font-[SparklingValentine]! lg:text-6xl text-4xl'>
            With Love, France & Celynne
        </span>
        <div className='border-t-4  h-1 w-2/12 border-white' />
        <div className='flex justify-center items-center gap-5 mt-5 md:w-6/12 w-12/12 lg:flex-row flex-col-reverse'>
            <div className=" w-4/12">
                <img src="/img/qr.jpg" alt="" width="200px" className=''/>
            </div>
            <div className="flex flex-col w-8/12">
                <span className='text-white! font-[SparklingValentine]! lg:text-4xl text-2xl'>
                    Share Your Photos & Videos!
                </span>
                <span className='text-white/50 text-md'>
                    We’ve created a special QR code for our Google Drive. Scan it to upload and share your favorite moments from the wedding—we’d love to see all your memories!
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer

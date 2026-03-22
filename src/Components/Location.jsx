import { useState } from 'react'
// import TheHeritageVideo from '../src/assets/video/TheHeritage179.mp4'

function Location() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="my-10 p-5 flex flex-col gap-10 md:p-10">
            <span className='text-black! font-[SparklingValentine]! md:text-6xl text-4xl'>
                Event Location
            </span>
            <span className='text-black/50 text-md uppercase'>
                <strong>Heritage 179</strong><br/>Balubaran St, San Rafael, Bulacan
            </span>
            <div className='flex gap-5 items-center flex-col md:flex-row'>
                <div className="md:w-6/12 w-12/12 h-70  md:h-125">
                    <img src="../src/assets/img/TheHeritage.jfif" height='' width='cover' className='h-full w-cover'/>
                    {/* <video
                        className="w-full h-full object-cover"
                        src="../src/assets/video/TheHeritage179.mp4"
                        autoPlay
                        muted
                        loop
                    /> */}
                </div>
                <div className="md:w-6/12 w-12/12 h-70  md:h-125">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1362.5512371425843!2d120.93652406668438!3d14.999538350889262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33970133802d99d7%3A0x1b98921360ba5fbf!2sHeritage%20179!5e0!3m2!1sen!2sph!4v1774167660018!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        />
                </div>
            </div>
      </div>
    </>
  )
}

export default Location

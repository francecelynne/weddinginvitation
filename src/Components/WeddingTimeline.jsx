import { useState } from 'react'


function WeddingTimeline() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#545454] py-20 px-5'>
        <span className='text-white! font-[SparklingValentine]! lg:text-6xl text-4xl'>
                    Wedding Timeline
        </span>
        <div className='flex justify-center items-center gap-5 mt-10'>
            <div>
                <div className='border lg:w-62.5 w-38 p-5 rounded-lg flex flex-col text-right gap-1 h-27.5 justify-center relative border-white'>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        3:30 PM
                    </span>
                    <span className='text-white font-semibold lg:text-md text-xs uppercase'>
                        Guest Arrival
                    </span>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        Guests arrive and are seated
                    </span>
                    <span className='min-w-18 min-h-18 bg-white rounded-full absolute -right-15 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="#000" d="M6.72 16.64a1 1 0 1 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 7.5c-1.54 0-2.502 1.667-1.732 3c.357.619 1.017 1 1.732 1c1.54 0 2.502-1.667 1.732-3A2 2 0 0 0 12 7.5" class="duoicon-primary-layer" />
                            <path fill="#000" d="M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.4 16.4 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a21 21 0 0 1-1.952-1.282A16.4 16.4 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2" class="duoicon-secondary-layer" opacity="0.3" />
                        </svg>
                    </span>
                </div>
                <div className='border w-full p-5 rounded-lg flex flex-col text-right gap-1 h-27.5 justify-center mt-30.5 relative border-white'>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        5:00 PM
                    </span>
                    <span className='text-white font-semibold lg:text-md text-xs uppercase'>
                        Picture Taking
                    </span>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        Capturing the moments
                    </span>
                    <span className='min-w-18 min-h-18 bg-white rounded-full absolute -right-15 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="#000" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" opacity="0.5" />
                            <path fill="#000" d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819z" />
                            <path fill="#000" fill-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091s1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09s-1.865-4.092-4.166-4.092m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454" clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>
                <div className='border w-full p-5 rounded-lg flex flex-col text-right gap-1 h-27.5 justify-center mt-30.5 relative border-white'>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        6:30 PM
                    </span>
                    <span className='text-white font-semibold lg:text-md text-xs uppercase'>
                        Sparkle Lights
                    </span>
                    <span className='text-white/50 lg:text-md text-xs uppercase '>
                        Captures the every <br/>sparkle of love
                    </span>
                    <span className='min-w-18 min-h-18 bg-white rounded-full absolute -right-15 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                            <path fill="#000" d="M197.58 129.06L146 110l-19-51.62a15.92 15.92 0 0 0-29.88 0L78 110l-51.62 19a15.92 15.92 0 0 0 0 29.88L78 178l19 51.62a15.92 15.92 0 0 0 29.88 0L146 178l51.62-19a15.92 15.92 0 0 0 0-29.88ZM137 164.22a8 8 0 0 0-4.74 4.74L112 223.85L91.78 169a8 8 0 0 0-4.78-4.78L32.15 144L87 123.78a8 8 0 0 0 4.78-4.78L112 64.15L132.22 119a8 8 0 0 0 4.74 4.74L191.85 144ZM144 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8m104 48a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className='border h-150 border-white'></div>
            <div className=''>
                <div className='border lg:w-62.5 w-38 p-5 rounded-lg flex flex-col text-right gap-1 h-27.5 justify-center relative border-white'>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        4:00 PM
                    </span>
                    <span className='text-white font-semibold lg:text-md text-xs uppercase'>
                        Ceremony
                    </span>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        Wedding ceremony begins
                    </span>
                    <span className='min-w-18 min-h-18 bg-white rounded-full absolute -left-15 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="#000" d="M10.5 2h3v6H19v3h-5.5v11h-3V11H5V8h5.5z" />
                        </svg>
                    </span>
                </div>
                <div className='border w-full p-5 rounded-lg flex flex-col text-right gap-1 h-27.5 justify-center mt-30.5 relative border-white'>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        5:30 PM
                    </span>
                    <span className='text-white font-semibold lg:text-md text-xs uppercase'>
                        Dinner
                    </span>
                    <span className='text-white/50 lg:text-md text-xs uppercase'>
                        Dinner and celebration
                    </span>
                    <span className='min-w-18 min-h-18 bg-white rounded-full absolute -left-15 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="#000" d="m5.44 7.96l.52-.53c.58-.58 1.54-.58 2.14.04l.02.03c.49.5 1.14.74 1.85.81c.97.09 1.91.61 2.53 1.55c.68 1.08.67 2.52-.04 3.59a3.322 3.322 0 0 1-5.18.55c-.56-.55-.88-1.26-.96-2c-.08-.73-.37-1.42-.88-1.93c-.58-.57-.58-1.53 0-2.11M9.64 16c-1.17 0-2.26-.45-3.07-1.28c-.7-.72-1.14-1.62-1.25-2.6c-.03-.3-.12-.69-.36-1.05C4.36 11.9 4 12.9 4 14c0 1.64.8 3.09 2.03 4H19v-1c0-3.6-2.39-6.65-5.66-7.65c.89 1.4.87 3.27-.04 4.65c-.8 1.25-2.18 2-3.66 2m5.14-8.44h1.27c.87 0 1.63.61 1.63 1.7V10h1.25V9c0-1.5-1.33-2.64-2.88-2.64h-1.27c-.83 0-1.54-.82-1.54-1.66s.71-1.46 1.54-1.46V2C13.24 2 12 3.24 12 4.78s1.24 2.78 2.78 2.78M4.5 7.55c.06-.1.14-.2.23-.3l.52-.52c.09-.09.19-.16.29-.23L4.13 5.07c.14-.27.09-.62-.13-.85a.767.767 0 0 0-1.07 0c-.14.14-.21.31-.22.49c-.18.01-.35.08-.49.22c-.29.29-.29.77 0 1.07c.23.22.57.27.85.13zm13.89-3.16c.51-.51.83-1.2.83-1.97h-1.25c0 .83-.7 1.53-1.53 1.53v1.24c1.86 0 3.32 1.52 3.32 3.38V11H21V8.57a4.61 4.61 0 0 0-2.61-4.18M5 21h14c1.11 0 2-.89 2-2H3a2 2 0 0 0 2 2" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WeddingTimeline

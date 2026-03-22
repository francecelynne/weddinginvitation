import { useState } from 'react'


function Entourage() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex items-center justify-center lg:px-20 px-5 mb-20">
            <div className='border py-10 px-3 w-12/12 flex flex-col gap-8'>
                <span className='text-black! font-[SparklingValentine]! lg:text-6xl text-4xl'>
                    The Entourage
                </span>
                <span className='text-black/50 lg:text-md text-xs uppercase'>
                    With the praise and thanksgiving to God and blessing from our beloved parents
                </span>
                <div className='flex gap-5 justify-center items-start'>
                    <div className='flex flex-col'>
                        <span className='text-black font-semibold font-[roboto]! lg:text-md text-xs uppercase text-right'>
                            Parents of the groom
                        </span>
                        <span className='text-black/50 lg:text-md text-xs uppercase text-right'>
                            Oliver L. Samaniego
                        </span>
                        <span className='text-black/50 lg:text-md text-xs uppercase text-right'>
                            Belinda L. Maon
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-black font-semibold font-[roboto]! lg:text-md text-xs uppercase text-left'>
                            Parents of the groom
                        </span>
                        <span className='text-black/50 lg:text-md text-xs uppercase text-left'>
                            Benelyn P. Esguerra
                        </span>
                    </div>
                </div>
                
                <span className='text-black/50 lg:text-md text-xs uppercase'>
                    To stand as witness to our vows
                </span>
                <div>
                    <span className='text-black font-semibold font-[roboto]! lg:text-md text-xs uppercase'>
                        principal sponsors
                    </span>
                    <div className='flex gap-5 justify-center items-start'>
                        
                        <div className='flex flex-col'>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-right'>
                                Ronald Samaniego
                            </span>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-right'>
                                Lito ortega
                            </span>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-right'>
                                Frankie dela cruz
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-left'>
                                Lorinda Samaniego
                            </span>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-left'>
                                Jass Lewis
                            </span>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-left'>
                                Bessie Punzalan
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className='text-black font-semibold font-[roboto]! lg:text-md text-xs uppercase'>
                        Secondary sponsors
                    </span>
                    <div className='flex gap-5 justify-center items-start'>
                        
                        <div className='flex flex-col'>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-right'>
                                Ronald Samaniego
                            </span>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-right'>
                                Lito ortega
                            </span>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-right'>
                                Frankie dela cruz
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-left'>
                                Lorinda Samaniego
                            </span>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-left'>
                                Jass Lewis
                            </span>
                            <span className='text-black/50 lg:text-md text-xs uppercase text-left'>
                                Bessie Punzalan
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Entourage

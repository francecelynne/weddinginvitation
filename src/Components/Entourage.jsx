import { useState } from 'react'


function Entourage() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex items-center justify-center lg:px-20 px-5 mb-20">
            <div className='border py-10 px-3 w-12/12 flex flex-col gap-8 z-10'>
                <span className='text-black! font-[SparklingValentine]! lg:text-6xl text-4xl'>
                    The Entourage
                </span>
                
                <div className='flex flex-col gap-1'>
                    <span className='text-black font-semibold font-[roboto]! text-lg uppercase'>
                        Officiant
                    </span>
                    <div className='flex gap-5 justify-center items-start'>
                        
                        <div className='flex flex-col'>
                            <span className='text-black/50 text-sm uppercase text-right'>
                                Ptr. Jamyl Marc Cruz
                            </span>
                        </div>
                    </div>
                </div>
                
                <span className='text-black/50 text-sm uppercase font-semibold italic'>
                    With the praise and thanksgiving to God and blessing from our beloved parents
                </span>
                <div className='flex gap-3 lg:gap-10 justify-center flex-wrap'>
                    <div className='flex flex-col'>
                        <span className='text-black font-semibold font-[roboto]! text-lg uppercase text-right'>
                            Parents of the groom
                        </span>
                        <span className='text-black/50 text-sm uppercase lg:text-right text-center'>
                            Mr. Oliver L. Samaniego
                        </span>
                        <span className='text-black/50 text-sm uppercase lg:text-right text-center'>
                            Mrs. Belinda L. Maon
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-black font-semibold font-[roboto]! text-lg uppercase text-left'>
                            Parents of the bride
                        </span>
                        <span className='text-black/50 text-sm  uppercase lg:text-right text-center'>
                            Mrs. Benelyn P. Esguerra
                        </span>
                    </div>
                </div>
                
                <div className='flex flex-col gap-1'>
                    <span className='text-black font-semibold font-[roboto]! text-lg uppercase'>
                            Grandparents
                        </span> 
                    <div className='flex gap-5 justify-center items-start'>
                        
                        <div className='flex flex-col'>
                            <span className='text-black/50 text-sm uppercase text-right'>
                                Mr. Tirso Esguerra
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-black/50 text-sm uppercase text-left'>
                                Mrs. Eugenia Esguerra
                            </span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className='flex flex-col mb-4 gap-1'>
                        <span className='text-black font-semibold font-[roboto]! text-lg uppercase'>
                            principal sponsors
                        </span>
                        <span className='text-black/50 text-sm uppercase font-semibold italic'>
                            To stand as principal witnesses in our exchange of vows
                        </span>

                    </div>
                    <div className='flex gap-5 justify-center lg:items-start flex-col lg:flex-row items-center text-center'>
                        <div className='flex flex-col'>
                            <span className='text-black/50 text-sm uppercase lg:text-right text-center'>
                                Mr. Garry Valdecantos
                            </span>
                            <span className='text-black/50 text-sm uppercase lg:text-right text-center'>
                                Mr. Lito Ortega
                            </span>
                            <span className='text-black/50 text-sm uppercase lg:text-right text-center'>
                                Mr. Ronald Samaniego
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-black/50 text-sm uppercase lg:text-left text-center'>
                                Mrs. Bessie Punzalan
                            </span>
                            <span className='text-black/50 text-sm uppercase lg:text-left text-center'>
                                Mrs. Jass Lewis
                            </span>
                            <span className='text-black/50 text-sm uppercase lg:text-left text-center'>
                                Ms. Lorinda Samaniego
                            </span>
                        </div>
                    </div>
                </div>
                 <div className='flex gap-3 lg:gap-10 justify-center flex-wrap'>
                    <div className='flex flex-col mb-3'>
                        <span className='text-black font-semibold font-[roboto]! text-lg uppercase'>
                            Best Man
                        </span>
                        <span className='text-black/50 text-sm uppercase'>
                            Mr. Cyrille Esguerra
                        </span>
                    </div>
                    <div className='flex flex-col mb-3'>
                        <span className='text-black font-semibold font-[roboto]! text-lg uppercase'>
                            Maid of Honor
                        </span>
                        <span className='text-black/50 text-sm uppercase'>
                            Ms. Ariana Perez
                        </span>
                    </div>
                </div>
               
                 
                <div className='flex flex-col gap-1'>
                    <span className='text-black font-semibold font-[roboto]! text-lg uppercase mb-3'>
                        Secondary sponsors
                    </span>
                    <div className='flex gap-5 justify-center items-start'>
                        <div className='flex gap-3 lg:gap-10 justify-center flex-wrap'>
                            <div className='flex flex-col mb-3 gap-1'>
                                <span className='text-black/50 text-sm uppercase font-semibold italic'>
                                    To light up our path
                                </span>
                                <div className='flex flex-col'>
                                    <span className='text-black/50 text-sm uppercase'>
                                        Mr. Gian Cruz
                                    </span>
                                    <span className='text-black/50 text-sm uppercase'>
                                        Ms. Cienelyn Maica Esguerra
                                    </span>
                                </div>
                            </div><div className='flex flex-col mb-3  gap-1'>
                                <span className='text-black/50 text-sm uppercase font-semibold italic'>
                                    To clothe as us one
                                </span>
                                <div className='flex flex-col'>
                                    <span className='text-black/50 text-sm uppercase'>
                                        Mr. Erwin Ortega
                                    </span>
                                    <span className='text-black/50 text-sm uppercase'>
                                        Mrs. Nica Ortega
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col mb-3  gap-1'>
                                <span className='text-black/50 text-sm uppercase font-semibold italic'>
                                    To bind us together
                                </span>
                                <div className='flex flex-col'>
                                    <span className='text-black/50 text-sm uppercase'>
                                        Mr. Milton Samaniego
                                    </span>
                                    <span className='text-black/50 text-sm uppercase'>
                                        Ms. Erica Dela Cruz
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-1'>
                    
                    <span className='text-black/50 text-sm uppercase font-semibold italic  mb-3'>
                        To carry our symbol of Love, Treasure, and Faith
                    </span>
                    <div className='flex gap-5 justify-center items-start'>
                        <div className='flex gap-3 lg:gap-10 justify-center flex-wrap'>
                            <div className='flex flex-col mb-3'>
                                <span className='text-black font-semibold font-[roboto]! text-lg uppercase'>
                                    Ring Bearer
                                </span>
                                <span className='text-black/50 text-sm uppercase'>
                                    Ms. Anya Maon
                                </span>
                            </div>
                            <div className='flex flex-col mb-3'>
                                <span className='text-black font-semibold font-[roboto]! text-lg uppercase'>
                                    Coin Bearer
                                </span>
                                <span className='text-black/50 text-sm uppercase'>
                                    Mr. Christian Dela Cruz
                                </span>
                            </div>
                            <div className='flex flex-col mb-3'>
                                <span className='text-black font-semibold font-[roboto]! text-lg uppercase'>
                                    Bible Bearer
                                </span>
                                <span className='text-black/50 text-sm uppercase'>
                                    Ms. Cathlyn Macey Esguerra
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <img src="img/flower1.jpg" alt="" width="600px" className='absolute -left-30 -rotate-350 opacity-[0.2] '/>
        </div>
    </>
  )
}

export default Entourage

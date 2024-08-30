import React from 'react'
import 'animate.css';

const Banner = () => {
    return (
        <div className='w-full relative banner-responsive flex items-center  smm:h-[50vh] md:h-[60vh] lg:h-[50vh] 2xl:h-[80vh]'>
            <img
                src="/bgAuth.jpg"
                className="absolute w-full h-full left-1/2 top-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
            />
            <div className="mask bg-black/70 smm:h-[50vh] md:h-[60vh] lg:h-[50vh] 2xl:h-[80vh] "></div>

            <div className="container mx-auto z-10 smm:px-20 lg:px-10">
                <div className="grid grid-cols-2">
                    <div className="justify-center flex flex-col smm:col-span-2 smm:items-center smm:gap-5 ">
                        <div className="flex items-center smm:justify-center animate__animated animate__fadeInUp">
                            <img src="/logo.png" alt="" className="w-20 mr-5 smm:w-8" />
                            <div className="smm:h-5 smm:flex smm:items-center">
                                <h2 className=" smm:h-full smm:pb-10 lg:pb-6 lg:text-8xl md:text-5xl  smm:text-5xl mb:text-3xl text-[#FE6B6E] font-bold">
                                    airbnb
                                </h2>
                            </div>
                        </div>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s  text-white lg:text-3xl md:text-xl smm:text-lg smm:flex smm:justify-center ">
                            Belong anywhere
                        </p>
                    </div>
                    <div className="item w-full flex  justify-center animate__animated animate__fadeInUp animate__delay-2s"></div>
                </div>
            </div>
        </div >
    )
}

export default Banner
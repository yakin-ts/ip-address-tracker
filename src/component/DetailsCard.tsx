import React from 'react';

const DetailsCard:React.FC = () => {
    return (
        <div className='w-5/6 p-5 -mt-[140px] -mb-[140px] z-10 flex flex-col md:justify-around md:py-8 items-center lg:grid lg:grid-cols-4 lg:-mt-16 lg:-mb-16 mx-auto rounded-xl bg-white gap-4 shadow-xl font-rubik'>
            <div className='flex flex-col justify-center items-center md:gap-4 lg:border-r-2 lg:border-gray-200 lg:not:last-child'>
                <p className='text-very-dark-grey/50 text-sm font-semibold uppercase'>IP Address</p>
                <p className='text-very-dark-grey text-xl font-bold'>
                    192.43.567
                </p>
            </div>
            <div className='flex flex-col justify-center items-center md:gap-4 lg:border-r-2 lg:border-gray-200 lg:not:last-child'>
                <p className='text-very-dark-grey/50 text-sm font-semibold uppercase'>Location</p>
                <p className='text-very-dark-grey text-xl font-bold'>Brooklyn, NY 1000</p>
            </div>
            <div className='flex flex-col justify-center items-center md:gap-4 lg:border-r-2 lg:border-gray-200 lg:not:last-child'>
                <p className='text-very-dark-grey/50 text-sm font-semibold uppercase'>Timezone</p>
                <p className='text-very-dark-grey text-xl font-bold'>UTC + 3:00</p>
            </div>
            <div className='flex flex-col justify-center items-center md:gap-4'>
                <p className='text-very-dark-grey/50 text-sm font-semibold uppercase'>ISP</p>
                <p className='text-very-dark-grey text-xl font-semibold'>SpaceX Starlink</p>
            </div>
        </div>
    )
}

export default DetailsCard
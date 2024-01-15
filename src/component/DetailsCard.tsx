import React from 'react';
import { DetailsCardProps } from '../types';
import Loader from './Loader';




const DetailsCard: React.FC<DetailsCardProps> = ({ geoData }) => {

    let timeZoneOffsetSign, timeZoneOffsetHours, timeZoneOffsetMinutes;

    if (geoData.time_zone !== '') {
        timeZoneOffsetSign = geoData.time_zone[0]
        timeZoneOffsetHours = geoData.time_zone.slice(1, 3)
        timeZoneOffsetMinutes = geoData.time_zone.slice(3)
    }

    return (
        <div className='absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 p-3 md:p-5 flex flex-col md:justify-around lg:py-8 items-center lg:grid lg:grid-cols-4 rounded-xl bg-white gap-3 lg:gap-4 shadow-xl font-rubik'>
            <div className='flex flex-col justify-center items-center lg:gap-4 lg:border-r-2 lg:border-gray-200 lg:not:last-child'>
                <p className='text-very-dark-grey/50 text-xs md:text-sm font-semibold uppercase'>IP Address</p>
                <p className='text-very-dark-grey text-md md:text-lg lg:text-xl  font-bold text-center'>
                    {geoData.ip || <Loader />}
                </p>
            </div>
            <div className='flex flex-col justify-center items-center md:gap-4 lg:border-r-2 lg:border-gray-200 lg:not:last-child'>
                <p className='text-very-dark-grey/50 text-xs md:text-sm font-semibold uppercase'>Location</p>
                <p className='text-very-dark-grey text-md md:text-lg lg:text-xl  font-bold text-center'>{geoData.location || <Loader />}</p>
            </div>
            <div className='flex flex-col justify-center items-center md:gap-4 lg:border-r-2 lg:border-gray-200 lg:not:last-child'>
                <p className='text-very-dark-grey/50 text-xs md:text-sm font-semibold uppercase'>Timezone</p>
                <p className='text-very-dark-grey text-md md:text-lg lg:text-xl  font-bold text-center'>{geoData.time_zone ? `UTC ${timeZoneOffsetSign} ${Number(timeZoneOffsetHours)}:${timeZoneOffsetMinutes}` : <Loader />}</p>
            </div>
            <div className='flex flex-col justify-center items-center md:gap-4'>
                <p className='text-very-dark-grey/50 text-xs md:text-sm font-semibold uppercase'>ISP</p>
                <p className='text-very-dark-grey text-md md:text-lg lg:text-xl font-semibold text-center'>{geoData.isp || <Loader />}</p>
            </div>
        </div>
    )
}

export default DetailsCard
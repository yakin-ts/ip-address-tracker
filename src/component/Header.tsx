import React from 'react';
import { images } from '../constants/images';

const Header: React.FC = () => {
    return (
        <div className='w-full h-2/5 flex flex-col bg-mobile lg:bg-desktop bg-cover font-rubik'>
            <h1 className='py-5 text-white text-2xl font-semibold text-center lg:py-10'>IP Address Tracker</h1>
            <div className='flex flex-row  h-12 mx-auto w-5/6 md:w-1/3 justify-center items-center  text-white'>
                <input className='w-3/4 h-full bg-white px-3 rounded-tl-xl rounded-bl-xl text-very-dark-grey focus:outline-none text-center' type='text' placeholder='Search for any IP address or domain' />
                <button className='w-1/4 h-full bg-very-dark-grey flex justify-center items-center rounded-tr-xl rounded-br-xl'><img src={images.iconArrow} alt='search button'/></button>
            </div>
        </div>
    )
}

export default Header
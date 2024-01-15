import React from 'react';
import { images } from '../constants/images';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ipAddress, onChange, onSubmit, loading, error}) => {
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // @ts-ignore
        onSubmit(e);
    };

    return (
        <div className='w-full h-full flex flex-col bg-mobile lg:bg-desktop bg-cover font-rubik'>
            <h1 className='py-5 lg:py-8 text-white text-2xl font-semibold text-center'>IP Address Tracker</h1>
            {/* @ts-ignore */}
            <form className='flex flex-row  h-12 mx-auto w-5/6 md:w-2/3  lg:w-1/3 justify-center items-center  text-white' onSubmit={handleSubmit}>
                <input className='w-3/4 h-full bg-white px-3 rounded-tl-xl rounded-bl-xl text-very-dark-grey focus:outline-none text-center lg:w-4/5' type='text' value={ipAddress} placeholder='Search for any IP address' onChange={onChange}/>
                <button className='w-1/4 h-full bg-very-dark-grey flex justify-center items-center rounded-tr-xl rounded-br-xl lg:w-1/5' type='submit'>
                    {
                        loading ? (
                            <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-white'></div>
                        ): (
                            <img src={images.iconArrow} alt='arrow icon' className='w-4'/>
                        )
                    }
                </button>
            </form>
            {error && <p className='relative z-50 w-3/5 mx-auto text-red-500 border-red-500 border rounded-lg px-4 py-2 bg-red-300 text-center mt-2'>{error}</p>}
        </div>
    )
}

export default Header
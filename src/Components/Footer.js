import React from 'react';
import {FaTiktok, FaTwitch, FaYoutube, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='border-t-2 border-slate-600 py-12 mt-auto'>
            <div className='flex justify-between items-center mx-10'>
                <div>
                    <h1 className='text-white text-7xl uppercase'>State Life</h1>
                    <p className='text-white text-2xl'>Copyright 2022 &copy;</p>
                </div>
                <div className='flex justify-center items-center space-x-10'>
                    <a href='/'>
                        <FaTiktok size={32} color='#FFFFFF' />
                    </a>
                    <a href='/'>
                        <FaTwitch size={32} color='#FFFFFF' />
                    </a>
                    <a href='/'>
                        <FaYoutube size={32} color='#FFFFFF' />
                    </a>
                    <a href='/'>
                        <FaTwitter size={32} color='#FFFFFF' />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
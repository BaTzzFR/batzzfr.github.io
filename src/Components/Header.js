import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaDiscord, FaBook, FaPlay} from 'react-icons/fa';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    window.addEventListener('scroll',() => {
        if(window.scrollY > 350) 
        {
            setScroll(true);
        }
        else
        {
            setScroll(false);
        };
    });

    return (
        <header className={`fixed top-0 left-0 right-0 flex justify-between items-center z-10 py-4 px-4 duration-300 ${scroll ? 'bg-slate-900 shadow' : 'bg-transparent'}`}>
            <div>
                <Link 
                    to='/'
                    className='text-white text-4xl font-semibold uppercase'
                >
                    State Life
                </Link>
            </div>
            <div className='flex items-center space-x-6'>
                <a 
                    href='https://discord.gg/qp7BjU2XpU'
                    className='bg-zinc-800 text-white text-3xl flex items-center rounded-lg shadow py-3 px-14 duration-300 hover:brightness-105'
                >
                    <FaDiscord size={32} color='#FFFFFF' />
                </a>
                <Link 
                    to='/guide'
                    className='bg-zinc-800 text-white text-3xl flex items-center rounded-lg shadow py-3 px-14 duration-300 hover:brightness-105'
                >
                    <FaBook size={32} color='#FFFFFF' />
                </Link>
                <a 
                    href='fivem://connect/game.bostonhosting.fr:30120' 
                    className='bg-blue-600 text-white text-3xl flex items-center rounded-lg shadow py-3 px-14 duration-300 hover:brightness-105'
                >
                    <FaPlay size={32} color='#FFFFFF' />
                </a>
            </div>
        </header>
    );
};

export default Header;
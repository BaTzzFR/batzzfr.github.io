import React from 'react';
import {FaMap, FaTshirt, FaCar, FaDiscord, FaPlay} from 'react-icons/fa';

import {Parallax} from 'react-parallax';

import newYork from '../Assets/newYork.jpg';
import StateLifeA from '../Assets/StateLifeA.png';
import StateLifeB from '../Assets/StateLifeB.png';
import StateLifeC from '../Assets/StateLifeC.png';

const Main = () => {
    return (
        <>
            <Parallax bgImage={newYork} strength={500} className='h-screen flex justify-start items-center'>
                <div>
                    <h1 className='text-gray-100 text-9xl px-8'>
                        La meilleure <br />
                        expérience FiveM <br />
                        à <b className='text-cyan-400'>Liberty City.</b>
                    </h1>
                </div>
            </Parallax>
            <section className='flex justify-center items-center space-x-16 border-t-8 border-slate-700 py-14'>
                <div className='py-5 px-5 bg-lime-500 w-96 rounded-md shadow-md duration-150 hover:-translate-y-2'>
                    <div className='flex justify-start items-center'>
                        <FaMap size={64} color='#FFFFFF' className='bg-lime-600 rounded-md py-3 px-3' />
                        <h1 className='mx-3 text-3xl text-white'>Mappings</h1>
                    </div>
                    <p className='text-white my-2'>
                        Des mapping Liberty City inédie pour vos scénarios en jeux.
                    </p>
                </div>
                <div className='py-5 px-5 bg-orange-500 w-96 rounded-md shadow-md duration-150 hover:-translate-y-2'>
                    <div className='flex justify-start items-center'>
                        <FaTshirt size={64} color='#FFFFFF' className='bg-orange-600 rounded-md py-3 px-3' />
                        <h1 className='mx-3 text-3xl text-white'>Vêtements</h1>
                    </div>
                    <p className='text-white my-2'>
                        Vêtements pour une personnalisation plus poussée de votre personnage.
                    </p>
                </div>
                <div className='py-5 px-5 bg-yellow-500 w-96 rounded-md shadow-md duration-150 hover:-translate-y-2'>
                    <div className='flex justify-start items-center'>
                        <FaCar size={64} color='#FFFFFF' className='bg-yellow-600 rounded-md py-3 px-3' />
                        <h1 className='mx-3 text-3xl text-white'>Véhicules</h1>
                    </div>
                    <p className='text-white my-2'>
                        Véhicules NYPD, NYFD, FDNY et Taxi Liberty City inédibles.
                    </p>
                </div>
            </section>
            <section className='flex justify-center items-center py-14 mx-40'>
                <FaDiscord size={512} color='#FFFFFF' className='mx-10' />
                <div>
                    <h1 className='text-8xl text-white my-6'>Rejoins nous !</h1>
                    <p className='text-white text-3xl my-6'>
                        Rejoins nous sur le serveur officiel de State Life. <br />
                        Tu pourras discuter et jouer avec les autres joueurs passionnés de Liberty City.
                    </p>
                    <a 
                        href='https://discord.gg/qp7BjU2XpU'
                        className='bg-blue-500 text-white text-3xl flex justify-center items-center rounded-lg shadow py-3 px-4 my-4 duration-300 hover:brightness-105'
                    >
                        <FaDiscord size={32} color='#FFFFFF' />
                    </a>
                    <a 
                        href='fivem://connect/game.bostonhosting.fr:30120'
                        className='bg-orange-500 text-white text-3xl flex justify-center items-center rounded-lg shadow py-3 px-4 my-4 duration-300 hover:brightness-105'
                    >
                        <FaPlay size={32} color='#FFFFFF' />
                    </a>
                </div>
            </section>
            <section className='flex justify-center items-center space-x-6 py-14'>
                <img src={StateLifeA} alt='StateLife' className='w-96 rounded-md mt-20 duration-150 hover:-translate-y-2' />
                <img src={StateLifeB} alt='StateLife' className='w-96 rounded-md mb-20 duration-150 hover:-translate-y-2' />
                <img src={StateLifeC} alt='StateLife' className='w-96 rounded-md mt-20 duration-150 hover:-translate-y-2' />
            </section>
        </>
    );
};

export default Main;
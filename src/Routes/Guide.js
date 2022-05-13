import React from 'react';
import {Link} from 'react-router-dom';

import {FaArrowRight} from 'react-icons/fa';
import {Parallax} from 'react-parallax';

import newYork from '../Assets/newYork.jpg';

const items = [
    {
        name: 'Lois',
        link: '/guide/lois',
    },
    {
        name: 'Lexiques',
        link: '/guide/lexiques',
    },
    {
        name: 'Appartenance Sets',
        link: '/guide/appartenance-sets',
    },
    {
        name: 'Réseaux Sociaux',
        link: '/guide/reseaux-sociaux',
    },
    {
        name: 'Style Vestimentaire',
        link: '/guide/style-vestimentaire',
    },
];

const Guide = () => {
    return (
        <>
            <Parallax bgImage={newYork} strength={500} className='h-96' />
            <section className='border-t-8 border-slate-700 py-10'>
                <h1 className='text-white text-center text-8xl uppercase font-semibold'>Guide</h1>
                <div className='flex justify-center py-12'>
                    <div className='container'>
                        {
                            items.map((item) => {
                                return (
                                    <Link to={item.link}>
                                        <div className=' bg-slate-900 w-full h-16 shadow rounded-md flex justify-between items-center px-5 my-5'>
                                            <h1 className='text-white text-xl'>{item.name}</h1>
                                            <FaArrowRight size={32} color='#FFFFFF' />
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Guide;
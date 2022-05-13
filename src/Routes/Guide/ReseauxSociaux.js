import React from 'react';
import {Parallax} from 'react-parallax';

import newYork from '../../Assets/newYork.jpg';

const Lois = () => {
    return (
        <>
            <Parallax bgImage={newYork} strength={500} className='h-96' />
            <section className='flex justify-center items-center py-12 border-t-8 border-slate-700'>
                <div className='mx-48'>
                    <h1 className='text-white text-7xl font-bold text-center uppercase'>Réseaux Sociaux</h1>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            Les membres de sets utilisent beaucoup facebook/twitter car ces applications sont les moins tracés par la police. 
                            exemple KingVon  humilié tout le temps les gens qu'il tué sur twitter. (8 bodies l'un des plus gros score de O'block) 
                            A chaque bagarre , meurtre , GetBack , rackette ils mettent tout sur twitter facebook ou insta donc dans vos rp merci de beaucoup jouer sur les réseaux.
                            les Tweets de Von ne sont plus disponibles voici quelques un a l'écrit et traduis
                            ou tu était putain?
                            Tes potes voulais pas me laisser rentrer dans le magasin.
                            Sur BD ces renois dans le magasins était choqués, ils ont demander au gérant du magasin de fermer la porte.
                            Les renois de Rhodes sont des bouffon...elle était ou Kirah la
                            moi et TROY (meilleur ami d'enfance de Von) on tue pour s'amuser
                            j'me rappelle de Modell avec 1 oeil d'STL.
                            C'est archi sale ce qui lui est arrivé. #UNVRAIBOUFFON
                            a NY les diss se font la plupart du temps dans les musiques ou sur Insta / LiveInsta. 
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Lois;
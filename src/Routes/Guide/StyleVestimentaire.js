import React from 'react';
import {Parallax} from 'react-parallax';

import newYork from '../../Assets/newYork.jpg';
import StyleVestimentaires from '../../Assets/StyleVestimentaires.png';

const StyleVestimentaire = () => {
    return (
        <>
            <Parallax bgImage={newYork} strength={500} className='h-96' />
            <section className='flex justify-center items-center py-12 border-t-8 border-slate-700'>
                <div className='mx-48'>
                    <h1 className='text-white text-7xl font-bold text-center uppercase'>LE STYLE VESTIMENTAIRE</h1>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            Avant d'illustrer nos propos, nous allons d'abord vous parler de la température à New York pour que vous puissiez comprendre les raisons de l'importance de vos tenues selon les saisons. <br />
                            • À New York, les étés sont chaud, humide et précipitation, les hivers sont très froid, neige et venteux, et le climat est partiellement nuageux tout au long de l'année. Au cours de l'année, la température varie généralement de -2 °C à 29 °C et est rarement inférieure à -10 °C ou supérieure à 34 °C. <br />
                            • La saison chaude dure 3,5 mois, du 2 juin au 16 septembre, avec une température quotidienne moyenne maximale supérieure à 24 °C. Le mois le plus chaud de l'année à New York est juillet, avec une température moyenne maximale de 29 °C et minimale de 21 °C. <br />
                            • La saison froide dure 3,3 mois, du 3 décembre au 12 mars, avec une température quotidienne moyenne maximale inférieure à 9 °C. Le mois le plus froid de l'année à New York est janvier, avec une température moyenne minimale de -2 °C et maximale de 4 °C.
                        </p>
                    </div>
                    <div className='flex justify-center py-12'>
                        <img src={StyleVestimentaires} alt='peine de mort' className='rounded-md' />
                    </div>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            Maintenant que vous avez à peut près compris le style vestimentaire que votre personnage va devoir adopté en fonction de la saison, nous allons maintenant vous expliquer comment rester cohérent en fonction du style vestimentaire de votre personnage. <br /> 
                            • Tout d'abord la classe sociale de votre personne dépend aussi de son style vestimentaire, c'est à dire que votre personnage va s'habiller en fonction de l'environnement qui l'entoure (ex: un habitant d'Harlem aura un style vestimentaire plutôt populaire, populaire ne veut pas dire "pas cher" votre personnage peut très bien avoir un Doudoune MontClaire et habiter dans un quartier pauvre. Mais si par exemple votre personnage réside dans les quartier riche de Jersey City, il adoptera plutôt un style vestimentaire bourgeois). <br />
                            • Parlons maintenant de l'appartenance à un set/affiliation ou alliance dans le style vestimentaire, contrairement à Los Angeles l'appartenance n'est presque pas mise en avant. À New York, il n'existe pas la revendication à travers les casquettes, c'est à dire que les membres de gang porte la casquette avec l'équipe qu'il souhaite sur la tête, il n'existe aussi presque pas de revendication à travers les bandana, la revendication lors de Clips ou Hood Days dépend aussi de la culture du set (ex : dans les Clips de Dusty Locane [R60] on peut voir de nombreux bandana bleu mais prenons les clips de Dthang [YGz],  lors de ces clips on peut voir aucune revendication vestimentaire que ce soit avec des bandana ou des casquettes).
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StyleVestimentaire;
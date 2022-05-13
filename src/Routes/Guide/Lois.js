import React from 'react';
import {Parallax} from 'react-parallax';

import newYork from '../../Assets/newYork.jpg';
import LoiUs from '../../Assets/LoiUs.png';
import PeineMort from '../../Assets/PeineMort.png';

const Lois = () => {
    return (
        <>
            <Parallax bgImage={newYork} strength={500} className='h-96' />
            <section className='flex justify-center items-center border-t-8 border-slate-700 py-10'>
                <div className='mx-48'>
                <h1 className='text-white text-7xl font-bold text-center uppercase'>LE DROIT PENAL AMERICAIN</h1>
                    <div className='flex justify-center py-12'>
                        <img src={LoiUs} alt='loi us' />
                    </div>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            Le droit pénal américain est devenu de plus en plus répressif, en particulier à partir des années 1970 puis sous Reagan, quand triomphe le slogan : " get tough on crime "(« soyez durs envers le crime ») ainsi que la « guerre contre la drogue », puis, dans les années 1990, l'« hypothèse de la vitre brisée » et la « politique de tolérance zéro » (popularisée à New York par Rudy Giuliani, maire de 1994 à 2001). En 1994, la Californie a adopté la loi des trois prises (Three-strikes law ou plus exactement Three-strikes and you're out c'est-à-dire « Trois coups et vous êtes dehors »), instaurant une peine plancher au 3e délit. Ces lois ont été généralisées dans 25 États. De façon concomitante, la négociation de peine s'est généralisée, augmentant le pouvoir des procureurs qui peuvent négocier la culpabilité, donc la peine. Cette procédure est maintenant utilisée dans 90 % des affaires pénales, rendant la procédure longue du jury, qui devait statuer à l'unanimité, très rare.
                            Le taux d'incarcération, qui était déjà l'un des plus élevés des pays industrialisés dans les années 1970, quadruple en quinze ans: on passe de 240 000 détenus en 1975 à près d'un million en 1995, puis deux millions en 2005. Dans les années 2000, le pays a ainsi le taux d'incarcération le plus élevé du monde et compte plus de prisonniers que la Chine (environ 1,5 million de détenus) ou que la Russie (environ 760 000). En juin 2008, il comptait environ 2,3 millions de détenus, soit environ 0,7 % de la population.
                            En 2004, 25 % des prisonniers du pays l'étaient pour trafic ou consommation de stupéfiant ; la moitié de l'ensemble des détenus étaient des Afro-Américains, et un quart des Latinos.
                            Les droits Miranda, formalisés par la Cour suprême par l'arrêt Miranda v. Arizona (1966), sont probablement les dispositions les plus connues du droit américain, comprenant le droit à garder le silence en cas d'arrestation. La protection accordée par un avocat lors des interrogatoires de police a récemment été amoindrie, par l'arrêt Montejo v. Louisiana (2009) qui a renversé un précédent de 1986.
                            L'ordonnance de non-communication aux États-Unis, est une injonction de faire émise par un tribunal qui oblige une personne à cesser de nuire à une autre personne ou à rester éloigné d'elle. L'ordonnance est parfois appelée ordonnance de protection. Les modalités varient en fonction des États. Les lois qui encadrent l'ordonnance de non-communication définissent la nature de la protection dont peut bénéficier la victime, l'aide qui peut être mise en place et les modalités d'application.
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center py-12'>
                <div className='mx-48'>
                    <h1 className='text-white text-7xl font-bold text-center uppercase'>Peine de mort aux États-Unis</h1>
                    <div className='flex justify-center py-12'>
                        <img src={PeineMort} alt='peine de mort' className='rounded-md' />
                    </div>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            🟩 États ayant aboli la peine de mort pour tous les crimes. <br />
                            🟦 États ayant la peine de mort inscrite dans la constitution, mais dont celle-ci a été suspendue. <br />
                            🟪 Ohio (peine de mort suspendue, mais autorisée dans la constitution). <br />
                            🟨 États n'ayant pas pratiqué la peine de mort pendant au moins 10 ans, mais dont celle-ci est autorisée. <br />
                            🟥 États ayant autorisé la peine de mort et dont l'exécution d'au moins une personne est récente. <br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Lois;
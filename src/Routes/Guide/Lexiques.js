import React from 'react';
import { Parallax } from 'react-parallax';

import newYork from '../../Assets/newYork.jpg';

const Lexiques = () => {
    return (
        <>
            <Parallax bgImage={newYork} strength={500} className='h-96' />
            <section className='flex justify-center items-center py-12 border-t-8 border-slate-700'>
                <div className='mx-48'>
                    <h1 className='text-white text-7xl font-bold text-center uppercase'>Lexique Latino</h1>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            Fila / filero = couteau. <br />
                            Vatos = Gars / frère. <br />
                            Kaka = Drogue. <br />
                            Talco = Cocaïne. <br />
                            Plata = Argent. <br />
                            Puta = Pute. <br />
                            Coche = Voiture. <br />
                            Arma (Arme à feu) = Pistolet. <br />
                            Barrio = Quartier. <br />
                            Nina / Nino = meuf / mec.
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center py-12'>
                <div className='mx-48'>
                    <h1 className='text-white text-7xl font-bold text-center uppercase'>Lexique Afro / Voyou en général</h1>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            BACKDOOR = Piéger un allié / ennemi en passant par une porte pour le tuer. <br />
                            BUSSIN = Être défoncé / aller tirer. <br />
                            DIE Y= Pour clasher un set commençant par la lettre « Y 2 ». <br />
                            FIELD = Le terrain (là où y a toutes les activités illégales). <br />
                            FUFU = Être un faux. <br />
                            GET LITTLE = Abandonner / quitter une personne soudainement. <br />
                            GOOFY ASS = Etre un trou du cul. <br />
                            LACKIN = Ne pas être armé. <br />
                            NO CAP = Pour affirmer que ce que vous dites n'est pas un mensonge. souvent représenté par une casquette et une croix / stop en emoji. <br />
                            NO LACKIN = Être armé. <br />
                            POKE = Racketter / voler quelqu'un. <br />
                            TWEAKIN = Être défoncé sous drogue dur / être en tort/dire de la merde. <br />
                            Beat-in : Initiation pour intégrer un gang (aussi appelé Put-On). <br />
                            Beef : Une embrouille. <br />
                            Diss : Une insulte, un manque de respect. <br />
                            EBK : Everybody Killer, aujourd'hui ce terme désigne une personne ou une clique qui suit ses "propres" alliances, et ses propres beefs. <br />
                            Goons : Tueur à gage, Homme de main. <br />
                            Lackin : On le voit souvent dans des vidéo où un gars se fait "caugh lackin" = il se fait prendre sans arme, c'est ça être lackin, ne pas avoir d'arme. <br />
                            No Lackin : A l'inverse quelqu'un de no lack, no lackin est une personne armée. <br />
                            Opps : Opposant, Ennemi. <br />
                            Pack : Utilisé sur les réseau pour diss/signer un mort. (ex : Stingy Pack dans le cas ou "Stingy" aurait été tué la clique ayant commit le crime pourrais signer de cette manière). <br />
                            Shank : En prison, c'est un couteau artisanal. <br />
                            Skit : Les skits sont des vols ou une fusillade par exemple, contre n’importe, souvent des non gang-member. <br />
                            Strap : Une arme a feu (Est-ce que t'as ton strap ? - Non j'suis lackin..). <br />
                            Jack / Bang: Revendiquer. <br />
                            Pimp : Put It In My Pocket.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Lexiques;
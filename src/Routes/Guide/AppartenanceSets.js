import React from 'react';
import { Parallax } from 'react-parallax';

import newYork from '../../Assets/newYork.jpg';
import AppartenanceSet from '../../Assets/AppartenanceSets.png';

const AppartenanceSets = () => {
    return (
        <>
            <Parallax bgImage={newYork} strength={500} className='h-96' />
            <section className='flex justify-center items-center border-t-8 border-slate-700 py-10'>
                <div className='mx-48'>
                <h1 className='text-white text-7xl font-bold text-center uppercase'>MOUVEMENT</h1>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            💫 Les WOO anciennement « Wave Gang » qui sont considérés comme les faux et les fakes « Woo(o) ». C’est une alliance et un mouvement très présent dans la musique grâce aux nombreux rappeurs portant le nom WOO dans leur pseudo : Quelly Woo, Dafi Woo…. Cependant ce mouvement était en conflit avec les WOOO et ce beef a fait beaucoup de victimes, la guerre et les tensions ont arrêtés et sont redevenus « Cool » entre eux. Ils sont automatiquement GDK et n’ont aucun sets Folk dans leur mouvements. <br />
                            
                            💫 Les WOOO sont considéré comme les Original WOOO et les WOO "Wave Gang" sont considéré comme les New Gen WOO. <br />

                            💫 Les WOOO « We On Our Own » est le mouvement original et celui qui précède le mouvement des WOO (Ne pas confondre les deux mouvements qui sont totalement différents et même en rivalité sur certains aspects) c’est uniquement un mouvement et non une alliance comme les CHOO. Ils sont GDK (Gangsters Disciples Killer) et l’alliance est uniquement composés de groupes Bloods/Crips. <br />

                            💫 Les CHOO est un mouvement et une alliance officiel de plusieurs sets et gangs dans les rues de New-York, on retrouve des sets Bloods/Crips/Folk (Gangsters Disciples). Ils sont automatiquement WooK et ils n'ont aucun set Woo dans leur mouvement.
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center py-12'>
                <div className='mx-48'>
                    <h1 className='text-white text-7xl font-bold text-center uppercase'>ALLIANCE</h1>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            La 4️⃣z c'est formé suite a la mort d'un membre fondateur des OGFC "OriginalGoonsFromCourtlandt" qui a crée le beef YGz contre OGz, c'est une alliance comportant les RPT 800 YGz, 94 Drilly Gzz. Les OGFC suite à la mort du membre fondateur ce sont renommés OGz "OriginalGoonz".
                            Tout les membres de cette alliance sont OGK (OriginalGoonz Killer). <br />

                            La 5️⃣z c'est formé de la même façon mais elle comporte les OGz de Courtlandt les OYG "OriginalYoungGunna" de SugarHill et quelque set de FlyBridges. 
                            Tout les membres de cette alliance sont YGK et une petite minorité sont WooK. <br />

                            700 DOA c'est une alliance qui réside à la 187th rue du Bronx dans un quartier nommé SevSide, cette alliance regroupe des membres affiliés des SexMoneyMurda (SMM), des MakkBallaBrim (il y a aussi beaucoup de membre de la MakkBallaFamily). Une grande partie des membres de cette alliance sont GDK et YGK. DOA signifie DumpingOnAnybody. <br />

                            300 DOA est une alliance qui se situe dans le Bronx et Harlem, cette dernière comporte les Wvttz Grape Street Crips qui sont aussi dans la 700 DOA. Pour l'alliance 300 DOA, ce sont les seuls informations que nous avons trouvé dessus. Ils sont GDK et YGK <br />

                            🌀 Twirl alliance, c'est une alliance qui réside partout dans Brooklyn mais surtout dans Flatbush, les membres sont principalement des affiliés CHOO. Dans cette alliance on peut trouver les sets suivant : Blixky, No Luv City (NLC), 74 Paid And Verified Choo (74PNV). Tout les membres de cette alliance sont WooK. <br />

                            La 7️⃣3️⃣0️⃣ alliance est une alliance qui se situe dans Brooklyn, elle contient FeddyGang [🔱♿], Flatbush 50z [♨️🎩🅱️,〽️🐝], Starret City/SCE [8️⃣2️⃣3️⃣♿️]. Ils sont alliés avec les Choos 🇺🇲 et les Blixky🌀🔱. La  7️⃣3️⃣0️⃣ sont WooK et en réel beef avec les set de Flossy [Canarsie]. <br />
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center py-12'>
                <div className='mx-48'>
                    <h1 className='text-white text-7xl font-bold text-center uppercase'>AFFILIATION</h1>
                    <div>
                        <p className='text-white text-3xl mt-5 leading-relaxed'>
                            Les affiliations à New York sont complètement différentes des autres , un affilié d'un set peux Double Jack , Double Jack signifie avoir deux affiliation a revendique par exemple chez les CourtlandtOverEverythingOGz le Double Jack est constant il revendique leur set qui est OGz et revendique une affiliation comme SexMoneyMurda
                            Pour donner un autre exemple, un membre des 823GSC Double Jack GS9, 092GSC ou 10-100 Cloccs selon sont affiliation.
                            Voici un schéma pour illustrer nos propos :
                        </p>
                    </div>
                    <div className='flex justify-center py-12'>
                        <img src={AppartenanceSet} alt='peine de mort' className='rounded-md' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppartenanceSets;
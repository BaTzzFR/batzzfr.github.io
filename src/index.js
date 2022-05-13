import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css';

import Main from './Routes/Main';
import Guide from './Routes/Guide';

import Header from './Components/Header';
import Footer from './Components/Footer';

import GuideLois from './Routes/Guide/Lois';
import GuideAppartenanceSets from './Routes/Guide/AppartenanceSets';
import GuideLexiques from './Routes/Guide/Lexiques';
import GuideReseauxSociaux from './Routes/Guide/ReseauxSociaux';
import GuideStyleVestimentaire from './Routes/Guide/StyleVestimentaire';

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/guide/lois" element={<GuideLois />} />
            <Route path="/guide/appartenance-sets" element={<GuideAppartenanceSets />} />
            <Route path="/guide/lexiques" element={<GuideLexiques />} />
            <Route path="/guide/reseaux-sociaux" element={<GuideReseauxSociaux />} />
            <Route path="/guide/style-vestimentaire" element={<GuideStyleVestimentaire />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
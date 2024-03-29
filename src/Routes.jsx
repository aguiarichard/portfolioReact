import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AllPages from './pages/Components/AllPages';

import Projetos from './pages/Components/Projetos';
import Sobre from './pages/Components/Sobre'
import Contatos from './pages/Components/Contatos'

export default function RoutesReact() {
    return (
        <Routes>
            <Route path="*" element={<AllPages />} /> 
            <Route path="/" element={<AllPages />} /> 
            <Route path="/sobre" element={<AllPages />} /> 
            <Route path="/projetos" element={<AllPages />} /> 
            <Route path="/contatos" element={<AllPages />} /> 
            <Route path="/carousel" element={<Projetos  buttons="true" />} /> 
        </Routes>
    )
}
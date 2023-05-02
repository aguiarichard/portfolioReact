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
            <Route path="/sobre" element={<Sobre button="true"/>} /> 
            <Route path="/projetos" element={<Projetos />} /> 
            <Route path="/contatos" element={<Contatos />} /> 
        </Routes>
    )
}
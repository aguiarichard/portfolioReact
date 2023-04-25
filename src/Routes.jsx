import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Projetos from './pages/Components/Projetos';
import Sobre from './pages/Components/Sobre'
import Contatos from './pages/Components/Contatos'

export default function RoutesReact() {
    return (
        <Routes>
            <Route path="*" element={<Projetos />} /> 
            <Route path="/" element={<Projetos />} /> 
            <Route path="/" element={<Sobre />} /> 
            <Route path="/" element={<Contatos />} /> 
        </Routes>
    )
}
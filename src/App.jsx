import React from 'react';
import VLibras from './componentes/VLibras';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { LayoutPrincipal } from './layout/LayoutPrincipal/LayoutPrincipal';
import { Inicial } from './pages/Inicial';
import { FormularioCadastrar } from './componentes';
import { Genero } from './pages/Genero';
import { Login } from './pages/Login/Login';
import { EditarPerfil } from './pages/EditarPerfil/EditarPerfil';
import { SobreNos } from './pages/SobreNos/SobreNos';
import {Error404} from './componentes/Error404'; // Importando o componente de erro 404
import { Documentacao } from './pages/Documentacao'; // Importa o novo componente
import  { HomePage } from './pages/HomePage/HomePage'; // Importa a HomePage, se necessário
import './global.css';

function App() {
  return (
    <AppProvider>
      <VLibras />
      
      <Router>
        <LayoutPrincipal>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inicial" element={<Inicial />} />
            <Route path="/cadastrar" element={<FormularioCadastrar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/genero" element={<Genero />} />
            <Route path="/editar-perfil" element={<EditarPerfil />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/documentacao" element={<Documentacao />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </LayoutPrincipal>
      </Router>
    </AppProvider>
  );
}

export { App };
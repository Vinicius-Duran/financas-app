import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import CentroCustos from './pages/cadastros/CentroCustos';
import ContasBancarias from './pages/cadastros/ContasBancarias';
import PlanoContas from './pages/cadastros/PlanoContas';
import Receita from './pages/cadastros/Receita';
import Lancamento from './pages/lancamento/Lancamento';
import Relatorio from './pages/relatorio/Relatorio';
import Usuario from './pages/usuario/Usuario';
import PoliticaPrivacidade from './pages/politica-privacidade/PoliticaPrivacidade';
import TermosServico from './pages/termos-servico/TermosServico';
import Contato from './pages/contato/Contato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cadastros/centro-custos" element={<CentroCustos />} />
          <Route path="cadastros/contas-bancarias" element={<ContasBancarias />} />
          <Route path="cadastros/plano-contas" element={<PlanoContas />} />
          <Route path="cadastros/receita" element={<Receita />} />
          <Route path="lancamento" element={<Lancamento />} />
          <Route path="relatorio" element={<Relatorio />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="termos-servico" element={<TermosServico />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Seus componentes principais
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ExpenseTracker from './components/ExpenseTracker';
import Footer from './components/Footer';

// Sua nova página
import Index2 from './components/index2';

function App() {
  return (
    <Router>
      <Header />

      {/* Menu simples para navegar entre páginas */}
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/index2">Projeto de site com Vite + React "Esta em desenvolvimento"</Link>
      </nav>

      <main>
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <About />
                <Skills />
                <Projects /> 
                <Contact />
                
              </>
            }
          />

          {/* Nova rota para o Index2 */}
          <Route path="/index2" element={<Index2 />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

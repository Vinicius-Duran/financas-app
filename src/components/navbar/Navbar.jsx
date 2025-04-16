import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const cadastrosItems = [
    { name: 'Centro de Custos', path: '/cadastros/centro-custos' },
    { name: 'Contas Bancárias', path: '/cadastros/contas-bancarias' },
    { name: 'Plano de Contas', path: '/cadastros/plano-contas' },
    { name: 'Receita', path: '/cadastros/receita' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-link">
          <span className="navbar-title">Finanças App</span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>

        <div ref={dropdownRef} className="navbar-dropdown-container">
          <button
            className={`navbar-link ${location.pathname.startsWith('/cadastros') ? 'active' : ''}`}
            onClick={handleDropdownToggle}
          >
            Cadastros
            <span className="dropdown-arrow"></span>
          </button>

          {isDropdownOpen && (
            <div className="navbar-menu">
              {cadastrosItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsDropdownOpen(false)}
                  className={`navbar-menu-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/lancamento" className={`navbar-link ${location.pathname === '/lancamento' ? 'active' : ''}`}>
          Lançamento
        </Link>

        <Link to="/relatorio" className={`navbar-link ${location.pathname === '/relatorio' ? 'active' : ''}`}>
          Relatório
        </Link>
      </div>

      <div className="navbar-actions">
        <div className="theme-switch">
          <button className="theme-switch-input" onClick={handleThemeChange}>
            {darkMode ? 'Modo Claro' : 'Modo Escuro'}
          </button>
        </div>
        <Link to="/usuario" className="navbar-icon">
          <span className="icon-text">Usuário</span>
        </Link>
        <button className="navbar-icon">
          <span className="icon-text">Sair</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 
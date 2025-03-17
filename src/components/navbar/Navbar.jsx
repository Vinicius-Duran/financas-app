import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Switch,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  AccountCircle,
  Logout,
  KeyboardArrowDown,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  const cadastrosItems = [
    { name: 'Centro de Custos', path: '/cadastros/centro-custos' },
    { name: 'Contas Bancárias', path: '/cadastros/contas-bancarias' },
    { name: 'Plano de Contas', path: '/cadastros/plano-contas' },
    { name: 'Receita', path: '/cadastros/receita' },
  ];

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        <Link to="/" className="navbar-link">
          <Typography variant="h6" component="div" className="navbar-title">
            Finanças App
          </Typography>
        </Link>

        <Box className="navbar-links">
          <Button
            color="inherit"
            component={Link}
            to="/"
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Button>

          <Button
            color="inherit"
            endIcon={<KeyboardArrowDown />}
            onClick={handleMenu}
            className={`navbar-link ${location.pathname.startsWith('/cadastros') ? 'active' : ''}`}
          >
            Cadastros
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="navbar-menu"
          >
            {cadastrosItems.map((item) => (
              <MenuItem
                key={item.path}
                component={Link}
                to={item.path}
                onClick={handleClose}
                className={`navbar-menu-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>

          <Button
            color="inherit"
            component={Link}
            to="/lancamento"
            className={`navbar-link ${location.pathname === '/lancamento' ? 'active' : ''}`}
          >
            Lançamento
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/relatorio"
            className={`navbar-link ${location.pathname === '/relatorio' ? 'active' : ''}`}
          >
            Relatório
          </Button>
        </Box>

        <Box className="navbar-actions">
          <Box className="theme-switch">
            <IconButton color="inherit" size="small">
              {darkMode ? <DarkMode /> : <LightMode />}
            </IconButton>
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              color="default"
              size="small"
              className="theme-switch-input"
            />
          </Box>
          <IconButton
            color="inherit"
            component={Link}
            to="/usuario"
            className="navbar-icon"
          >
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit" className="navbar-icon">
            <Logout />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
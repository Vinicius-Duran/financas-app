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
    // Aqui você pode adicionar a lógica para mudar o tema global
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  const cadastrosItems = [
    { name: 'Centro de Custos', path: '/cadastros/centro-custos' },
    { name: 'Contas Bancárias', path: '/cadastros/contas-bancarias' },
    { name: 'Plano de Contas', path: '/cadastros/plano-contas' },
    { name: 'Receita', path: '/cadastros/receita' },
  ];

  return (
    <AppBar position="fixed" sx={{ background: 'var(--background-gradient)' }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Finanças App
          </Typography>
        </Link>

        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              borderBottom: location.pathname === '/' ? '2px solid white' : 'none',
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            endIcon={<KeyboardArrowDown />}
            onClick={handleMenu}
            sx={{
              borderBottom: location.pathname.startsWith('/cadastros') ? '2px solid white' : 'none',
            }}
          >
            Cadastros
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {cadastrosItems.map((item) => (
              <MenuItem
                key={item.path}
                component={Link}
                to={item.path}
                onClick={handleClose}
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>

          <Button
            color="inherit"
            component={Link}
            to="/lancamento"
            sx={{
              borderBottom: location.pathname === '/lancamento' ? '2px solid white' : 'none',
            }}
          >
            Lançamento
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/relatorio"
            sx={{
              borderBottom: location.pathname === '/relatorio' ? '2px solid white' : 'none',
            }}
          >
            Relatório
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton color="inherit" size="small">
              {darkMode ? <DarkMode /> : <LightMode />}
            </IconButton>
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              color="default"
              size="small"
              sx={{
                '& .MuiSwitch-thumb': {
                  backgroundColor: 'white',
                },
                '& .MuiSwitch-track': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                },
              }}
            />
          </Box>
          <IconButton
            color="inherit"
            component={Link}
            to="/usuario"
          >
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <Logout />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
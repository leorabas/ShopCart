//C:\Users\Leo\Desktop\Leicho\alkemy\shopcart\shopcart\src\componentes\AppBar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

 function ButtonAppBar({ carrito }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', textAlign: 'center' }}>
            El Bote Libreria
          </Typography>
          <IconButton color="inherit">
            <ShoppingCartIcon />
            <span style={{ marginLeft: '5px' }}>{carrito}</span>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar
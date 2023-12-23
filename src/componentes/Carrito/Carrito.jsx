import React from 'react';
import './Carrito.css';
import ListaDeTarjetas from '../Tarjeta/Tarjeta';

function Carrito() {
  return (
    <div className="CarritoContainer">
      <ListaDeTarjetas/>
    </div>
  );
}

export default Carrito;
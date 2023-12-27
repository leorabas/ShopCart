// C:\Users\Leo\Desktop\Leicho\alkemy\shopcart\shopcart\src\componentes\Carrito\Carrito.jsx
import React from 'react';
import './Carrito.css';
import useCarrito from '../UseCarrito/UseCarrito';

function Carrito() {
  const { carrito } = useCarrito();  // Asegúrate de que estás importando useCarrito correctamente

  return (
    <div className="CarritoContainer">
      {carrito}
    </div>
  );
}

export default Carrito;

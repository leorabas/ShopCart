// C:\Users\Leo\Desktop\Leicho\alkemy\shopcart\shopcart\src\componentes\UseCarrito\UseCarrito.jsx
import { useState } from 'react';

function useCarrito() {
  const [carrito, setCarrito] = useState(0);

  const actualizarCarrito = (cantidad) => {
    setCarrito(carrito + cantidad);
  };

  return { carrito, actualizarCarrito };
}

export default useCarrito;

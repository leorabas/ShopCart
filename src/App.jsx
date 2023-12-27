import React, { useState } from 'react';
import { Carrito, ButtonAppBar, ListaDeTarjetas } from './componentes/main';

function App() {
  const [carrito, setCarrito] = useState(0);

  return (
    <>
      <ButtonAppBar carrito={carrito} />
      <Carrito carrito={carrito} />
      <ListaDeTarjetas setCarrito={setCarrito} />
    </>
  );
}

export default App;

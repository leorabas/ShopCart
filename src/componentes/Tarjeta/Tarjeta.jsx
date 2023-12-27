// C:\Users\Leo\Desktop\Leicho\alkemy\shopcart\shopcart\src\componentes\Tarjeta.jsx
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TbShoppingCart } from 'react-icons/tb';
import useCarrito from '../UseCarrito/UseCarrito';  
import { v4 as uuidv4 } from 'uuid'; 
import React, { useState } from 'react'; 

function ImgMediaCard({ title, editorial, image, price, onClick, clickeado }) {
  const { actualizarCarrito } = useCarrito();

  const handleClick = () => {
    onClick();
    actualizarCarrito(clickeado ? -1 : 1);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: clickeado ? 'lightblue' : 'white' }}>
      <CardMedia component="img" alt={title} height="100" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Editorial: {editorial}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          <TbShoppingCart style={{ fontSize: 30, color: clickeado ? 'green' : 'yellow' }} />
        </Button>
        <Typography variant="h6">{price}</Typography>
      </CardActions>
    </Card>
  );
}
const Tarjetas = [
  {
    title: '2666',
    editorial: 'Alfaguara',
    image: '/imagenes/2666.jpg',
    price: '$29600',
    id: uuidv4(),
  },
  {
    title: 'Amberes',
    editorial: 'Anagrama',
    image: '/imagenes/amberes.jpg',
    price: '$49785',
    id: uuidv4(),
  },
  {
    title: 'Los detectiv...',
    editorial: 'Alfaguara',
    image: '/imagenes/detectives.jpg',
    price: '$28200',
    id: uuidv4(),
  },
  {
    title: 'El gaucho...',
    editorial: 'Alfaguara',
    image: '/imagenes/elgaucho.jpg',
    price: '$8300',
    id: uuidv4(),
  },
  {
    title: 'El espíritu...',
    editorial: 'Alfaguara',
    image: '/imagenes/espiritu.jpg',
    price: '8390',
    id: uuidv4(),
  },
  {
    title: 'Estrella distante',
    editorial: 'Anagrama',
    image: '/imagenes/estrella.jpg',
    price: '8999',
    id: uuidv4(),
  },
  {
    title: 'Poesía reunida',
    editorial: 'Alfaguara',
    image: '/imagenes/poesia.jpg',
    price: '$23.759',
    id: uuidv4(),
  },
];

function ListaDeTarjetas({ setCarrito }) {
  const [clickeado, setClickeado] = useState(Tarjetas.map(() => false));

  const handleClick = (index) => {
    setClickeado((prev) => {
      const newClickeado = [...prev];
      newClickeado[index] = !prev[index];
      return newClickeado;
    });

    setCarrito((prev) => prev + (!clickeado[index] ? 1 : -1));
  };

  return (
    <div>
      <div className="fila">
        {Tarjetas.slice(0, 3).map((tarjeta, index) => (
          <ImgMediaCard
            key={tarjeta.id || uuidv4()}
            title={tarjeta.title}
            editorial={tarjeta.editorial}
            image={tarjeta.image}
            price={tarjeta.price}
            onClick={() => handleClick(index)}
            clickeado={clickeado[index]}
          />
        ))}
      </div>
      <div className="fila">
        {Tarjetas.slice(3, 6).map((tarjeta, index) => (
          <ImgMediaCard
            key={tarjeta.id || uuidv4()}
            title={tarjeta.title}
            editorial={tarjeta.editorial}
            image={tarjeta.image}
            price={tarjeta.price}
            onClick={() => handleClick(index + 3)}
            clickeado={clickeado[index + 3]}
          />
        ))}
      </div>
      <div className="fila">
        {Tarjetas.slice(6).map((tarjeta, index) => (
          <ImgMediaCard
            key={tarjeta.id || uuidv4()}
            title={tarjeta.title}
            editorial={tarjeta.editorial}
            image={tarjeta.image}
            price={tarjeta.price}
            onClick={() => handleClick(index + 6)}
            clickeado={clickeado[index + 6]}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaDeTarjetas;


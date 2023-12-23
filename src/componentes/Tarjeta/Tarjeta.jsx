import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TbShoppingCart } from 'react-icons/tb';
import { v4 as uuidv4 } from 'uuid';

function ImgMediaCard({ title, editorial, image, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small">
          <TbShoppingCart style={{ fontSize: 30, color: 'yellow' }} />
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
    title: 'Los detectives salvajes',
    editorial: 'Alfaguara',
    image: '/imagenes/detectives.jpg',
    price: '$28200',
    id: uuidv4(),
  },
  {
    title: 'El gaucho insufrible',
    editorial: 'Alfaguara',
    image: '/imagenes/elgaucho.jpg',
    price: '$8300',
    id: uuidv4(),
  },
  {
    title: 'El espíritu de la ciencia ficción',
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

function ListaDeTarjetas() {
    return (
      <div>
        <div className="fila">
          {Tarjetas.slice(0, 3).map((tarjeta) => (
            <ImgMediaCard
              key={tarjeta.id || uuidv4()}
              title={tarjeta.title}
              editorial={tarjeta.editorial}
              image={tarjeta.image}
              price={tarjeta.price}
            />
          ))}
        </div>
        <div className="fila">
          {Tarjetas.slice(3, 6).map((tarjeta) => (
            <ImgMediaCard
              key={tarjeta.id || uuidv4()}
              title={tarjeta.title}
              editorial={tarjeta.editorial}
              image={tarjeta.image}
              price={tarjeta.price}
            />
          ))}
        </div>
        <div className="fila">
          {Tarjetas.slice(6).map((tarjeta) => (
            <ImgMediaCard
              key={tarjeta.id || uuidv4()}
              title={tarjeta.title}
              editorial={tarjeta.editorial}
              image={tarjeta.image}
              price={tarjeta.price}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default ListaDeTarjetas;
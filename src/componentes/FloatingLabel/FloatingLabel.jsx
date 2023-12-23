import Form from 'react-bootstrap/Form';
import './FloatingLabel.css'
import Boton from '../Boton/Boton';

function FloatingLabel() {
  return (
    <div className='FatherFloating'>
      <div className='FloatingContainer'>
      <h3> ¡Hola! Te damos la bienvenida a tu "ShopCart" </h3>
        <Form.Floating className="mb-3">
          <label htmlFor="floatingInputCustom">Dirección de email </label>
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="tucasilla@decorreo.com"
          />

        </Form.Floating>
        <Form.Floating>
          <label htmlFor="floatingPasswordCustom">Contraseña </label>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Contraseña"
          />
          <br></br> <Boton />
        </Form.Floating>

      </div>
    </div>
  );
}

export default FloatingLabel;
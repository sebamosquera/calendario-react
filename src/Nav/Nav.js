import React from 'react';
import './nav.css';

const Nav = () => {

  const meses = ['ENERO', 'FEBRERO', 'MARZO',
   'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
   'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

   const listMeses = meses.map((mes, index) =>
    <li key={index}>{mes}</li>
   );

  return (
    <nav className='nav'>
      <ul>
        {listMeses}
      </ul>
    </nav>
  )
}

export default Nav;

import React from 'react';
import './main.css';

const Main = () => {

  const meses = ['ENERO', 'FEBRERO', 'MARZO',
   'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
   'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

   const listMeses = meses.map((mes, index) =>
    <div key={index}>{mes}</div>
   );

   listMeses.map(div => console.log(div.props.children));

  return (
    <main  className="main">
      {listMeses}
    </main>
  )
}

export default Main;

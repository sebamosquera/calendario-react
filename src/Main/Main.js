import React, { useContext } from 'react';
import './main.css';
import { DataContext } from '../Context/DataContext';

const Main = () => {

  const { displayMonth } = useContext(DataContext)

  const listMeses = displayMonth.map((mes, index) =>
    <div key={index}>{mes}</div>
   );

//  listMeses.map(div => console.log(div.props.children));

  return (
    <main  className="main">
      {listMeses}
    </main>
  )
}

export default Main;

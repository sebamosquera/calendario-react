import React, { useContext } from 'react';
import './nav.css';
import { DataContext } from '../Context/DataContext';

const Nav = () => {

  const { meses, setDisplayMonths } = useContext(DataContext);

  const listMeses = meses.map((mes, index) =>
  <li
    onClick={() => {
      setDisplayMonths([mes]);
    }}
    key={index} >{mes}</li>
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

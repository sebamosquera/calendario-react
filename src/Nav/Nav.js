import React, { useContext } from 'react';
import './nav.css';
import { DataContext } from '../Context/DataContext';
import Month from '../Month/Month';

const Nav = () => {

  const { meses, setSelectedMonth } = useContext(DataContext);

  const listMeses = meses.map((mes, index) =>
    <li
      className='nav-li'
      onClick={() => {setSelectedMonth(mes);}}
      key={index}
      value={mes}>
      {mes}
    </li>
    );
  // lista de meses que siempre lleva todos los meses, onclick actualiza el selectedMonths


  return (
  <nav className='app-nav'>
    <ul className='nav-ul'>
      {listMeses}
    </ul>
  </nav>
)
}

export default Nav;

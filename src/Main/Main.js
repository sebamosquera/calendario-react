import React, { useContext } from 'react';
import './main.css';
import { DataContext } from '../Context/DataContext';
import Month from '../Month/Month';

const Main = () => {

  const { meses, selectedMonth, setSelectedMonth } = useContext(DataContext)

  const listMeses = meses.map((mes, index) =>
    <div className='month' key={index}>{mes}</div>
   );

  /*const changeMonth = (action) => {
    console.log(action);
  }*/

//  listMeses.map(div => console.log(div.props.children));

  return (
    <main  className="app-main">
    {/*  <button className='button home-button' onClick={() => setSelectedMonth([...meses])}>Home</button>
    //  <button className='button next-button' value='next' onClick={() => changeMonth('next')}>Next</button>
    //  <div className='months-container'>{listMeses}</div>*/}
      <Month />
    </main>
  )
}

export default Main;

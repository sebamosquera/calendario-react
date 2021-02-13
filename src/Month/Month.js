import './month.css';
import React, { useContext, useState} from 'react';
import { DataContext } from '../Context/DataContext';

const Month = () => {

  const { dayNumbers, dayNames, meses, selectedMonth, setSelectedMonth, changeMonth } = useContext(DataContext);

  const listOfDays = dayNames.map((day, index) =>
    <li
      className='month-li'
      key={index}
      value={day}>
      {day}
    </li>
    );

  const listOfWeeks = dayNumbers.map((dia, index) =>
    <div
      className='month-day'
      key={index}
      value={dia}
      onClick={(e) => console.log(e.target.attributes.value.value, selectedMonth)}>
      {dia}
    </div>
   );

  return (
    <div className='month-container'>
      <nav className='month-nav'>
        <button onClick={() => changeMonth(-1)}>{'<'}</button>
        <h1>{selectedMonth}</h1>
        <button onClick={() => changeMonth(1)}>{'>'}</button>
      </nav>
      <main className='month-main'>
        <ul className='month-ul'>
          {listOfDays}
        </ul>
        <div className='month-days-container'>{listOfWeeks}</div>
      </main>
    </div>
  );
}

export default Month;

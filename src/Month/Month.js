import './month.css';
import React, { useContext, useState} from 'react';
import { DataContext } from '../Context/DataContext';

const Month = () => {

  const { days, meses, selectedMonth, setSelectedMonth, changeMonth } = useContext(DataContext);

  const listOfDays = days.map((day, index) =>
    <li
      className='month-li'
      key={index}
      value={day}>
      {day}
    </li>
    );

  return (
    <div>
      <nav className='month-nav'>
        <button onClick={() => changeMonth(-1)}>Prev</button>
        <button onClick={() => changeMonth(1)}>Next</button>
        <h1>{selectedMonth}</h1>
      </nav>
      <main className='month-na'>
        <ul className='month-ul'>
          {listOfDays}
        </ul>
      </main>
    </div>
  );
}

export default Month;

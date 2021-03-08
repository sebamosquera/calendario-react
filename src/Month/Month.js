import './month.css';
import React, { useContext, useState} from 'react';
import { DataContext } from '../Context/DataContext';
import Day from '../Day/Day';

const Month = () => {

  const { setSelectedDay, setDisplay, dayNumbers, dayNames, meses, selectedMonth, setSelectedMonth, changeMonth, paddingDays, daysInMonth, currentDay} = useContext(DataContext);

  const listOfDayNames = dayNames.map((day, index) =>
    <li
      className='month-li'
      key={index}
      value={day}>
      {day}
    </li>
    );

  const listOfDayNumbers = dayNumbers.map((day, i) => {
    i += 1;
    let dia = i - paddingDays;
    return i > paddingDays ?
      <div
          className='month-day'
          id={dia === currentDay? 'currentDay' : null}
          key={i}
          value={dia}
          onClick={() => {setSelectedDay(dia); setDisplay('dia')}}>
          <Day value={dia} miniatura={true} />
      </div> :
      <div
        className='month-day padding'
        key={i}
        value={dia}
        onClick={() => {setSelectedDay(dia); setDisplay('dia')}}>
        <Day value={dia} miniatura={true} />
      </div>;
  })

  console.log(listOfDayNumbers);

  return (
    <div className='month-container'>
      <nav className='month-nav'>
        <h1>HOME</h1>
        <button onClick={() => changeMonth(-1)}>{'<'}</button>
        <h1>{selectedMonth}</h1>
        <button onClick={() => changeMonth(1)}>{'>'}</button>
      </nav>
      <main className='month-main'>
        <ul className='month-ul'>
          {listOfDayNames}
        </ul>
        <div className='month-days-container'>{listOfDayNumbers}</div>
      </main>
    </div>
  );
}

export default Month;

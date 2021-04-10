import './month.css';
import React, { useContext, useState} from 'react';
import { DataContext } from '../Context/DataContext';
import Day from '../Day/Day';

const Month = () => {

  const { setSelectedDate, setDisplay, dayNumbers, dayNames, meses, selectedMonth, setSelectedMonth, changeMonth, paddingDays, daysInMonth, currentDay, lastDayOfPrevMonth} = useContext(DataContext);

  const listOfDayNames = dayNames.map((day, index) =>
    <li
      className='month-li'
      key={index}
      value={day}>
      {day}
    </li>
    );

  const listOfDayNumbers = dayNumbers.map((date, index) => {
    return (
      <div
        className={date.padding? 'month-day padding' : 'month-day'}
        key={index}
        onClick={() => {setSelectedDate(date.day); setDisplay('dia')}}
        >
        <Day dayName={date.dayName} day={date.day} miniatura={true} />
      </div>
    )
  })

  return (
    <div className='month-container'>
      <nav className='month-nav'>
        <h1>HOME</h1>
        <button onClick={() => changeMonth(-1)}>{'<'}</button>
        <h1 className='month-nav-title'>{meses[selectedMonth]}</h1>
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

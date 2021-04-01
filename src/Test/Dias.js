import React, { useState } from 'react';

const Test = () => {

  const dt = new Date();
  const day = dt.getDay();
  const currentDay = dt.getDate(); // numero del dia en el mes (1-31)
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const [ selectedYear, setSelectedYear ] = useState(year);
  const [ selectedMonth, setSelectedMonth ] = useState(month);
  const [ selectedDate, setSelectedDate ] = useState(currentDay);

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate(); // numero de dias del mes
  const firstDayOfMonth = new Date(selectedYear, selectedMonth);
  const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
  const dayNames = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

  const num_array = [...Array(daysInMonth + 1).keys()].slice(1); // array de numeros desde el 1 hasta el ultimo dia del mes
  console.log(num_array);

  const paddingDays = firstDayOfMonth.getDay(); // indice del primer dia del mes
  console.log(paddingDays);

  // const dateString = firstDayOfMonth.toLocaleDateString('es-ar', {
  //   weekday: 'long',
  //   day: 'numeric',
  //   month: 'numeric',
  //   year: 'numeric'
  // }); // lunes, 1/3/2021
  // console.log(dateString);

  const display = num_array.map(index => (
    <li key={index} style={{listStyleType: 'none'}}>{index}</li>
  ));

  const reset = () => {
    setSelectedYear(year);
    setSelectedMonth(month);
    setSelectedDate(currentDay);
  }

  return (
    <div style={{display: 'column', padding: '10px'}}>
      <button onClick={() => reset()}>RESET</button>
      <div style={{display: 'flex'}}>
        <button onClick={() => setSelectedYear(selectedYear - 1)}>-</button>
        <div>Year: {selectedYear}</div>
        <button onClick={() => setSelectedYear(selectedYear + 1)}>+</button>
      </div>
      <div style={{display: 'flex'}}>
        <button onClick={() => setSelectedMonth(selectedMonth - 1)}>-</button>
        <div>Month: {selectedMonth}</div>
        <button onClick={() => setSelectedMonth(selectedMonth + 1)}>+</button>
      </div>
      <div style={{display: 'flex'}}>
        <button onClick={() => setSelectedDate(selectedDate - 1)}>-</button>
        <div>Date: {selectedDate}</div>
        <button onClick={() => setSelectedDate(selectedDate + 1)}>+</button>
      </div>
      <ul>
        {display}
      </ul>
    </div>
  );
};

export default Test;

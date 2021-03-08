import React, { useState, createContext } from 'react';

const dayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

const dayNames = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES',
 'VIERNES', 'SABADO']

const meses = ['ENERO', 'FEBRERO', 'MARZO',
 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

const DataContext = createContext({});

const DataProvider = ({children}) => {

  const dt = new Date();

  const day = dt.getDay(); // indice de dia semanal
  const currentDay = dt.getDate(); // numero del mes
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString('es-ar', {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });

  const paddingDays = dayNames.indexOf(dateString.split(', ')[0].toUpperCase());

  console.log(daysInMonth, month);
  // console.log(day, month, year);

  const [ selectedMonth, setSelectedMonth ] = useState(meses[month]);
  // selectedMonth se inicia con todos los meses
  const [ selectedDay, setSelectedDay ] = useState(currentDay);
  // selectedDay se inicia con el dia actual

  const [ display, setDisplay ] = useState('mes');

  const changeMonth = (number) => {
    let currentMonth = meses.indexOf(selectedMonth);
    switch (currentMonth) {
      case 0:
        number === 1 ? setSelectedMonth(meses[1]) : setSelectedMonth(meses[11]);
        break;
      case 11:
        number === 1 ? setSelectedMonth(meses[0]) : setSelectedMonth(meses[10]);
        break;
      default:
        setSelectedMonth(meses[currentMonth + number]);
        break;
    }
    // function that when a next or previous button is clicked it changes the current selectedMonth
  }

  return (
    <DataContext.Provider value={{
      dayNumbers,
      dayNames,
      meses,
      selectedMonth,
      setSelectedMonth,
      setSelectedDay,
      selectedDay,
      changeMonth,
      display,
      setDisplay,
      paddingDays,
      daysInMonth,
      currentDay
    }}>
      {children}
    </DataContext.Provider>
  );
};

export {
  DataContext,
  DataProvider
}

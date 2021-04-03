import React, { useState, createContext } from 'react';

// const dayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

const dayNames = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES',
 'VIERNES', 'SABADO']

const meses = ['ENERO', 'FEBRERO', 'MARZO',
 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

const DataContext = createContext({});

const DataProvider = ({children}) => {

  const dt = new Date();
  const day = dt.getDay(); // indice de dia semanal  dom => 0
  const currentDay = dt.getDate(); // numero del mes => 28
  const month = dt.getMonth(); // indice del mes (0-index) marzo => 2
  const year = dt.getFullYear(); // numero de año => (2021)

  const [ selectedYear, setSelectedYear ] = useState(year); // numero de año seleccionado
  const [ selectedMonth, setSelectedMonth ] = useState(month); // indice del mes seleccionado
  const [ selectedDate, setSelectedDate ] = useState(currentDay);  // numero de dia seleccionado en el mes

  const [ display, setDisplay ] = useState('mes');

  const firstDayOfMonth = new Date(selectedYear, selectedMonth);
  const paddingDays = firstDayOfMonth.getDay(); //

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate(); // numero de dias del mes
  // const dayNumbers = [...Array(paddingDays + daysInMonth).keys()]; // array de numeros desde el 1 hasta el ultimo dia del mes seleccionado

  const lastDayOfPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  const dayNumbers = [];
  for (let i = 0; i <= paddingDays + daysInMonth; i++) {
    let day = i - paddingDays + 1;
    if (paddingDays > i) {
      if (selectedMonth === 0) {
        dayNumbers.push({
          year: selectedYear - 1,
          month: selectedMonth + 11,
          day: lastDayOfPrevMonth + day,
          padding: true
        })
      } else {
        dayNumbers.push({
          year: selectedYear,
          month: selectedMonth - 1,
          day: lastDayOfPrevMonth + day,
          padding: true
        })
      }
    } else {
      dayNumbers.push({
        year: selectedYear,
        month: selectedMonth,
        day: day,
        padding: false
      })
    }
  }

  const changeMonth = (number) => {
    switch (selectedMonth) {
      case 0:
        number === 1 ? setSelectedMonth(1) : setSelectedMonth(11);
        break;
      case 11:
        number === 1 ? setSelectedMonth(0) : setSelectedMonth(10);
        break;
      default:
        setSelectedMonth(selectedMonth + number);
        break;
    }
    // function that when a next or previous button is clicked it changes the current selectedMonth
  }

  return (
    <DataContext.Provider value={{
      dayNames,
      meses,
      currentDay,
      selectedMonth,
      setSelectedMonth,
      selectedDate,
      setSelectedDate,
      paddingDays,
      daysInMonth,
      dayNumbers,
      lastDayOfPrevMonth,
      changeMonth,
      display,
      setDisplay
    }}>
      {children}
    </DataContext.Provider>
  );
};

export {
  DataContext,
  DataProvider
}

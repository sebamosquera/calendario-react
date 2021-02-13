import React, { useState, createContext } from 'react';

const DataContext = createContext({});

const DataProvider = ({children}) => {

  const dayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  const dayNames = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES',
   'VIERNES', 'SABADO', 'DOMINGO']

  const meses = ['ENERO', 'FEBRERO', 'MARZO',
   'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
   'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

  const [ selectedMonth, setSelectedMonth ] = useState(meses[0]);
  // selectedMonth se inicia con todos los meses
  const [ selectedDay, setSelectedDay ] = useState(1);
  // selectedDay se inicia con el dia actual

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
      changeMonth
    }}>
      {children}
    </DataContext.Provider>
  );
};

export {
  DataContext,
  DataProvider
}

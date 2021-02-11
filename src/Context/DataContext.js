import React, { useState, createContext } from 'react';

const DataContext = createContext({});

const DataProvider = ({children}) => {

  const days = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES',
   'VIERNES', 'SABADO', 'DOMINGO']

  const meses = ['ENERO', 'FEBRERO', 'MARZO',
   'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
   'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

  const [ selectedMonth, setSelectedMonth ] = useState(meses[0]);
  // selectedMonth se inicia con todos los meses

  const changeMonth = (number) => {
    let currentMonth = meses.indexOf(selectedMonth);
    setSelectedMonth(meses[currentMonth + number]);
    console.log(selectedMonth);
    // function that when a next or previous button is clicked it changes the current selectedMonth
  }

  return (
    <DataContext.Provider value={{
      days,
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

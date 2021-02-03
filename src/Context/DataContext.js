import React, { useState, createContext } from 'react';

const DataContext = createContext({});

const DataProvider = ({children}) => {

  const meses = ['ENERO', 'FEBRERO', 'MARZO',
   'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
   'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

  const [ displayMonth, setDisplayMonths ] = useState([...meses])

  return (
    <DataContext.Provider value={{
      meses,
      displayMonth,
      setDisplayMonths
    }}>
      {children}
    </DataContext.Provider>
  );
};

export {
  DataContext,
  DataProvider
}

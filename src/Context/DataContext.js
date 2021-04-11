import React, { useState, createContext } from 'react';

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

  const tasks = [
    {
      year: 2021,
      month: 3,
      day: 1,
      task: 'me ves?'
    },
    {
      year: 2020,
      month: 11,
      day: 26,
      task: 'Tarea 2'
    },
    {
      year: 2019,
      month: 3,
      day: 12,
      task: 'Tarea 3'
    }
  ];

  const findTask = (year, month, day) => {
    let filteredTasks = tasks
        .filter(task => task.year === year && task.month === month && task.day === day)
        .map(filtered => filtered.task)
    return filteredTasks;
  }

  const dayNumbers = [];
  for (let i = 0, index = 0; i < paddingDays + daysInMonth; i++, index++) {
    let day = i - paddingDays + 1;
    if (index == 7) index = 0;
    if (paddingDays > i) {
      if (selectedMonth === 0) {
        dayNumbers.push({
          year: selectedYear - 1,
          month: selectedMonth + 11,
          day: lastDayOfPrevMonth + day,
          dayName: dayNames[index],
          padding: true,
          tasks: findTask(year, month, day)
        })
      } else {
        dayNumbers.push({
          year: selectedYear,
          month: selectedMonth - 1,
          day: lastDayOfPrevMonth + day,
          dayName: dayNames[index],
          padding: true,
          tasks: findTask(year, month, day)
        })
      }
    } else {
      dayNumbers.push({
        year: selectedYear,
        month: selectedMonth,
        day: day,
        dayName: dayNames[index],
        padding: false,
        tasks: findTask(year, month, day)
      })
    }
  }

  console.log(dayNumbers);

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

// import './day.css';
import React, { useContext, useState} from 'react';
import { DataContext } from '../Context/DataContext';

const Day = (props) => {

  const { selectedDay, dayNames } = useContext(DataContext)

  var hora = new Date();


  return (
    <div className='day-div'>
      {props.miniatura === true ?
        <div><h1>{props.value}</h1><div>TAREAS</div></div> :
        <div>FECHA: {dayNames[hora.getDay()] + ' ' + hora.getDate()}</div>
      }
    </div>
  )
}

export default Day;

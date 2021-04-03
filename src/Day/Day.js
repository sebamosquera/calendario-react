import './day.css';
import React, { useContext, useState} from 'react';
import { DataContext } from '../Context/DataContext';

const Day = (props) => {

  const { selectedDate, dayNames } = useContext(DataContext)

  return (
    <div className='day-div'>
      {props.miniatura === true ?
        <div>
          <h1 className='day-number'>{props.day}</h1>
          <div>TAREAS</div>
        </div> :
        <div>FECHA: {selectedDate}</div>
      }
    </div>
  )
}

export default Day;

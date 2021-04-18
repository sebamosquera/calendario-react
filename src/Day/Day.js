import './day.css';
import React, { useContext, useState} from 'react';
import { DataContext } from '../Context/DataContext';

const Day = (props) => {

  const { selectedDate, dayNames, tasks, setTasks } = useContext(DataContext);

  const taskList = props.tasks.map((task, i) => {
    return <li key={i} onClick={() => deleteTask(task)}>{task}</li>
  });

  const addTask = (year, month, day) => {
    setTasks([...tasks, {
      year: year,
      month: month,
      day: day,
      task: `nueva tarea en: ${props.dayName} ${day} de ${year}`
    }])
  };

  const deleteTask = (task) => {
    let deletedTask = tasks.find(t => t.task === task);
    // let i = tasks.indexOf(deletedTask);
    // tasks.splice(i, 1);
    // revisar esta funcion
    console.log(deletedTask);
  }

  return (
    <div className='day-div'>
      {props.miniatura === true ?
        <div>
          <h1 className='day-number'>{props.day}</h1>
          <div
            className='day-agregar-tarea'
            onClick={() => addTask(props.year, props.month, props.day)}
            >+</div>
          <ul className='day-list'>
            {taskList}
          </ul>
        </div> :
        <div>FECHA: {selectedDate}</div>
      }
    </div>
  )
}

export default Day;

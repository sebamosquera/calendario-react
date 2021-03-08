import React, { useContext } from 'react';
// import { BrowserWeb as Router, Route } from 'react-router-dom';
import './main.css';
import { DataContext } from '../Context/DataContext';
import Day from '../Day/Day';
import Month from '../Month/Month';
import Year from '../Year/Year';

const Main = () => {

  const { display, meses, selectedMonth, setSelectedMonth } = useContext(DataContext)

  const listMeses = meses.map((mes, index) =>
    <div className='month' key={index}>{mes}</div>
   );

  /*const changeMonth = (action) => {
    console.log(action);
  }*/
//  listMeses.map(div => console.log(div.props.children));

  return (
    <main  className="app-main">

      {/*<Router>
        <Route path='/' exact component={Month} />
        <Route path='/day' exact component={Day} />
      </Router>*/}
      {/*  <button className='button home-button' onClick={() => setSelectedMonth([...meses])}>Home</button>
      //  <button className='button next-button' value='next' onClick={() => changeMonth('next')}>Next</button>
      //  <div className='months-container'>{listMeses}</div>*/}
      {display === 'mes' ? <Month /> : display === 'dia' ? <Day /> : <Year />}
    </main>
  )
}

export default Main;

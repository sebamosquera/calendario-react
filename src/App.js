import React from 'react';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import './App.css';
import { DataProvider } from './Context/DataContext';

// import Test from './Test/Dias';

function App() {

  return (
    <div className="app-container">
      {
        // <Test />
      }

      <DataProvider>
        <Nav />
        <header className="app-header">2020</header>
        <Main />
      </DataProvider>

    </div>
  );
}

export default App;

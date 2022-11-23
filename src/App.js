import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <MainContent
        {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className='box'>
        {cards}
      </div>
    </div>
  );
}

export default App;

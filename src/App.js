import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Starting from './Components/Starting';

const App = () => {
  return (
    <>
      <Header title = "GAME: Guess The Tile"/>
      <Starting/>
      <Footer/>
    </>
  )
}

export default App;
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    <>
      <Header title = "GAME: Guess The Tile"/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App;
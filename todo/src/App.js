import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todo from './Components/Todo';
import React from 'react';

class App extends React.Component{
  render () {
    return(
      <>
        <Header/>
        <Todo />
        <Footer/>
      </>
    )
  }
}

export default App;
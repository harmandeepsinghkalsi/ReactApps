import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LoginComponent} from './LoginComponent';
import {TableView} from './TableView';
import {Deck}  from './Deck';
import {BlackJack} from './BlackJack';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
const jack = new BlackJack();
const deck  = jack.startNewGame();
jack.distributeCards();
const App: React.FC = () => {

  
  return (

    <div className="App">
    <div className = "Header">
      WELCOME  TO  ACME  CASINO
    </div>
    <img src = {require("./images/black-jack-bg.jpeg")} height="575px" width="100%"/>
    <div className = "Header" style={{cursor: 'pointer'}} >
    <Link style={{textDecoration: 'none', color:'white'}} to="/login">CLICK HERE TO LOGIN</Link>  
    </div>
    </div>
    // <div>
    //   <TableView></TableView>
    // </div>
  );
}

export default App;

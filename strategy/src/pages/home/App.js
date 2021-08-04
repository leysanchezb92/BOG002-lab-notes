import React from 'react';
import './App.css';
import logo from '../../assets/strategy.svg';
import BtnGeneral from '../../components/button';

function App() {
  console.log('App')
  return (
    <div className="main">
      <div className="main logo">
        <img src={logo} alt="Logo Strategy"/>
        <h1>Strategy</h1>
        <p>Organize and set your pieces, whenever and whatever you want</p>
      </div>
      <div className="buttons">
        <BtnGeneral name="Login" id="login" url="/login"/>
        <BtnGeneral name="Register" id="register" url="/register"/>
      </div>
    </div>
  );
}

export default App;

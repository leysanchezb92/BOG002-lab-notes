import './App.css';
import logo from './assets/strategy.svg';
import {Link} from "react-router-dom";

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
        <button id="register" className="btn-general">
          <Link to="/register">Register</Link> 
        </button>
        <button id="login" className="btn-general">
          <Link to="/login">Login</Link> 
        </button>
      </div>
    </div>
  );
}

export default App;

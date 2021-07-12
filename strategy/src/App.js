import './App.css';
import logo from './assets/strategy.svg';

function App() {
  return (
    <div className="main">
      <div className="main logo">
        <img src={logo} alt="Logo Strategy"/>
        <h1>Strategy</h1>
        <p>Organize and set your pieces, whenever and whatever you want</p>
      </div>
      <div className="buttons">
        <button id="register" className="btn-general">Register</button>
        <button id="login" className="btn-general">login</button>
      </div>
    </div>
  );
}

export default App;

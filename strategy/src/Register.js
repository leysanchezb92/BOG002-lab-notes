import './App.css';
import google from './assets/google.svg'
// import {Link} from "react-router-dom";

function Register(){
    console.log('Register')
    return (
        <div className="main register">
            <h1>REGISTER</h1>
            <form>
            <div className="form_styles">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" required/>
                </div>
                <div className="form_styles">
                  <label htmlFor="text">Full name</label>
                  <input type="text" id="name" required/>
                </div> 
                <div className="form_styles">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" required/>
                  <div className="input__indicator"></div>
                </div>
            </form>
            <div className="buttons">
                <button id="create" className="btn-general">
                    Create account
                {/* <Link to="/register">Register</Link> Register */}
                </button>
            </div>
            <div className="social">
                <p>Or register with:</p>
                <button><img src={google} alt="logo google"/></button>
            </div>
        </div>
    );
}

export default Register
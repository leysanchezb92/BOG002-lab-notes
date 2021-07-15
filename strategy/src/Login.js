import google from './assets/google.svg'
// import {Link} from "react-router-dom";

function Login(){
    console.log('Login')
    return (
        <div className="main register">
            <h1>LOGIN</h1>
            <form>
            <div className="form_styles">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" required/>
                </div>
                <div className="form_styles">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" required/>
                  <div className="input__indicator"></div>
                </div>
            </form>
            <div className="buttons">
                <button id="create" className="btn-general">
                    Log In
                {/* <Link to="/register">Register</Link> Register */}
                </button>
            </div>
            <div className="social">
                <p>Or Login with:</p>
                <button><img src={google} alt="logo google"/></button>
            </div>
        </div>
    );
}

export default Login
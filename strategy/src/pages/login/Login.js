import google from '../../assets/google.svg'
import InputForm from '../../components/inputForm';
// import {Link} from "react-router-dom";

function Login(){
    console.log('Login')
    return (
        <div className="main register">
            <h1>LOGIN</h1>
            <form>
                <InputForm for="email" name="Email Address" type="email" id="emailLog"/>
                <InputForm for="password" name="Password" type="password" id="passwordLog"/>
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
import './Register.css';
import google from '../../assets/google.svg'
import { useFirebaseApp } from 'reactfire';
import { useState } from 'react';


function Register(props){
    const firebase = useFirebaseApp()
    console.log(firebase)
    const [ email,setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const submit = ()=>{
        console.log(email,password)
    }
    return (
        <div className="main register">
            <h1>REGISTER</h1>
            <form>
                <div className="form_styles">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" onChange={(event)=> setEmail(event.target.value)} required/>
                </div>
                <div className="form_styles">
                  <label htmlFor="text">Full name</label>
                  <input type="text" id="name" required/>
                </div> 
                <div className="form_styles">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={(event)=> setPassword(event.target.value)} required/>
                  {/* <div className="input__indicator"></div> */}
                </div>
            </form>
            <div className="buttons">
                <button id="create" className="btn-general" onClick={submit} >
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
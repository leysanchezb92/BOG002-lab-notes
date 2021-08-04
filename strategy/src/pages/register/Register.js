import React from 'react';
import './Register.css';
import BtnGeneral from '../../components/button';
import InputForm from '../../components/inputForm';
import google from '../../assets/google.svg'
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BtnGoogle } from '../../firebase-config';

function Register(){
    const firebase = useFirebaseApp()
    const [ email,setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();
    
    function buttonGoogle(){
        BtnGoogle()
        .then(result => { 
            console.log(result.user.email) 
            history.push(`/main`);
        })
        .catch(error => console.error(error.message))
    }

    
    const createAccount = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            history.push(`/main`);
        })
        .catch((error)=>console.error(error,'paso algo malo'))
    }


    return (
        <div className="main register">
            <h1>REGISTER</h1>
            <form>
                <InputForm for="email" name="Email Address" type="email" id="email" setStatus={setEmail}/>
                <InputForm for="text" name="Full name" type="text" id="text"/> 
                <InputForm for="password" name="Password" type="password" id="password" setStatus={setPassword}/>
            </form>
            <div className="buttons">
                <BtnGeneral name="Register" id="register" url="/main" onClick={createAccount}/>
            </div>
            <div className="social">
                <p>Or register with:</p>
                <button onClick={buttonGoogle}><img src={google} alt="logo google"/></button>
            </div>
        </div>
    );
}

export default Register
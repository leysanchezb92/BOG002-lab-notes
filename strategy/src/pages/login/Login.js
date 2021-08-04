import React from 'react';
import google from '../../assets/google.svg'
import InputForm from '../../components/inputForm';
import BtnGeneral from '../../components/button';
import { BtnGoogle } from '../../firebase-config';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

function Login(){
    const firebase = useFirebaseApp()
    const [ email,setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();

    const login = async ()=>{
        await 
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((console.log))
        .catch((error) => {
            console.error(error)
        });
    }

    function buttonGoogle(){
        BtnGoogle()
        .then(result => { 
            console.log(result.user.email) 
            history.push(`/main`);
        })
        .catch(error => console.error(error.message))
    }

    return (
        <div className="main register">
            <h1>LOGIN</h1>
            <form>
                <InputForm for="email" name="Email Address" type="email" id="emailLog" setStatus={setEmail}/>
                <InputForm for="password" name="Password" type="password" id="passwordLog" setStatus={setPassword}/>
            </form>
            <div className="buttons">
                <BtnGeneral name="Login" id="login" url="/main" onClick={login}/>
            </div>
            <div className="social">
                <p>Or Login with:</p>
                <button onClick={buttonGoogle}><img src={google} alt="logo google"/></button>
            </div>
        </div>
    );
}

export default Login
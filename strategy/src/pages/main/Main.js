// import { useFirebaseApp } from 'reactfire';
import React from 'react';
import 'firebase/auth';
import './Main.css';
import '../../index.css';
import lapiz from '../../assets/lapiz.svg'
import borrar from '../../assets/borrar.svg'
import submit from '../../assets/submit.svg'
import BtnGeneral from '../../components/button';
import { Logout } from '../../firebase-config';
import { useHistory } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import strategyMenu from '../../assets/strategyMenu.svg';
// import NotesCards from '../../components/notes';
// import ButtonNotes from '../../components/buttonNotes';

function Main(){
    const history = useHistory();

    function Out(){
        Logout()
        .then(()=>{
            console.log('aqui sali');
            history.push(`/`);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return(
        <div className="notes">
            <div className="menu">
                <img src={strategyMenu} alt="logo strategy"></img>
                <h1>Strategy</h1>
                <img className="imgMenu" src={menu} alt="menu"></img>
            </div>
            <div className="cards">
                <div className="cardNotes">
                    <input type="text" placeholder="Title"></input>
                    <textarea className="menuCard" placeholder="Note"></textarea>
                    <button className="buttonCard">
                        <img className="imgCard" src={lapiz} alt="edit"></img>
                    </button>
                    <button className="buttonCard">
                        <img className="imgCard" src={borrar} alt="delete"></img>
                    </button>
                    <button className="buttonCard">
                        <img className="imgCard" src={submit} alt="submit"></img>
                    </button>
                </div>
            </div>
            <div className="btnLogOut">
                <BtnGeneral name="Log out" onClick={Out}/>
            </div>
        </div>
    )
}

export default Main
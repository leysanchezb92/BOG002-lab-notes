// import { useFirebaseApp } from 'reactfire';
import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import './Main.css';
import '../../index.css';
import lapiz from '../../assets/lapiz.svg'
import borrar from '../../assets/borrar.svg'
import submit from '../../assets/submit.svg'
import BtnGeneral from '../../components/button';
import { Logout, addNoteFb, fireDB } from '../../firebase-config';
import { useHistory } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import strategyMenu from '../../assets/strategyMenu.svg';


function Main(){
    const history = useHistory();
    const initialValue={
        Title:'',
        Note:'',
        date:'',
    };
    const [ values, setValues ] = useState(initialValue);
    const inputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]:value})
    }
    const [ notes,setNotes ] = useState([]);
    const btnSend = e => {
        e.preventDefault();
        addNoteFb(values)
        .then(() => {console.log('data added')})
        .catch((e)=>{console.error(e)})
    }
    
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

    const getNotes = async ()=>{
        fireDB
        .collection('notes')
        .onSnapshot((querySnapshot)=>{
            const docs= []
            querySnapshot.forEach(doc =>{
                docs.push({...doc.data(),id: doc.id})
            });
            setNotes(docs);
        });
    }
    useEffect(()=>{
        getNotes();
    },[])

    const deleteNote= async (id)=>{
        if(window.confirm('are you sure you want to delete this note')){
            await fireDB.collection('notes').doc(id).delete();
            console.log('task deleted')
        }
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
                    <input className="inputNotes" type="text" placeholder="Title" name="Title" onChange={inputChange}></input>
                    <textarea className="menuCard" placeholder="Note" name="Note" onChange={inputChange}></textarea>
                    <button className="buttonCard">
                        <img className="imgCard" src={lapiz} alt="edit"></img>
                    </button>
                    <button className="buttonCard">
                        <img className="imgCard" src={borrar} alt="delete" onClick={deleteNote}></img>
                    </button>
                    <button className="buttonCard" onClick={btnSend}>
                        <img className="imgCard" src={submit} alt="submit"></img>
                    </button>
                </div>
                {notes.map(note=>{
                    return(
                        <div className="cardNotes" key={note.id}>
                            <h3>{note.Title}</h3>
                            <p>{note.Note}</p>
                            <button className="buttonCard">
                                <img className="imgCard" src={lapiz} alt="edit"></img>
                            </button>
                            <button className="buttonCard">
                                <img className="imgCard" src={borrar} alt="delete" onClick={()=> {deleteNote(note.id)}} ></img>
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="btnLogOut">
                <BtnGeneral name="Log out" onClick={Out} url="/home"/>
            </div>
        </div>
    )
}

export default Main

// const notes= fireDB.collection("notes").add({
    //     Title: "Ada",
    //     Note: "Lovelace",
    //     date: 1815
    // })
    // .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });
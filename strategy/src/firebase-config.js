import firebaseApp from "firebase/app";
import 'firebase/firestore';

const firebaseObj= {
    apiKey: "AIzaSyDE_gZPYiz9Im2w4mxpAybcFe1IC-y5P-g",
    authDomain: "react-strategy-ea491.firebaseapp.com",
    projectId: "react-strategy-ea491",
    storageBucket: "react-strategy-ea491.appspot.com",
    messagingSenderId: "670853919849",
    appId: "1:670853919849:web:338a42389e46d664921ef8",
    measurementId: "G-LYT76W1CQL"
};

firebaseApp.initializeApp(firebaseObj);

const BtnGoogle = async() => {
    const provider = new firebaseApp.auth.GoogleAuthProvider();
    return await firebaseApp.auth().signInWithPopup(provider)
}
const Logout = async()=>{
    return firebaseApp.auth().signOut()
}
const fireDB = firebaseApp.firestore();
const addNoteFb= async (objNote)=>{
    return await fireDB.collection('notes').doc().set(objNote)
}
export { firebaseObj, BtnGoogle, Logout, addNoteFb, fireDB }



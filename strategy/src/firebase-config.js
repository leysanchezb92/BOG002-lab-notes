import firebaseApp from "firebase/app";

const firebaseObj= {
    apiKey: "AIzaSyDE_gZPYiz9Im2w4mxpAybcFe1IC-y5P-g",
    authDomain: "react-strategy-ea491.firebaseapp.com",
    projectId: "react-strategy-ea491",
    storageBucket: "react-strategy-ea491.appspot.com",
    messagingSenderId: "670853919849",
    appId: "1:670853919849:web:338a42389e46d664921ef8",
    measurementId: "G-LYT76W1CQL"
};

const BtnGoogle = async() => {
    const provider = new firebaseApp.auth.GoogleAuthProvider();
    console.log(provider)
    await firebaseApp.auth().signInWithPopup(provider)
    .then(result => { 
        console.log(result.user.email) 
    })
    .catch(error => console.error(error.message))
}
export { firebaseObj,BtnGoogle }



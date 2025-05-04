import { initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { child, get, getDatabase, onValue, ref } from 'firebase/database';
import React, { useState } from 'react';

const config = {
    apiKey: "AIzaSyC6blLd2agAeSPZtQ8kSKD-zlyGjWf_hq0",
    authDomain: "rainbow6-a1a48.firebaseapp.com",
    databaseURL: "https://rainbow6-a1a48-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rainbow6-a1a48",
    storageBucket: "rainbow6-a1a48.firebasestorage.app",
    messagingSenderId: "1047795652975",
    appId: "1:1047795652975:web:6ee94721eb564b5d89b09a",
    measurementId: "G-ET8EYZDQY8"
    };
    
    // Initialize Firebase
    const app = initializeApp(config)
    const auth = getAuth(app)

    // Sign in using a popup.
    const provider = new GoogleAuthProvider();
    const dbRef = ref(getDatabase());

    
function Login (){
    var uid = ""
    const [status, setStatus] = useState("empty")

    async function click()
    {
        await signInWithPopup(auth, provider).then(result => result.user.uid ? uid = result.user.uid : uid = "username not retrevable");
        login()
    }

    function login()
    {
        console.log("login")

        get(child(dbRef, (`user-data/`+ uid))).
        then((snapshot) => {
            if (snapshot.exists()) {
                setStatus(snapshot.val().toString());
            } else {
                setStatus("false");
            }
        }).catch((error) => {
            setStatus(error)
        });
    }


    return(
        <div>
            <p>{uid}</p>
            <button onClick={click}>Login</button>

        {

        status === "true" 
        ?
        <p>Status: {status}</p>
        :
        <p>Status: false</p>
    }
        </div>

    );
}

export default Login;

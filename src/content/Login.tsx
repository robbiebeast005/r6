import { initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { child, get, getDatabase, onValue, ref } from 'firebase/database';
import React, { useState } from 'react';
import Google from '../images/google-logo.png'

import './Login.css'

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

    var user : User | null
    
function Login (){
    const [status, setStatus] = useState("empty")
    const [profile, setProfile] = useState("")

    async function click()
    {
        await signInWithPopup(auth, provider).then(result => result.user ? user = result.user : user = null);
        login()
    }

    function login()
    {
        get(child(dbRef, (`user-data/`+ user?.uid))).
        then((snapshot) => {
            if (snapshot.exists()) {
                setStatus(snapshot.val().toString());
            } else {
                setStatus("false");
            }
        }).catch((error) => {
            setStatus(error)
        });

        if (user?.photoURL)
            setProfile(user?.photoURL)
    }


    return(
        <div className='box'>
        {

        user
        ?
            <div>
                <img src={profile} alt="profile" />
                <p>Logged in as: {user.displayName}</p>
            </div>
        :
            <button className='button' onClick={click}>
                <img className='img' src={Google} alt="logo" />
                Sign in with Google
            </button>
        }
        </div>

    );
}

export default Login;

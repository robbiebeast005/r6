import { initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { child, get, getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
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

    
function Login (){
    const [user, setUser] = useState<User | null>(null)
    const [premium, setPremium] = useState(false)

    useEffect(() => {
        login()
      }, [user]);

    async function click()
    {
        await signInWithPopup(auth, provider).then(result => result.user ? setUser(result.user) : setUser(null));
    }

    
    function login()
    {
        get(child(dbRef, (`user-data/`+ user?.uid))).
        then(snapshot => {
            if (snapshot.exists()) {
                if(snapshot.val().toString() === "true")
                {
                    setPremium(true)
                }
            }
        }).catch((error) => {
            console.log(error)
        });

    }

    return(
        <div className='box'>
        {
        user
        ?
            <div className='user'>
                <img className='profile' src={user?.photoURL ? user?.photoURL : ""} alt="profile" />
                <p>{premium ? '⭐' : ''} <b>{user.displayName}</b></p>
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

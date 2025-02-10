import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";

import {
    addDoc, collection, getFirestore
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyA9YqP1dHraS5vYgQdJvq7L0bB3CDqqrAM",
    authDomain: "quiz-8b913.firebaseapp.com",
    projectId: "quiz-8b913",
    storageBucket: "quiz-8b913.firebasestorage.app",
    messagingSenderId: "1033337563056",
    appId: "1:1033337563056:web:3905c03b7cff07b4ec9875"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });
    } catch (err){
        console.log(err);
        toast.error(err.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.log(err);
        toast.error(err.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};

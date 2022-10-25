import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBksPOmQqg1j58RCrFuf3_NyiedM4AV-L4",
  authDomain: "crwn-clothing-db-9ca2e.firebaseapp.com",
  projectId: "crwn-clothing-db-9ca2e",
  storageBucket: "crwn-clothing-db-9ca2e.appspot.com",
  messagingSenderId: "515606249877",
  appId: "1:515606249877:web:c0fed8d0f29d6a32f4b69c",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup (auth, provider);

export const db = getFirestore();

export const createuserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
    //if user data doen not exist
    //create / set the document with the data from userAuth in my collection

    //if user data exists
    //return the user
};
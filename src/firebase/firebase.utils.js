import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4XZxO59vAA0JvCILTQJbGeXrYE0pAWjM",
  authDomain: "colors-app-db.firebaseapp.com",
  projectId: "colors-app-db",
  storageBucket: "colors-app-db.appspot.com",
  messagingSenderId: "1066985572309",
  appId: "1:1066985572309:web:94bbc405c62b41d9895f5c",
  measurementId: "G-R3L8SXC2XQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addDataToFirestore = async (objectKey, objectsToAdd) => {
  try {
    objectsToAdd.map(async (object) => {
      const docRef = await addDoc(collection(db, objectKey), object);
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (error) {
    console.log(error);
  }
};

export const snapshotToArray = (objectKey) => {
  let docArray = [];
  const query = async () => {
    const querySnapshot = await getDocs(collection(db, objectKey));
    querySnapshot.forEach((doc) => docArray.push(doc.data()));
  };
  query();
  return docArray;
};

const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  try {
    auth.signInWithPopup(provider);
  } catch (error) {
    console.log(error);
  }
};

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import seedColors from "../seedColors";

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

export const addDataToFirestore = async () => {
  try {
    seedColors.map(async (object) => {
      const docRef = await addDoc(collection(db, "palettes"), object);
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCollectionAndDocument = async () => {
  const paletteRef = db.collection("palettes/g5YzyDnxul74xs49RWMq");
  const batch = db.batch();
  const objectsToAdd = seedColors.map(({ paletteName, id, emoji, colors }) => ({
    paletteName,
    id,
    emoji,
    colors,
  }));

  objectsToAdd.forEach((obj) => {
    const newDocRef = paletteRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
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

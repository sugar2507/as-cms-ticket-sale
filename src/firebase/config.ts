import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlNbjLSnwYg5Y2l1Ah-QblNSaCWzS4DAE",
  authDomain: "ticket-cms-as.firebaseapp.com",
  projectId: "ticket-cms-as",
  storageBucket: "ticket-cms-as.appspot.com",
  messagingSenderId: "245472383526",
  appId: "1:245472383526:web:a119327ecd0ece18d3cce7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
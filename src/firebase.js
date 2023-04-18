import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCef1B5KBsetIN7VYom-5Nrdr8Zeaw6FaE',
  authDomain: "admindashboard-auth.firebaseapp.com",
  projectId: "admindashboard-auth",
  storageBucket: "admindashboard-auth.appspot.com",
  messagingSenderId: "1084349403263",
  appId: "1:1084349403263:web:e1430d59ba810518562f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
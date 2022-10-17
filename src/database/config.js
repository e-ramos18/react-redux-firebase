import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
var config = {
  apiKey: "AIzaSyC5aj_LkaLsZXBAGwc5XfT_dEPcNc88kow",
  authDomain: "react-product-95529.firebaseapp.com",
  databaseURL: "https://react-product-95529-default-rtdb.firebaseio.com",
  projectId: "react-product-95529",
  storageBucket: "react-product-95529.appspot.com",
  messagingSenderId: "527753394968",
  appId: "1:527753394968:web:4bc9ef8d6bc971e0c2bc6d",
  measurementId: "G-LENZBT228M",
};

const app = initializeApp(config);
const database = getDatabase(app);

export { database };

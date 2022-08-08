import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmof-PHzuI_CVF8xivLEsdCilX5WLcCWk",
  authDomain: "stproject-cd675.firebaseapp.com",
  projectId: "stproject-cd675",
  storageBucket: "stproject-cd675.appspot.com",
  messagingSenderId: "163010623462",
  appId: "1:163010623462:web:99fd192e2a61e6fd65c827",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

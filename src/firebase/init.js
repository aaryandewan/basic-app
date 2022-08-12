import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmof-PHzuI_CVF8xivLEsdCilX5WLcCWk",
  authDomain: "stproject-cd675.firebaseapp.com",
  databaseURL: "https://stproject-cd675-default-rtdb.firebaseio.com",
  projectId: "stproject-cd675",
  storageBucket: "stproject-cd675.appspot.com",
  messagingSenderId: "163010623462",
  appId: "1:163010623462:web:99fd192e2a61e6fd65c827",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage };

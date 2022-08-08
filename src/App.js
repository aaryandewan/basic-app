import HomePage from "./components/homePage";
import SignIn from "./components/SignIn";
import Button from "@mui/material/Button";
import { Routes, Route, Link } from "react-router-dom";

import SignInScreen from "./firebase/firebaseui";

// var firebase = require("firebase");
// var firebaseui = require("firebaseui");
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start("#firebaseui-auth-container", {
//   signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
//   // Other config options...
// });

function App() {
  return (
    <div>
      {/* <Button variant="contained">Hello World</Button>; */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignInScreen />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
var firebaseui = require("firebaseui");

function Firebaseui() {
  useEffect(() => {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      // Other config options...
    });
  }, []);

  return <div>Hello World</div>;
}

export default Firebaseui;

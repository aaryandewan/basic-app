import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function HomePage() {
  const auth = getAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);

  // const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user);
      console.log("Homepage, User is signed in and uid = ", uid);
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Homepage, user is signed out.");
    }
  });

  return (
    <div>
      Homepage
      <h1>{user && user.uid}</h1>
    </div>
  );
}

export default HomePage;

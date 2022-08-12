import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
      setUser(null);
      console.log("Homepage, user is signed out.");
    }
  });

  const handleSignOut = () => {
    console.log("Before signing out:");
    console.log(auth.currentUser);
    console.log("--------------------------------");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out");
        console.log(auth.currentUser);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <Grid
        style={{ backgroundColor: "white", height: "100vh" }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {user && (
          <Grid item>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              onClick={handleSignOut}
            >
              Sign out
            </Button>
          </Grid>
        )}
        {user && (
          <Grid item>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                size="large"
                type="submit"
                variant="contained"
              >
                Profile
              </Button>
            </Link>
          </Grid>
        )}
        {!user && (
          <Grid item>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up
              </Button>
            </Link>
          </Grid>
        )}
        {!user && (
          <Grid item>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default HomePage;

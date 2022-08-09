import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
            >
              Sign Out
            </Button>
          </Grid>
        )}
        {user && (
          <Grid item>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
            >
              Profile
            </Button>
          </Grid>
        )}
        {!user && (
          <Grid item>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
            >
              Sign up
            </Button>
          </Grid>
        )}
        {!user && (
          <Grid item>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
            >
              Sign in
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default HomePage;

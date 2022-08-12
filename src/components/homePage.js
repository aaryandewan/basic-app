import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function HomePage() {
  const [imageURL, setImageURL] = useState(null);

  const auth = getAuth();
  const [user, setUser] = useState(null);

  const getTheProfileURL = (user) => {
    const storage = getStorage();

    let fRef = "images/".concat(user.uid);
    fRef.concat("/.jpg");
    getDownloadURL(ref(storage, fRef))
      .then((url) => {
        console.log("URL GOT!", url);
        setImageURL(url);
      })
      .catch((error) => {
        console.log("ERRRRR", error);
      });
  };

  useEffect(() => {
    if (user) {
      console.log("USER, ", user);
      getTheProfileURL(user);
    }
  }, [user]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user);
      console.log("Homepage, User is signed in and uid = ", uid);
      // ...
    } else {
      // User is signed out
      // ...
      if (user != null) setUser(null);
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
        setUser(null);
        setImageURL(null);
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

        {imageURL && (
          <img src={imageURL} height="600px" width="400px" alt="profile"></img>
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

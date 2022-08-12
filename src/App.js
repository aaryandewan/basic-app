import { useEffect, useState } from "react";
import HomePage from "./components/homePage";
import SignIn from "./components/SignIn";
import Button from "@mui/material/Button";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import PrivateRoute from "./routing/PrivateRoute";

import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const [currUser, setCurrUser] = useState(null);

  const auth = getAuth();

  const ProtectedRoute = ({ user, children }) => {
    if (!currUser) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute user={currUser}>
              <Profile />
            </ProtectedRoute>
          }
        /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;

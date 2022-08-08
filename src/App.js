import HomePage from "./components/homePage";
import SignIn from "./components/SignIn";
import Button from "@mui/material/Button";
import Signup from "./components/Signup";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Button variant="contained">Hello World</Button>; */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

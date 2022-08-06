import HomePage from "./components/homePage";
import SignIn from "./components/SignIn";
import Button from "@mui/material/Button";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Button variant="contained">Hello World</Button>; */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

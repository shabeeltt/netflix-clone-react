import SignUp from "./Components/SignUp/SignUp";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvidor } from "./storeContexts/AuthContext";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <AuthContextProvidor>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthContextProvidor>
  );
}

export default App;

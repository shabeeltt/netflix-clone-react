import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvidor } from "./storeContexts/AuthContext";
import NavBar from "./Components/NavBar/NavBar";
import ProtectedRoute from "./Components/ProtectedRoute";
import MyListPage from "./Pages/MyListPage";
import SignUpPage from "./Pages/SignUpPage";
import { ToastProvider } from "./Contexts/ToastContext";

function App() {
  return (
    <ToastProvider>
      <AuthContextProvidor>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="//my-list" element={<MyListPage />} />
          </Routes>
        </Router>
      </AuthContextProvidor>
    </ToastProvider>
  );
}

export default App;

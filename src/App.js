import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Tasks from "./components/tasks";
import Login from "./components/login";
import Register from "./components/register";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);

  const login = () => {
    setLogged(true)
  };

  return (
    <Router>
      <Routes>
        {/*  REDIRECCION SI NO ESTA LOGGEADO */}
        <Route
          path="/"
          element={
            logged ? (
              <Navigate to="/tasks"></Navigate>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        {/* RUTAS */}
        <Route
          path="/tasks"
          element={
            logged ? (
              <Tasks></Tasks>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
        <Route path="/login" element={<Login funcion={login}></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ funcion }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="container mt-3 d-flex flex-column p-2">
      <h1 className="text-center text-primary">Register</h1>
      <form onSubmit={() => navigateTo('/login')} className="form-group">
        <label className="text-primary">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
        ></input>
        <label className="text-primary mt-4">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="password"
        ></input>
        <button type="submit" className="btn btn-primary mt-4">
          Register
        </button>
      </form>
      <button
        onClick={() => navigateTo("/login")}
        className="btn btn-warning"
      >
        Login
      </button>
    </div>
  );
};
export default Register;

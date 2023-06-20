import React from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const Login = ({funcion}) => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    }

    const loggear = () => {
        funcion();
        navigateTo('/tasks')
    }

    return (
      <div className='container mt-3 d-flex flex-column p-2'>
      <h1 className='text-center text-primary'>Login</h1>
        <form onSubmit={loggear} className="form-group">
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
            Login
          </button>
        </form>
        <button onClick={() => navigateTo('/register')} className='btn btn-warning'>Register</button>
      </div>
    );
}

Login.propTypes = {
    funcion: PropTypes.func.isRequired,
}

export default Login;

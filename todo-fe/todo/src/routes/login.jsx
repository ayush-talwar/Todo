import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../store/userSlice";
import { ShowError } from "../components/errors.jsx";

const Login = () => {
  const [ credentials, setCredentials ] = useState({username:'', password:''});
  const [ error, setError ] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
      await dispatch(loginUser(credentials));
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError('Invalid username or password');
    }
  };

  return (
    <center>
    <div className="card login-card" style={{ width: "60%" }}>
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <form onSubmit={ handleSubmit }>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input 
              type="text" 
              className="form-control" 
              id="inputEmail3"
              name="username"
              value={credentials.username}
              onChange={handleChange}
               />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input 
              type="password" 
              className="form-control" 
              id="inputPassword3"
              name="password"
              value={credentials.password}
              onChange={handleChange}
               />
            </div>
          </div>
          {error && <ShowError errorMsg={error}/>}
          <div className="d-flex justify-content-center position-relative">
            <button type="submit" className="btn btn-primary">Sign in</button>
            <button type="button" onClick={() => navigate("/register")} className="btn btn-link position-absolute end-0">
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
    </center>
  );
};

export default Login;

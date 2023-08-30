import React, { useState } from 'react';
import './Login.css';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Email:', email);
    console.log('Password:', password);

    
    setLoginStatus('Login successful');
  };

  return (
    <div className="container-fluid"><br></br><br></br><br></br>
        <div class="form-body">
        <div className="card-1">
        <div className="row justify-content-center">
            <div className="col-md-7">
        <div className="card-body mt-5 ">
      <form onSubmit={handleSubmit}>
        <h1 class="text-center">Login</h1>
        <div className="form-group ">
          <label htmlFor="email" >
            Email
          </label>
          <input
            type="email"
            className="form-control w-55"
            id="email"
            value={email}
            placeholder="Enter your Email id"
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" >
            Password
          </label>
          <input
            type="password"
            className="form-control w-55"
            id="password"
            value={password}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div><br></br>
        <button  id="btn"type="submit" className="btn btn-primary w-75 py-6 ">
          Login
        </button><br></br>
        <div class= "form-group text-center">
        <a src="#" href="#" >Signup</a>



        <label  >Create an Account?</label></div>
      </form>
      <p>{loginStatus}</p>
      </div>
      </div>
      </div>
      </div>
    </div>
     </div>
  );
}

export default LoginForm;
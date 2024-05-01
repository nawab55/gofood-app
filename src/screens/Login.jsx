import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [credentials, setCredentials] = useState({email: "",password: ""});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
          const response = await axios.post("https://gofood-api-2t9c.onrender.com/api/loginuser", {
              email: credentials.email,
              password: credentials.password
          });
          console.log(response.data);

          if (!response.data.success) {
              alert('Enter valid Credentials');
          }
          if (response.data.success) {

            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken", response.data.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate('/');
          }
          

      }catch(error){
          console.error('Error:', error);
      }
  };

  const onChange = (e)=> {
      setCredentials({...credentials, [e.target.name]:e.target.value})
  }

  return (
    <>
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-secondary bg-gradient'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email' className='form-control' name='email'
            value={credentials.email} onChange={onChange} />
          </div>
          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' className='form-control' name='password'
            value={credentials.password} onChange={onChange} />
          </div>
          <div className='mb-2'>
            <input type="checkbox" className='custom-control custom-checkbox' id='check' />
            <label htmlFor="check" className='custom-input-label ms-2'>
              Remember me
            </label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign in</button>
          </div>
          <p className='text-end mt-2'>
            Forgot <Link>Password?</Link><Link to="/createuser" className='ms-2'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login;

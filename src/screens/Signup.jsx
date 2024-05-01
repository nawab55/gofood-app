import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",geolocation:""});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("https://gofood-api-2t9c.onrender.com/api/createuser", {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            });
            console.log(response.data);

            if (!response.data.success) {
                alert('Enter valid Credentials')
            }
            if (response.data.success) {
                navigate('/login');
            }

        }catch(error){
            console.error('Error:', error);
        }
        // const response = await fetch("http://localhost:5000/api/createuser", {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({name: credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation
        //     })
        // })
        // const result = await response.json();
        // console.log(result);

        // if(!result.success){
        //     alert('Enter valid Credentials')
        // }
    };

    const onChange = (e)=> {
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    return (
        <>
            <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-secondary bg-gradient'>
                <div className='form_container p-5 rounded bg-white'>
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-center'>Sign Up</h3>
                        <div className='mb-2'>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Enter Name' className='form-control' name='name' 
                            value={credentials.name} onChange={onChange} />
                        </div>
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
                            <label htmlFor="address">Address</label>
                            <input type="text" placeholder='Enter Location' className='form-control' name='geolocation'
                            value={credentials.geolocation} onChange={onChange} />
                        </div>
                        
                        <div className='d-grid'>
                            <button className='btn btn-primary'>Sign Up</button>
                        </div>
                        <p className='text-end mt-2'>
                            Already Registered <Link to="/login" className='ms-2'>Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;

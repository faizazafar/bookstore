import React, { useState } from 'react';
import axios from 'axios'

const Login= () => {

    const [email , setEmail]= useState('faiza@gmail.com')
    const [pass , setPassword]= useState('')

    const handleSubmit = (e)=>{

        e.preventDefault();
        console.log('in handle submit')
        console.log(email, pass)

        const data = { email , pass}
        console.log(data)
        const res = axios.post("http://localhost:5000/users/login" , data)
        // console.log(res)

    }
    return (
    <div className='container col-md-6 mx-auto mt-5'>
        <form onSubmit={handleSubmit}>
          
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} className="form-control" 
                onChange={(e)=>setEmail(e.target.value)}
                id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" 
                onChange={(e)=>setPassword(e.target.value)}

                className="form-control" id="exampleInputPassword1"/>
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>);
};

export default Login;
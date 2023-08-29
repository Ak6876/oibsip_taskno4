import React, { useState } from 'react'
import {  useNavigate,Link } from 'react-router-dom'
function Login({showalert}) {
    const [credentials,setCredentials] = useState({email:"",password:""})
    let naviage = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}), 
          });
          const json = await response.json()
          console.log(json)
          if (json.success){
            localStorage.setItem('token', json.authtoken)
            showalert('Logged in Successfully',"success")
            naviage('/Home')
        
          }
          else{
            showalert('Incorrect Email or Password',"danger")          }
    }
    const onchange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <>
            <div className="container-md border border-primary-subtle shadow p-4 mb-5 bg-body-dark text-white rounded-4 d-flex flex-column justify-content-center position-absolute top-50 start-50 translate-middle w-25 h-50">
                <blockquote className="blockquote text-center">
                    <h2>Welcome!</h2>
                </blockquote>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 ">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="email" value={credentials.email} onChange={onchange}  name='email' aria-describedby="emailHelp" placeholder='name@email.com' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onchange} id="password" name='password' placeholder='password' required/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign-in</button>
                </form>
                <div className='container mt-3 d-flex flex-row justify-content-center'> 
                    <p>Don't have an account? </p>
                    <Link className="link-underline-primary mx-1" to="/Register">Register</Link>
                </div>
            </div>
        </>
    )
}

export default Login

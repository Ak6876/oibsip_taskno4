import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Register = ({showalert}) => {
    const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
  let naviage = useNavigate()
  const handleSubmit = async(e)=>{
      e.preventDefault()
      const {name,email,password} = credentials
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,email,password}), 
        });
        const json = await response.json()
        console.log(json)
        if(json.success){
          //save the auth token and redirect
          localStorage.setItem('token', json.authtoken)
          showalert('Your Account Has Been Created Successfully',"success")
          naviage('/')
        }
        else{
          showalert('Incomplete details',"danger")
        }
        
  }
  const onchange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
}
  return (
    <>
      <div className="container-md border border-primary-subtle shadow p-4  mb-4 bg-body-dark text-white rounded-4 d-flex flex-column justify-content-center position-absolute top-50 start-50 translate-middle w-25 h-75">
                <blockquote className="blockquote text-center">
                    <h3>Create An Account</h3>
                </blockquote>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 ">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"  onChange={onchange}  name='name' aria-describedby="emailHelp" placeholder='Name' />
                    </div>
                    <div class="mb-3 ">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={onchange}  name='email' aria-describedby="emailHelp" placeholder='name@email.com' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control"  onChange={onchange} id="password" name='password' minLength={5} required placeholder='password' />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  onChange={onchange} id="cpassword" name='cpassword' minLength={5} required placeholder='confirm password'/>
                </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Sign-up</button>
                </form>
                <div className='container mt-3 d-flex flex-row justify-content-center'> 
                    <p>Have an account?</p>
                    <Link className="link-underline-primary mx-1" to="/">Sign-in</Link>
                </div>
            </div>
    </>
  )
}

export default Register

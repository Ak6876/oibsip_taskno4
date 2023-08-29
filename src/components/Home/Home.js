import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  let navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate("/")
  }
  return (
    <>
     <div className="container-md border border-primary bg-light mt-3 position-absolute d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle w-50 h-50">
        <blockquote className="blockquote text-center">
            <h3>You've Successfully Logged-In</h3>
        </blockquote>
        <button onClick={handleLogout} className="btn btn-primary  mt-3 w-50">Logout</button>
     </div> 
    </>
  )
}

export default Home

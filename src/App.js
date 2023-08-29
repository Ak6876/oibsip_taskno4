import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/sigin/Register"
import Login from "./components/login/Login"
import Home from "./components/Home/Home"
import Alert from "./components/Alert";
function App() {
  const [alert,setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(alert)
    }, 2000);
  }
  return (
    <>
    <Router>
        <Alert alert={alert}/>
        <div className="container-lg">
        <Routes>
        <Route exact path="/" element={ <Login showalert={showalert}/>}/>
        <Route exact path="/Home" element={ <Home/>}/>
        <Route exact path="/Register" element={ <Register showalert={showalert}/>}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

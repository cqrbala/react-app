import React, { useState } from "react";
import './App.css';
import { Login } from "./login";
import { Register } from "./register";
import { Profile } from "./Profile";
import { Followers } from "./followers";
import { Following } from "./following";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const login_status = localStorage.getItem('variable');
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={
          login_status === "true" ? <div className="App"><Profile></Profile></div> :
            currentForm === "login" ?
              <div className="App"><Login onFormSwitch={toggleForm}></Login></div>
              :
              < div className="App"><Register onFormSwitch={toggleForm} ></Register></div>
        }>
        </Route> */}
        <Route path="/" element={<div className="App">{
          currentForm === "login" ? <Login onFormSwitch={toggleForm}></Login> : <Register onFormSwitch={toggleForm} ></Register>
        }</div>}>
        </Route>
        <Route path="/profile" element={<div className="App"><Profile></Profile></div>}>
        </Route>
        <Route path="/followers" element={<div className="App"><Followers></Followers></div>}>
        </Route>
        <Route path="/following" element={<div className="App"><Following></Following></div>}>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

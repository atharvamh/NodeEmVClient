import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";
import SignupComponent from "./components/Signup/signup";
import LoginComponent from "./components/Login/login";
import HomeComponent from "./components/Home/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignupComponent />} />
        <Route path="/login" exact element={<LoginComponent />} />
        <Route path="/home" exact element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
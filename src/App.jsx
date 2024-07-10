import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import './App.css'
import { getUser, initData } from "./data-api/dataApi";


export default  function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/log-in" element={<LogIn/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/*" element={<ErrorPage/>} />
    </Routes>
    </>
  )
}


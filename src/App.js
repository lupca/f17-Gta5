import { ThemeProvider } from "@mui/material";
import Navbar from "layout/Navbar/Navbar";
import HomePage from "pages/HomePage";
import Payment from "pages/Payment";
import { Routes, Route } from "react-router-dom";
import { theme } from "themes";
import UserApi from './api/user.api'
import React, { useEffect } from 'react';
import "./App.scss";

function App() {
  // const [user, setUser] = useState([]);
  useEffect(() => {
    let mounted = true;
    const user = new UserApi()
    console.log(user.url)
    user.setParamsToUrl().searchBy({citizenId: '/GXC48104'})
    .then(data => {
      console.log(data)
    })
    
    return () => mounted = false;
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nap-coin" element={<Payment />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

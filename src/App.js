import Navbar from "layout/Navbar";
import HomePage from "pages/HomePage";
import Payment from "pages/Payment";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="nap-coin" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;

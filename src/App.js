import { ThemeProvider } from "@mui/material";
import HomePage from "pages/HomePage";
import Payment from "pages/Payment";
import { Routes, Route } from "react-router-dom";
import { theme } from "themes";
import "./App.scss";

function App() {
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

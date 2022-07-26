import HomePage from 'pages/HomePage';
import Payment from 'pages/Payment';
import {Routes, Route} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="nap-coin" element={<Payment />} />
    </Routes>
  );
}

export default App;

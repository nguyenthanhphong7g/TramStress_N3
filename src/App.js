import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/User/Home';
import FormSign from './pages/Login/FormSign';
import FormLogin from './pages/Login/FormLog';
import Home1 from './pages/User/home1'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signin" element={<FormSign/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

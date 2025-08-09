import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './layouts/UserLayout/UserLayout';
import FormSign from './pages/Login/FormSign';
import FormLogin from './pages/Login/FormLog';
import GuestLayout from './layouts/GuestLayout/GuestLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import ExpertLayout from './layouts/ExpertLayout/ExpertLayout';
import UserHome from './pages/User/UserHome';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/userlayout" element={<UserHome/>} />
        <Route path="/signin" element={<FormSign/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

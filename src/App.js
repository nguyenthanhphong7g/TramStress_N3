import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './layouts/UserLayout/UserLayout';
import FormSign from './pages/Login/FormSign';
import FormLogin from './pages/Login/FormLog';
import Calendar from './components/Common/Calendar/Calender';
import UserEmotion from './pages/User/UserEmotion';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang login, signup riêng layout */}
        <Route path="/" element={<FormLogin />} />
        <Route path="/signin" element={<FormSign />} />

        {/* Layout cố định cho user */}
        <Route path="/userlayout" element={<UserLayout />}>
          <Route path="login" element={<Calendar />} />
          <Route path="emotion" element={<UserEmotion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

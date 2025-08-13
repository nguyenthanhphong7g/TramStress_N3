import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/UserLayout/UserLayout";
import FormSign from "./pages/Login/FormSign";
import FormLogin from "./pages/Login/FormLog";
import Home from "./pages/User/Home";
import UserHome from "./pages/User/UserHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Các route không dùng layout */}
        <Route path="/" element={<FormLogin />} />
        <Route path="/signin" element={<FormSign />} />
        <Route path="/gocnhatky" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

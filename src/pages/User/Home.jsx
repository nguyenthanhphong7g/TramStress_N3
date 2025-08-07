import { Route, Routes} from 'react-router-dom';
import SidebarFormLayout from '../../components/Common/Sidebar/SidebarFormLayout';
import { FaHome, FaRobot, FaSmile } from 'react-icons/fa';
import FormSign from '../Login/FormSign';
import FormLogin from '../Login/FormLog';
import { FiSettings, FiBell, FiUser } from 'react-icons/fi';
import Header from '../../components/Common/Header/Header';
import { Outlet } from 'react-router-dom';

function Home() {
  const sidebarItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaSmile />, label: "Test cảm xúc", path: "/login" },
    { icon: <FaRobot />, label: "Chatbot AI", path: "/signin" },
    { icon: <FaRobot />, label: "Chatbot AI", path: "/signin" },
    // { icon: <FaLeaf />, label: "Thư giãn", path: "/relax" },
  ];

  const handleSettings = () => alert("Cài đặt");
  const handleNotification = () => alert("Thông báo");
  const handleProfile = () => alert("Hồ sơ");

  const actions = [
    { icon: <FiSettings />, label: 'Cài đặt', onClick: handleSettings },
    { icon: <FiBell />, label: 'Thông báo', onClick: handleNotification },
    { icon: <FiUser />, label: 'Tài khoản', onClick: handleProfile },
  ];


  return (
    <div>
      <Header
        brand={<span>Trạm Stress</span>}
        greeting="Hôm nay bạn thế nào?"
        actions={actions}
      />

      <div className="main-content">
        <SidebarFormLayout sidebarItems={sidebarItems}>
          <Routes>
            <Route path="/login" element={<FormLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<FormSign />} />
          </Routes>
        </SidebarFormLayout>
        <div className="page-content">
          <Outlet /> 
        </div>
      </div>



    </div>
  );
}

export default Home;

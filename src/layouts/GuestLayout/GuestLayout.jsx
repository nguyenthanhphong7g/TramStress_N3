import { Route, Routes } from 'react-router-dom';
import SidebarFormLayout from '../../components/Common/Sidebar/SidebarFormLayout';
import { FaHome, FaHeart, FaBook, FaUserFriends, FaPaw, FaSmile } from 'react-icons/fa';
import FormSign from '../../pages/Login/FormSign';
import FormLogin from '../../pages/Login/FormLog';
import { FiSettings, FiBell, FiUser } from 'react-icons/fi';
import Header from '../../components/Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';

function GuestLayout() {
  const sidebarItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaHeart />, label: "Test cảm xúc", path: "/#" },
    { icon: <FaUserFriends />, label: "Chatbot AI", path: "/#" },
    { icon: <FaPaw />, label: "Trải nghiệm thư giãn", path: "/#" },
  ];

  const actions = [
    { icon: <FiSettings className='icon' />, label: 'Cài đặt' },
    { icon: <FiBell className='icon' />, label: 'Thông báo' },
    { icon: <FiUser className='icon' />, label: 'Tài khoản' },
  ];
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Test cảm xúc', href: '/#' },
    { label: 'Chatbot AI', href: '/#' },
    { label: 'Trải nghiệm thư giãn', href: '/#' },
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
            <Route path="/home" element={<GuestLayout />} />
            <Route path="/signin" element={<FormSign />} />
          </Routes>
        </SidebarFormLayout>
        <div className="page-content">
          <Outlet />
        </div>
      </div>
      <Footer menuItems={menuItems} />




    </div>
  );
}

export default GuestLayout;

import { Route, Routes } from 'react-router-dom';
import SidebarFormLayout from '../../components/Common/Sidebar/SidebarFormLayout';
import { FaHome, FaHeart, FaBook, FaUserFriends, FaPaw, FaSmile, FaCalendar, FaStar } from 'react-icons/fa';
import FormSign from '../../pages/Login/FormSign';
import FormLogin from '../../pages/Login/FormLog';
import { FiSettings, FiBell, FiUser } from 'react-icons/fi';
import Header from '../../components/Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';

function ExpertLayout() {
  const sidebarItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaCalendar />, label: "Lịch tư vấn", path: "/#" },
    { icon: <FaBook />, label: "Xử lý lịch tư vấn", path: "/#" },
    { icon: <FaUserFriends />, label: "Tư vấn người dùng", path: "/#" },
    { icon: <FaStar />, label: "Phản hồi và đánh giá", path: "/#" },
  ];

  const actions = [
    { icon: <FiSettings className='icon' />, label: 'Cài đặt' },
    { icon: <FiBell className='icon' />, label: 'Thông báo' },
    { icon: <FiUser className='icon' />, label: 'Tài khoản' },
  ];
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Lịch tư vấn', href: '/#' },
    { label: 'Xử lý lịch tư vấn', href: '/#' },
    { label: 'Tư vấn người dùng', href: '/#' },
    { label: 'Phản hồi và đánh giá', href: '/#' },
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
            <Route path="/home" element={<ExpertLayout />} />
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

export default ExpertLayout;

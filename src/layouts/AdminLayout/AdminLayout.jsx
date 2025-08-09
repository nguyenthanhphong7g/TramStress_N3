import { Route, Routes } from 'react-router-dom';
import SidebarFormLayout from '../../components/Common/Sidebar/SidebarFormLayout';
import { FaHome, FaHeart, FaBook, FaUserFriends, FaPaw, FaSmile, FaUser, FaCalendar, FaChartBar } from 'react-icons/fa';
import FormSign from '../../pages/Login/FormSign';
import FormLogin from '../../pages/Login/FormLog';
import { FiSettings, FiBell, FiUser } from 'react-icons/fi';
import Header from '../../components/Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';

function AdminLayout() {
  const sidebarItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaHeart />, label: "Nội dung", path: "/#" },
    { icon: <FaUserFriends />, label: "Chuyên gia", path: "/#" },
    { icon: <FaUser />, label: "Người dùng", path: "/#" },
    { icon: <FaCalendar />, label: "Lịch tư vấn", path: "/#" },
    { icon: <FaChartBar />, label: "Thống kê", path: "/#" },
  ];

  const actions = [
    { icon: <FiSettings className='icon' />, label: 'Cài đặt' },
    { icon: <FiBell className='icon' />, label: 'Thông báo' },
    { icon: <FiUser className='icon' />, label: 'Tài khoản' },
  ];
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Nội dung', href: '/#' },
    { label: 'Chuyên gia', href: '/#' },
    { label: 'Người dùng', href: '/#' },
    { label: 'Lịch tư vấn', href: '/#' },
    { label: 'Thống kê', href: '/#' },
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
            <Route path="/home" element={<AdminLayout />} />
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

export default AdminLayout;

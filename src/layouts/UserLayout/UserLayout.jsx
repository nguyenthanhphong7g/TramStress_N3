import SidebarFormLayout from '../../components/Common/Sidebar/SidebarFormLayout';
import { FaHome, FaHeart, FaBook, FaUserFriends, FaPaw, FaSmile } from 'react-icons/fa';
import { FiSettings, FiBell, FiUser } from 'react-icons/fi';
import Header from '../../components/Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';
import '../layout.css'

function UserLayout() {
  const sidebarItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaHeart />, label: "Góc thư giãn", path: "/userlayout/relax" },
    { icon: <FaBook />, label: "Góc nhật ký", path: "/#" },
    { icon: <FaUserFriends />, label: "Góc tư vấn", path: "/#" },
    { icon: <FaPaw />, label: "Góc thú cưng", path: "/#" },
    { icon: <FaSmile />, label: "Góc cảm xúc", path: "/userlayout/emotion" },
  ];

  const actions = [
    { icon: <FiSettings className='icon' />, label: 'Cài đặt' },
    { icon: <FiBell className='icon' />, label: 'Thông báo' },
    { icon: <FiUser className='icon' />, label: 'Tài khoản' },
  ];
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Góc thư giãn', path: '/userlayout/relax' },
    { label: 'Góc nhật ký', path: '/#' },
    { label: 'Góc tư vấn', path: '/#' },
    { label: 'Góc thú cưng', path: '/#' },
    { label: 'Góc cảm xúc', path: '/userlayout/emotion' },
  ];
  return (
    <div>
      <Header
        brand={<span>Trạm Stress</span>}
        greeting="Hôm nay bạn thế nào?"
        actions={actions}
      />
      <div className="main-content">
        <SidebarFormLayout sidebarItems={sidebarItems} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
      <Footer menuItems={menuItems} />
    </div>
  );
}

export default UserLayout;

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  OrderedListOutlined,
  AreaChartOutlined,
  SettingOutlined,
  FileProtectOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { FaStore } from 'react-icons/fa';
import './AdminDashboard.css'; // CSS file for specific overrides

const { Sider, Content } = Layout;

const customStyles = {
  sider: {
    backgroundColor: 'black',
    minHeight: '100vh',
  },
  menuItem: {
    color: '#CDC2A5',
    backgroundColor: 'black',
  },
  menuItemSelected: {
    backgroundColor: 'black',
    color: '#CDC2A5',
  },
  logo: {
    color: '#CDC2A5',
    textAlign: 'center',
    padding: '16px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px',
  },
  submenuTitle: {
    color: '#CDC2A5',
  },
  submenuItem: {
    color: '#CDC2A5',
  },
  icon: {
    color: '#CDC2A5',
  },
  content: {
    padding: '24px',
    backgroundColor: '#EAE4DD',
    minHeight: 'calc(100vh - 64px)', // Ensure full page height for content
  },
};

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return <h1 className="text-[#CDC2A5]">Welcome to the Admin Dashboard</h1>;
      case 'orders':
        return <h1 className="text-[#CDC2A5]">Orders Page</h1>;
      case 'products':
        return <h1 className="text-[#CDC2A5]">Products Page</h1>;
      case 'reports':
        return <h1 className="text-[#CDC2A5]">Reports Page</h1>;
      case 'settings':
        return <h1 className="text-[#CDC2A5]">Settings Page</h1>;
      default:
        return <h1 className="text-[#CDC2A5]">Welcome to the Admin Dashboard</h1>;
    }
  };

  return (
    <Layout style={customStyles.sider}>
      <Sider
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)} // Expand on hover
        onMouseLeave={() => setCollapsed(true)} // Collapse when not hovered
        style={customStyles.sider}
      >
        <div style={customStyles.logo}>
          <FaStore />
        </div>
        <Menu
          mode="inline"
          selectedKeys={[activePage]}
          style={customStyles.menuItem}
        >
          <Menu.Item
            key="home"
            icon={<HomeOutlined style={customStyles.icon} />} 
            onClick={() => handleMenuClick('home')}
            style={activePage === 'home' ? customStyles.menuItemSelected : customStyles.menuItem}
          >
            Home
          </Menu.Item>

          <Menu.Item
            key="orders"
            icon={<OrderedListOutlined style={customStyles.icon} />} 
            onClick={() => handleMenuClick('orders')}
            style={activePage === 'orders' ? customStyles.menuItemSelected : customStyles.menuItem}
          >
            Orders
          </Menu.Item>

          <Menu.SubMenu
            key="products"
            icon={<FileProtectOutlined style={customStyles.icon} />} 
            title={<span style={customStyles.submenuTitle}>Products</span>}
            style={customStyles.menuItem}
          >
            <Menu.Item
              key="addProduct"
              icon={<FileProtectOutlined style={customStyles.icon} />} 
              onClick={() => handleMenuClick('products')}
              style={customStyles.submenuItem}
            >
              Add Product
            </Menu.Item>
            <Menu.Item
              key="manageProducts"
              icon={<FileProtectOutlined style={customStyles.icon} />} 
              onClick={() => handleMenuClick('products')}
              style={customStyles.submenuItem}
            >
              Manage Products
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item
            key="reports"
            icon={<AreaChartOutlined style={customStyles.icon} />} 
            onClick={() => handleMenuClick('reports')}
            style={activePage === 'reports' ? customStyles.menuItemSelected : customStyles.menuItem}
          >
            Reports
          </Menu.Item>

          <Menu.Item
            key="settings"
            icon={<SettingOutlined style={customStyles.icon} />} 
            onClick={() => handleMenuClick('settings')}
            style={activePage === 'settings' ? customStyles.menuItemSelected : customStyles.menuItem}
          >
            Settings
          </Menu.Item>

          <Menu.Item
            key="logout"
            icon={<LogoutOutlined style={{ color: 'red' }} />}
            onClick={handleLogout}
            style={{ ...customStyles.menuItem, color: 'red', marginTop: 'auto' }}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content style={customStyles.content}>
          {renderPageContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;

import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, OrderedListOutlined, AreaChartOutlined, SettingOutlined, FileProtectOutlined,LogoutOutlined } from '@ant-design/icons';
import { FaStore } from 'react-icons/fa';

const { Sider, Content } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log("Logged out");
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return <h1 style={{ color: '#CDC2A5' }}>Welcome to the Admin Dashboard</h1>;
      case 'orders':
        return <h1 style={{ color: '#CDC2A5' }}>Orders Page</h1>;
      case 'products':
        return <h1 style={{ color: '#CDC2A5' }}>Products Page</h1>;
      case 'reports':
        return <h1 style={{ color: '#CDC2A5' }}>Reports Page</h1>;
      case 'settings':
        return <h1 style={{ color: '#CDC2A5' }}>Settings Page</h1>;
      default:
        return <h1 style={{ color: '#CDC2A5' }}>Welcome to the Admin Dashboard</h1>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <Sider
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)} // Expand on hover
        onMouseLeave={() => setCollapsed(true)} // Collapse when not hovered
        style={{ backgroundColor: 'black' }}
      >
        <div className="logo" style={{ color: '#CDC2A5', marginLeft: '12px', textAlign: 'center', padding: '16px', fontSize: '24px', fontWeight: 'bold' }}>
          <FaStore />
        </div>
        <Menu theme="dark" mode="inline" style={{ backgroundColor: 'black', color: '#CDC2A5' }}>
          <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => handleMenuClick('home')}>
            Home
          </Menu.Item>
          <Menu.Item key="orders" icon={<OrderedListOutlined />} onClick={() => handleMenuClick('orders')}>
            Orders
          </Menu.Item>
          <Menu.SubMenu key="products" icon={<FileProtectOutlined />} title="Products">
            <Menu.Item key="addProduct" onClick={() => handleMenuClick('products')}>Add Product</Menu.Item>
            <Menu.Item key="manageProducts" onClick={() => handleMenuClick('products')}>Manage Products</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="reports" icon={<AreaChartOutlined />} onClick={() => handleMenuClick('reports')}>
            Reports
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />} onClick={() => handleMenuClick('settings')}>
            Settings
          </Menu.Item>
       < Menu.Item key="logout" icon={<LogoutOutlined />} onClick={() => handleLogout('logout')}/>
            {/* // style={{ width: '90%', marginLeft: '5%', backgroundColor: '#FF4D4F', borderColor: '#FF4D4F' }}  */}
            Logout
        <Menu.Item/>
        </Menu>
        {/* Logout Button */}
       
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', backgroundColor: '#EAE4DD' }}>
          {renderPageContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;

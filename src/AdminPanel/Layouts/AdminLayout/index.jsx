import React from 'react';
import AdminDashboard from '../../Components/Header/index';

const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <AdminDashboard />
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;

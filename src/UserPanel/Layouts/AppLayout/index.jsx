import React from 'react';
import Header from '../../Components/Header/index'; 

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAE4DD' }}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;

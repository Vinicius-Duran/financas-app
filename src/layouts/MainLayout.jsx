import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      width: '100%',
      backgroundColor: 'var(--background-color)',
    }}>
      <Navbar />
      <main style={{
        flex: 1,
        padding: '20px',
        marginTop: 'var(--navbar-height)',
        backgroundColor: 'var(--background-color)',
        minHeight: `calc(100vh - var(--navbar-height))`,
        width: '100%',
        maxWidth: '100%',
        margin: 'var(--navbar-height) 0 0 0',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px',
        }}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 
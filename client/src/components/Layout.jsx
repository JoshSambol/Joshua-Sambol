import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Background from './Background';
import Nav from './Nav';
import Footer from './Footer';

// Scrolls to top whenever the route changes.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
};

const Layout = () => (
  <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
    <Background />
    <ScrollToTop />
    <Nav />
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;

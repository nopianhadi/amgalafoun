
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Faq from './pages/Faq';
import Guide from './pages/Guide';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/Admin';
import Pengumuman from './pages/Pengumuman';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="bg-surface text-primary-text font-sans min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/benefit" element={<Benefits />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/panduan" element={<Guide />} />
          <Route path="/media" element={<Media />} />
          <Route path="/hubungi" element={<Contact />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

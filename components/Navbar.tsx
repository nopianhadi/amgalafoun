
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = () => {
            const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
            setIsLoggedIn(loggedInStatus);
        };
        checkLoginStatus();
        window.addEventListener('storage', checkLoginStatus); // Sync across tabs
        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        setIsMenuOpen(false);
        navigate('/');
    };


    return (
        <header className="sticky top-0 z-50 navbar-solid border-b border-outline">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                         <Link to="/" className="text-2xl font-semibold text-primary-text flex items-center gap-2 tracking-tight transition-all duration-300 hover:scale-[1.02]">
                           <div className="w-8 h-8 bg-gradient-to-br from-primary-navy to-secondary-navy rounded-lg flex items-center justify-center">
                             <span className="text-white font-bold text-sm">AF</span>
                           </div>
                           <span 
                             className="text-gradient"
                             style={{
                               background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                               WebkitBackgroundClip: 'text',
                               WebkitTextFillColor: 'transparent',
                               backgroundClip: 'text'
                             }}
                           >
                             Amgala Foundation
                           </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:items-center md:space-x-2">
                        <ul className="flex items-center space-x-2 text-sm font-medium text-secondary-text">
                           {NAV_LINKS.map((item) => (
                                <li key={item.name}>
                                    <NavLink 
                                        to={item.path} 
                                        className={({ isActive }) => 
                                            `px-4 py-2 rounded-google transition-all duration-200 hover:bg-surface-container ${isActive ? 'text-primary-navy bg-surface-container' : 'hover:text-primary-text'}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                           ))}
                        </ul>
                    </nav>

                     <div className="hidden md:flex items-center space-x-3">
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-3">
                                <Link to="/admin" className="px-4 py-2 text-sm font-medium text-secondary-text hover:text-primary-text hover:bg-surface-container rounded-google transition-all duration-200">
                                    Dashboard
                                </Link>
                                <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-white bg-accent-red hover:bg-red-600 rounded-google-2xl transition-all duration-200">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link to="/login" className="px-4 py-2 text-sm font-medium text-secondary-text hover:text-primary-text hover:bg-surface-container rounded-google transition-all duration-200">
                                    Login
                                </Link>
                                <Link to="/hubungi" className="btn-primary">
                                    Contact Us
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-secondary-text hover:text-primary-navy">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                 <div className="md:hidden bg-white border-t border-outline">
                    <ul className="px-6 py-4 space-y-2 text-sm font-medium text-secondary-text">
                        {NAV_LINKS.map((item) => (
                            <li key={item.name}>
                                <NavLink 
                                    to={item.path} 
                                    className={({ isActive }) => 
                                        `block px-4 py-3 rounded-google transition-all duration-200 ${isActive ? 'text-primary-navy bg-surface-container' : 'text-secondary-text hover:bg-surface-container hover:text-primary-text'}`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                         {isLoggedIn && (
                            <li>
                                <NavLink 
                                    to="/admin" 
                                    className={({ isActive }) => `block px-4 py-3 rounded-google transition-all duration-200 ${isActive ? 'text-primary-navy bg-surface-container' : 'text-secondary-text hover:bg-surface-container hover:text-primary-text'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        )}
                    </ul>
                     <div className="px-6 pb-6">
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="w-full text-center bg-accent-red text-white font-medium py-3 px-6 rounded-google-2xl hover:bg-red-600 transition-all duration-200">
                                Logout
                            </button>
                        ) : (
                            <div className="space-y-3">
                                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center btn-secondary block">
                                    Login
                                </Link>
                                <Link to="/hubungi" onClick={() => setIsMenuOpen(false)} className="w-full text-center btn-primary block">
                                    Contact Us
                                </Link>
                            </div>
                        )}
                    </div>
                 </div>
            )}
        </header>
    );
};

export default Navbar;

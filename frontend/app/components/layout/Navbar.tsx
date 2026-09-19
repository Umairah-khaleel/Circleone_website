'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// 1. IMPORTING ALL MODAL COMPONENTS 
import SignupModal from '@/app/components/auth/SignupModal';
import LoginModal from '@/app/components/auth/LoginModal';
import LogoutModal from '@/app/components/auth/LogoutModal'; 

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // State to track logged-in user session
  const [user, setUser] = useState<any>(null);

  // States for Auth Modals
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  
  // State for Logout Confirmation Modal
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('circleOneUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Execute actual logout logic after confirmation
  const confirmLogout = () => {
    localStorage.removeItem('circleOneUser');
    setUser(null);
    setIsLogoutModalOpen(false);
    router.push('/'); // Redirect to home page
    window.location.reload(); // Refresh to update navbar state cleanly
  };
  
  // Custom check: Highlights to check if we are on any sub-page
  const isActive = (path: string) => {
    if (path === '/products') {
      return pathname === '/products' || pathname.startsWith('/products/');
    }
    return pathname === path;
  };

  // State to manage mobile menu open/close toggle
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu items list
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Deals', href: '/deals' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        {/* Main 3-column layout grid */}
        <div className="max-w-7xl mx-auto w-full py-4 px-6 grid grid-cols-3 items-center">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FF6600] flex items-center text-white justify-center font-bold">C</div>
              <span className="font-extrabold text-xl text-gray-900 tracking-tight">Circle One</span>
            </Link>
          </div>

          {/* Center Column: Dynamic Navigation Links with Active Indicator */}
          <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-gray-600">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <div key={link.href} className="relative py-1">
                  <Link
                    href={link.href}
                    className={`transition ${
                      active ? 'text-[#FF6600] font-semibold' : 'hover:text-[#FF6600]'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {active && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6600] rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Column: Authentication, Action Buttons & Mobile Hamburger Icon */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 lg:gap-4">
            
            {/* Conditional Rendering based on Auth State */}
            {user ? (
              <button
                onClick={() => setIsLogoutModalOpen(true)}
                className="bg-orange-50 hover:bg-orange-100 text-[#FF6600] text-sm font-semibold px-4 py-2 rounded-full transition hidden sm:inline-block cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="text-sm font-semibold text-gray-700 hover:text-[#FF6600] transition hidden sm:inline-block cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="bg-orange-50 hover:bg-orange-100 text-[#FF6600] text-sm font-semibold px-4 py-2 rounded-full transition hidden sm:inline-block cursor-pointer"
                >
                  Sign Up
                </button>
              </>
            )}
            
            {/* "Get in Touch" button */}
            <Link href="/contact" className="bg-[#FF6600] hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full shadow-sm transition inline-block">
              Get in Touch
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg text-gray-700 hover:text-[#FF6600] hover:bg-orange-50 transition focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 shadow-lg">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium transition ${
                    active ? 'text-[#FF6600] font-semibold pl-2 border-l-4 border-[#FF6600]' : 'text-gray-700 hover:text-[#FF6600]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Auth Links section */}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2 sm:hidden">
              {user ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsLogoutModalOpen(true);
                  }}
                  className="text-center bg-orange-50 text-[#FF6600] text-sm font-semibold py-2 rounded-full cursor-pointer"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button 
                    onClick={() => { setIsOpen(false); setIsLoginOpen(true); }} 
                    className="text-center py-2 text-sm font-semibold text-gray-700 hover:text-[#FF6600] cursor-pointer"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => { setIsOpen(false); setIsSignupOpen(true); }} 
                    className="text-center bg-orange-50 text-[#FF6600] text-sm font-semibold py-2 rounded-full cursor-pointer"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* RENDER LOGIN MODAL */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
      />

      {/* RENDER SIGNUP MODAL */}
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupOpen(false);
          setIsLoginOpen(true);
        }}
      />

      {/* RENDER THE LOGOUT MODAL */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={confirmLogout}
      />
    </>
  );
}
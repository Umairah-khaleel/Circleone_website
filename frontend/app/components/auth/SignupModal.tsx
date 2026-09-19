'use client';

import { useState } from 'react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Password visibility toggle state
  const [showPassword, setShowPassword] = useState(false);

  // UI feedback states
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // If modal is not open, render nothing
  if (!isOpen) return null;

  // Handle form submission and backend communication
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Signup failed');
        setLoading(false);
        return;
      }

      // Success state and automatic redirect to login modal
      setSuccess('Signup successful! Now you can login. Redirecting...');
      setTimeout(() => {
        setLoading(false);
        onSwitchToLogin(); 
      }, 2000);

    } catch (err) {
      console.error(err);
      setError('Server connection failed. Is your backend running?');
      setLoading(false);
    }
  };

  return (
    // Backdrop overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative border border-gray-100">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          ✕
        </button>

        {/* Modal Title header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Sign<span className="text-[#FF6600]">Up</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">Create your secure Circle One account</p>
        </div>

        {/* Error and Success Alert Messages */}
        {error && <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl text-center">{error}</div>}
        {success && <div className="mb-4 p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-xl text-center">{success}</div>}

        {/* Main Signup Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          
          {/* Full Name Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name (max 150 chars)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={150}
              required
              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
            />
          </div>

          {/* Password Input with Show/Hide Eye Toggle */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 pr-10 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
              />
              
              {/* Eye Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  /* Eye Open Icon */
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  /* Eye Closed Icon */
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-[11px] text-gray-400 mt-1">At least 6 chars, 1 uppercase letter, and 1 number.</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#FF6600] hover:bg-[#E65C00] text-white font-semibold py-3 rounded-xl shadow-md transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* Switch to Login Footer Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="font-semibold text-[#FF6600] hover:underline cursor-pointer">
            Login
          </button>
        </div>

      </div>
    </div>
  );
}
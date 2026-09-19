'use client';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden p-6 text-center border border-gray-100 relative">
        
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-orange-50 text-[#FF6600] flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>

        {/* Modal Title & Subtext */}
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">Log out of Circle One?</h3>
        <p className="text-sm text-gray-500 mb-6">
          You will need to log back in to access your account dashboard and details.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl transition cursor-pointer"
          >
            Cancel
          </button>
          
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 bg-[#FF6600] hover:bg-[#E65C00] text-white text-sm font-semibold py-2.5 rounded-xl transition shadow-sm cursor-pointer"
          >
            Yes, Logout
          </button>
        </div>

      </div>
    </div>
  );
}
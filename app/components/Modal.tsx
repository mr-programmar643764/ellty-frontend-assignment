'use client';

import { memo, useEffect, useCallback } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal = memo(function Modal({ isOpen, onClose, title, message }: ModalProps) {
  // Close modal on ESC key press
  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscKey]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-[8px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] w-[400px] max-w-[90%] p-[24px] animate-modal-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-[16px]">
          <h3 className="text-[18px] font-semibold text-[#1F2937]">{title}</h3>
          <button
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#1F2937] transition-colors w-[24px] h-[24px] flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        {/* Message */}
        <p className="text-[14px] text-[#4B5563] mb-[24px] leading-[1.6]">
          {message}
        </p>
        
        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#FFCE22] hover:bg-[#FFD84D] active:bg-[#E6B800] text-[#000000] px-[20px] py-[10px] rounded-[4px] font-medium text-[14px] transition-all duration-200"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
});

export default Modal;

'use client';

import { memo } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = memo(function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[340px] h-[40px] bg-[#FFCE22] rounded-[4px] px-[20px] py-[10px] text-center font-medium text-[14px] text-[#000000] transition-all duration-200 hover:bg-[#FFD84D] hover:shadow-sm active:bg-[#E6B800] ${className}`}
    >
      {children}
    </button>
  );
});

export default Button;

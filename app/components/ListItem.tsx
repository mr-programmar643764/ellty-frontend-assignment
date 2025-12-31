'use client';

import { useState, memo, useCallback } from 'react';

interface ListItemProps {
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  isHeader?: boolean;
}

const ListItem = memo(function ListItem({ label, defaultChecked = false, onChange, isHeader = false }: ListItemProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = useCallback(() => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  }, [checked, onChange]);

  return (
    <div className={`w-full min-h-[42px] flex items-center justify-between pl-[22px] pr-[15px] py-[8px] hover:bg-[#F9F9F9] transition-colors ${isHeader ? 'border-b border-[#EEEEEE]' : ''}`}>
      <span className="text-[14px] text-[#333333] font-normal">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="sr-only peer"
        />
        <div className="w-[20px] h-[20px] bg-white border-[1.5px] border-[#D1D5DB] rounded-[3px] peer-checked:bg-[#4A90E2] peer-checked:border-[#4A90E2] flex items-center justify-center transition-all hover:border-[#A0A0A0]">
          {checked && (
            <svg
              className="w-[12px] h-[12px] text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </label>
    </div>
  );
});

export default ListItem;

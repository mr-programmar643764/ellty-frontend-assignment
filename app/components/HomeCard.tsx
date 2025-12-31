'use client';

import { useState, useCallback, memo } from 'react';
import Button from './Button';
import ListItem from './ListItem';
import Modal from './Modal';

export default function HomeCard() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    'All pages header': false,
    'All pages': false,
    'Page 1': false,
    'Page 2': false,
    'Page 3': true,
    'Page 4': true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemChange = useCallback((label: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [label]: checked }));
  }, []);

  const handleDone = useCallback(() => {
    const selectedPages = Object.entries(checkedItems)
      .filter(([_, checked]) => checked)
      .map(([label, _]) => label);
    
    console.log('Done clicked', checkedItems);
    console.log('Selected pages:', selectedPages);
    setIsModalOpen(true);
  }, [checkedItems]);

  const getSelectedPagesMessage = useCallback(() => {
    const selectedPages = Object.entries(checkedItems)
      .filter(([_, checked]) => checked)
      .map(([label, _]) => label);
    
    if (selectedPages.length === 0) {
      return 'No pages selected.';
    }
    
    return `You have selected: ${selectedPages.join(', ')}`;
  }, [checkedItems]);

  return (
    <>
      <div className="w-[370px] bg-white rounded-[6px] border border-[#EEEEEE] shadow-[0_8px_15px_0_rgba(20,20,20,0.12)] overflow-hidden">
        {/* List Items - First item serves as header */}
        <div className="flex flex-col">
          <ListItem
            label="All pages"
            defaultChecked={false}
            onChange={(checked) => handleItemChange('All pages header', checked)}
            isHeader={true}
          />
          <ListItem
            label="All pages"
            defaultChecked={false}
            onChange={(checked) => handleItemChange('All pages', checked)}
          />
          <ListItem
            label="Page 1"
            defaultChecked={false}
            onChange={(checked) => handleItemChange('Page 1', checked)}
          />
          <ListItem
            label="Page 2"
            defaultChecked={false}
            onChange={(checked) => handleItemChange('Page 2', checked)}
          />
          <ListItem
            label="Page 3"
            defaultChecked={true}
            onChange={(checked) => handleItemChange('Page 3', checked)}
          />
          <ListItem
            label="Page 4"
            defaultChecked={true}
            onChange={(checked) => handleItemChange('Page 4', checked)}
          />
        </div>

        {/* Button Container */}
        <div className="flex justify-center pt-[10px] pb-[10px] px-[15px]">
          <Button onClick={handleDone}>Done</Button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Success!"
        message={getSelectedPagesMessage()}
      />
    </>
  );
}

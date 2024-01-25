import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export const MobileMenu = ({ items, onHouseSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setIsOpen(false);
    onHouseSelected(item.house);
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <FaBars onClick={() => setIsOpen(!isOpen)} />
      <div className="mobile-menu-items">
        {items.map((item, index) => (
          <button className="mobile-menu-item" key={index} onClick={() => handleItemClick(item)}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
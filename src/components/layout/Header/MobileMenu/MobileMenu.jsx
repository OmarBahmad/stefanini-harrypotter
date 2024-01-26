import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../../../sass/components/button.scss";
import "../../../../sass/components/menu.scss";

export const MobileMenu = ({ items, onHouseSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setIsOpen(false);
    onHouseSelected(item.house);
  };

  return (
    <div className={`mobile-menu-container `}>
      <FaBars size={35} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
      <div
        className={`mobile-menu-container__items ${isOpen ? "open" : ""}`}
        onBlur={() => setIsOpen(false)}
        tabIndex="0"
      >
        {items.map((item, index) => (
          <button
            className={`mobile-menu-item button button--${item.style}`}
            key={index}
            onClick={() => handleItemClick(item)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

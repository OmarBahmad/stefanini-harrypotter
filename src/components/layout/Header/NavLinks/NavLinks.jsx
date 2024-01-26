import "../../../../sass/components/button.scss";
import "../../../../sass/components/navlinks.scss";


export const NavLinks = ({ items, onHouseSelected }) => {
  return (
    <div className="nav-link-container">
      {items.map((item, index) => (
        <button
          href={item.link}
          className={`nav-link button button--${item.style}`}
          key={index}
          onClick={() => onHouseSelected(item.house)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export const NavLinks = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <button href={item.link} className="nav-link" key={index}>
          {item.label}
        </button>
      ))}
    </>
  );
};
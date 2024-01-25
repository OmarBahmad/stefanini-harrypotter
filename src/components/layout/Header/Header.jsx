import { useMediaQuery } from 'react-responsive';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { NavLinks } from './NavLinks/NavLinks';

export const Header = ({ onHouseSelected, onStudentsSelected, onStaffSelected }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const menuItems = [
    { label: 'Grifinória', house: 'gryffindor' },
    { label: 'Sonserina', house: 'slytherin' },
    { label: 'Corvinal', house: 'ravenclaw' },
    { label: 'Lufa-Lufa', house: 'hufflepuff' },
    { label: 'Hogwarts', house: '' },
  ];

  return (
    <header className="app-header">
      {isMobile ? (
        <MobileMenu items={menuItems} onHouseSelected={onHouseSelected} />
      ) : (
        <nav className={``}>
          <NavLinks
            items={menuItems}
            onHouseSelected={onHouseSelected}
            onStudentsSelected={onStudentsSelected}
            onStaffSelected={onStaffSelected}
          />
        </nav>
      )}

      <div className="search-bar">
        <input type="text" placeholder="Pesquisar..." />
        <button>Buscar</button>
      </div>
    </header>
  );
};

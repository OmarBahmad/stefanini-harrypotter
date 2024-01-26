import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { NavLinks } from "./NavLinks/NavLinks";
import { Search } from "./Search/Search";
import "../../../sass/layout/Header.scss";

export const Header = ({ onHouseSelected, initialValue, onSearch }) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const menuItems = [
    { label: "Grifinória", house: "gryffindor", style: "primary" },
    { label: "Sonserina", house: "slytherin", style: "secondary" },
    { label: "Corvinal", house: "ravenclaw", style: "tertiary" },
    { label: "Lufa-Lufa", house: "hufflepuff", style: "quaternary" },
    { label: "Hogwarts", house: "", style: "principal" },
  ];

  return (
    <header className="header">
      <div className="container">
        {isMobile ? (
          <div className="mobile-menu">
            <MobileMenu items={menuItems} onHouseSelected={onHouseSelected} />
            <div className="header__logo">
              <img
                src="/assets/logohpt.png"
                alt="harry-potter-logo"
              />
            </div>
            <Search initialValue={initialValue} onSearch={onSearch} />
          </div>
        ) : (
          <>
            <a className="header__logo" href="/">
              <img
                src="/assets/logohpt.png"
                alt="harry-potter-logo"
              />
            </a>
            <nav className={"nav-link-container"}>
              <NavLinks items={menuItems} onHouseSelected={onHouseSelected} />
            </nav>
            <Search initialValue={initialValue} onSearch={onSearch} />
          </>
        )}
      </div>
    </header>
  );
};

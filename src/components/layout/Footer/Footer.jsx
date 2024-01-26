import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../../sass/layout/Footer.scss";

export const Footer = () => {
  return (
    <footer className={"footer"}>
      <FaFacebook className={"footer__icon"} />
      <FaTwitter className={"footer__icon"} />
      <FaInstagram className={"footer__icon"} />
    </footer>
  );
};

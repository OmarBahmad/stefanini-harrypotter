import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import "../../../sass/layout/Footer.scss";

export const Footer = () => {
  return (
    <footer className={"footer"}>
      <a
        href="https://www.linkedin.com/in/omarbahmad/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className={"footer__icon"} size={30} />
      </a>
      <a href="https://github.com/OmarBahmad" target="_blank" rel="noreferrer">
        <FaGithub className={"footer__icon"} size={30} />
      </a>
      <a
        href="https://whatsa.me/5562996422859"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className={"footer__icon"} size={30} />
      </a>
    </footer>
  );
};

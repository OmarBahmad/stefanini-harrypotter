import "../../../../sass/components/button.scss";

export const HomeButton = ({ label, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

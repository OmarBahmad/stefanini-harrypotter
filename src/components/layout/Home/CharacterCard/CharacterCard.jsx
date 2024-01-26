import { useState } from "react";
import '../../../../sass/components/card.scss';

export const CharacterCard = ({ character, handleFlip, isFlipped }) => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleClick = () => {
    setIsCardFlipped(!isCardFlipped);
    handleFlip(character.id);
  };

  return (
    <div
      className={`col-4 flip-card ${isFlipped(character.id) ? "do-flip" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="card__image"
            src={character.image ? character.image : ""}
            alt={character.name}
          ></img>
          <div className="card__content">
            <div className="card__title">{character.name}</div>
            {/* Adicione aqui qualquer conteúdo adicional desejado */}
          </div>
        </div>
        <div className="flip-card-back">
          <div className="details">
            <span>Nascimento: {character.dateOfBirth}</span>
            <span>Ator Vivo: {character.alive}</span>
            <span>Casa: {character.house}</span>
            <span>Patrono: {character.patronus}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

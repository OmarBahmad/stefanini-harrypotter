import { useState } from "react";
import "../../../../sass/components/card.scss";

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
            src={
              character.image
                ? character.image
                : "/assets/images/unknownport.jpg"
            }
            alt={character.name}
          ></img>
          <div className="card__content">
            <div className="card__content__title">{character.name}</div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="details">
            <span className="details__title">{character.name}</span>
            <span>
              Nascimento:{" "}
              {character.dateOfBirth ? character.dateOfBirth : "Desconhecido"}
            </span>
            <span>Ator Vivo: {character.alive ? "Sim" : "Não"}</span>
            <span>
              Casa: {character.house ? character.house : "Desconhecido"}
            </span>
            <span>
              Patrono:{" "}
              {character.patronus ? character.patronus : "Desconhecido"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import { useCharacters } from "../../../services/useCharacters";
import { useHouseCharacters } from "../../../services/useHouseCharacters";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import "../../../sass/pages/Home.scss";
import { HomeButton } from "../../layout/Home/HomeButton/HomeButton";
import { CharacterCard } from "../../layout/Home/CharacterCard/CharacterCard";

export const MainPage = () => {
  const {
    data: allCharactersData,
    isLoading: isAllCharactersFetching,
    isError,
    error,
  } = useCharacters();
  const [mainData, setMainData] = useState(null);
  const [house, setHouse] = useState(null);
  const [flippedIds, setFlippedIds] = useState([]);
  const [search, setSearch] = useState("");

  const {
    data: houseCharactersData,
    isLoading: isHouseCharactersFetching,
    isError: isHouseCharactersError,
    error: houseCharactersError,
  } = useHouseCharacters(house);

  useEffect(() => {
    if (house && house !== "") {
      setMainData(houseCharactersData);
    } else {
      setMainData(allCharactersData);
    }
  }, [house, allCharactersData, houseCharactersData]);

  const handleHouseSelected = (newHouse) => {
    setHouse(newHouse);
  };

  const handleFlip = (id) => {
    if (flippedIds.includes(id)) {
      setFlippedIds(flippedIds.filter((fid) => fid !== id));
    } else {
      setFlippedIds([...flippedIds, id]);
    }
  };

  const isFlipped = (id) => {
    return flippedIds.includes(id);
  };

  const filterData = (data, query) => {
    if (!query) {
      return data;
    }

    return data.filter((item) => {
      // Converte o nome do personagem e a busca para letras minúsculas
      const name = item.name.toLowerCase();
      const search = query.toLowerCase();

      // Retorna verdadeiro se o nome contém a busca
      return name.includes(search);
    });
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="home-container">
      <Header
        onHouseSelected={handleHouseSelected}
        initialValue={search}
        onSearch={handleSearch}
      />
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="home-page__title">Main Page</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {(isAllCharactersFetching || isHouseCharactersFetching) && (
                <h1 className="home-page__subtitle">Carregando...</h1>
              )}
              {(isError || isHouseCharactersError) && (
                <h1 className="home-page__subtitle">
                  Erro: {(error || houseCharactersError).message}
                </h1>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="home-page__button">
                <HomeButton
                  label="Hogwarts"
                  onClick={() => handleHouseSelected(null)}
                  className="button--principal"
                />
                <HomeButton
                  label="Grifinória"
                  onClick={() => handleHouseSelected("gryffindor")}
                  className="button--primary"
                />
                <HomeButton
                  label="Sonserina"
                  onClick={() => handleHouseSelected("slytherin")}
                  className="button--secondary "
                />
                <HomeButton
                  label="Corvinal"
                  onClick={() => handleHouseSelected("ravenclaw")}
                  className="button--tertiary"
                />
                <HomeButton
                  label="Lufa-Lufa"
                  onClick={() => handleHouseSelected("hufflepuff")}
                  className="button--quaternary "
                />
              </div>
            </div>
          </div>
          <div className="row">
          {mainData &&
            filterData(mainData, search).map((item) => (
              <CharacterCard
                key={item.id}
                character={item}
                handleFlip={handleFlip}
                isFlipped={isFlipped}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

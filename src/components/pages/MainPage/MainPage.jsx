import { useState, useEffect } from "react";
import { useCharacters } from "../../../services/useCharacters";
import { useHouseCharacters } from "../../../services/useHouseCharacters";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import { HomeButton } from "../../layout/Home/HomeButton/HomeButton";
import { CharacterCard } from "../../layout/Home/CharacterCard/CharacterCard";
import { Loader } from "../../layout/Home/Loader/Loader";
import "../../../sass/pages/Home.scss";

export const MainPage = () => {
  const [mainData, setMainData] = useState(null);
  const [house, setHouse] = useState(null);
  const [flippedIds, setFlippedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [isHouseSelected, setIsHouseSelected] = useState(false);

  const {
    data: allCharactersData,
    isLoading: isAllCharactersFetching,
    isError,
    error,
  } = useCharacters();

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
    setIsHouseSelected(true);
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
      const name = item.name.toLowerCase();
      const search = query.toLowerCase();

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
          {!isHouseSelected && (
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
          )}
          <div className="row">
            <div className="col">
              {(isAllCharactersFetching || isHouseCharactersFetching) && (
                <Loader />
              )}
              {(isError || isHouseCharactersError) && (
                <h1 className="home-page__subtitle">
                  Erro: {(error || houseCharactersError).message}
                </h1>
              )}
            </div>
          </div>
          <div className="row home-page__cards">
            {isHouseSelected && mainData &&
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

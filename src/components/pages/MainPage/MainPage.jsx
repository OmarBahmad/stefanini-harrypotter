import { useState, useEffect } from "react";

import { Header } from "../../layout/Header/Header";
import { useCharacters } from "../../../services/useCharacters";
import { useHouseCharacters } from "../../../services/useHouseCharacters";

export const MainPage = () => {
  const {
    data: allCharactersData,
    isLoading: isAllCharactersFetching,
    isError,
    error,
  } = useCharacters();
  const [mainData, setMainData] = useState(null);

  const [house, setHouse] = useState(null);

  const {
    data: houseCharactersData,
    isLoading: isHouseCharactersFetching,
    isError: isHouseCharactersError,
    error: houseCharactersError,
  } = useHouseCharacters(house);

  useEffect(() => {
    if (house) {
      setMainData(houseCharactersData);
    } else {
      setMainData(allCharactersData);
    }
  }, [house, allCharactersData, houseCharactersData]);

  const changeHouse = (newHouse) => {
    setHouse(newHouse);
  };


  return (
    <div className="main-page">
      <Header />

      <h1>Main Page</h1>
      {(isAllCharactersFetching || isHouseCharactersFetching) && (
        <h1>Carregando...</h1>
      )}
      {(isError || isHouseCharactersError) && (
        <h1>Erro: {(error || houseCharactersError).message}</h1>
      )}

      <button onClick={() => changeHouse(null)}>Hogwarts</button>
      <button onClick={() => changeHouse("gryffindor")}>Grifinória</button>
      <button onClick={() => changeHouse("slytherin")}>Sonserina</button>
      <button onClick={() => changeHouse("ravenclaw")}>Corvinal</button>
      <button onClick={() => changeHouse("hufflepuff")}>Lufa-Lufa</button>
      <ul>
        {mainData && mainData.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

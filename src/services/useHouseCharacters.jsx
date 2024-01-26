import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "./queryClient";

const fetchHouseCharacters = (house) => {
  return axios
    .get(`${API_URL}/characters/house/${house}`)
    .then((response) => response.data);
};

export const useHouseCharacters = (house) => {
  const { data, isLoading, isError, error } = useQuery(
    ["houseCharacters", house],
    () => house?fetchHouseCharacters(house):''
  );

  return { data, isLoading, isError, error };
};

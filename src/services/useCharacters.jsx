import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "./queryClient";


const fetchCharacters = () => {
  return axios.get(API_URL + "/characters").then((response) => response.data);
};

export const useCharacters = () => {
  const { data, isLoading, isError, error } = useQuery("allCharacters", fetchCharacters);

  return { data, isLoading, isError, error };
};
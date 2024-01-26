
const API_URL = "https://hp-api.onrender.com/api";

export const useCharactersData = () => {
  const { data, isFetching } = useQuery("allCharacters", async () => {
    const response = await axios.get(API_URL + "/characters");

    return response.data;
  });

  console.log("allCharacters", data);
  return { data, isFetching };
};

export const useHouseData = (house) => {
  const { data, isFetching } = useQuery(['houseCharacters', house], async () => {
    const response = await axios.get(`${API_URL}/characters/house/${house}`);
    return response.data;
  });

  console.log(`houseCharacters-${house}`, data);
  return { data, isFetching };
};

export const useStudentsData = () => {
  const { data, isFetching } = useQuery("studentsCharacters", async () => {
    const response = await axios.get(API_URL + `/characters/students`);

    return response.data;
  });

  console.log("studentsCharacters", data);
  return { data, isFetching };
};

export const useStaffData = () => {
  const { data, isFetching } = useQuery("staffCharacters", async () => {
    const response = await axios.get(API_URL + `/characters/staff`);

    return response.data;
  });

  console.log("staffCharacters", data);
  return { data, isFetching };
};

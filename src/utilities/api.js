import Axios from "axios";
const BASE_URL = "https://www.breakingbadapi.com/api";
Axios.request({
  baseURL: BASE_URL,
});

const API = {
  getAllCharacters: async () => {
    return await Axios.get("/characters");
  },
  getCharactersById: async (payload) => {
    return await Axios.get("/characters");
  },
};

export default API;

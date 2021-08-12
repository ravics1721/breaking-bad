import Axios from "axios";
const BASE_URL = "https://www.breakingbadapi.com/api";
const axios = Axios.create({
  baseURL: BASE_URL,
});

const API = {
  getAllCharacters: async () => {
    return await axios.get("/characters");
  },
  getCharactersById: async (payload) => {
    return await axios.get("/characters");
  },
  getCharactersByPage: async (payload) => {
    return await axios.get(`/characters/?limit=10&offset=${payload.pageNo}`);
  },
};

export default API;

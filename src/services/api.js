import axios from "axios";

// BASE DA URL = http://api.themoviedb.org/3/
// URL DA API = http://api.themoviedb.org/3/movie/now_playing?api_key=71423b1e9d52a9d085caa4da4e5a6777&language=pt-BR

const api = axios.create({
  baseURL: "http://api.themoviedb.org/3/",
});

export default api;

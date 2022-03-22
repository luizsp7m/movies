import { tmdb } from "../services/tmdb"

export const getTrendingMovies = async () => {
  const { data } = await tmdb.get("/trending/movie/day?language=pt-BR");
  return data.results;
}

export const getTrendingSeries = async () => {
  const { data } = await tmdb.get("/trending/tv/day?language=pt-BR");
  return data.results;
}

export const getPopularMovies = async () => {
  const { data } = await tmdb.get("/movie/popular?language=pt-BR");
  return data.results;
}

export const getPopularSeries = async () => {
  const { data } = await tmdb.get("/tv/popular?language=pt-BR");
  return data.results;
}

export const searchSeries = async (query: string, page: number) => {
  const { data } = await tmdb.get(`/search/tv?language=pt-BR&query=${query}&page=${page}`);
  return data;
}
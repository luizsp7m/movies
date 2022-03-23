import { tmdb } from "../services/tmdb"

export const trending = async (media: string) => {
  const { data } = await tmdb.get(`/trending/${media}/day?language=pt-BR`);
  return data.results;
}

export const popular = async (media: string) => {
  const { data } = await tmdb.get(`/${media}/popular?language=pt-BR`);
  return data.results;
}

export const search = async (media: string, query: string, page: number) => {
  const { data } = await tmdb.get(`/search/${media}?language=pt-BR&query=${query}&page=${page}`);
  return data;
}
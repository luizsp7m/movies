import { tmdb } from "../services/tmdb"

export const trending = async (media: string) => {
  const { data } = await tmdb.get(`/trending/${media}/day?language=pt-BR`);

  return data.results;
}

export const upcoming = async (media: string) => {
  const { data } = await tmdb.get(`/${media}/upcoming?language=pt-BR`);

  return data.results;
}

export const popular = async (media: string, page: number) => {
  const { data } = await tmdb.get(`/${media}/popular?language=pt-BR&page=${page}`);

  return data;
}

export const search = async (media: string, query: string, page: number) => {
  const { data } = await tmdb.get(`/search/${media}?language=pt-BR&query=${query}&page=${page}`);

  return data;
}

export const details = async (media: string, id: number) => {
  const { data} = await tmdb.get(`${media}/${id}?language=pt-BR`); 

  return data;
}

export const images = async (media: string, id: number) => {
  const { data } = await tmdb.get(`${media}/${id}/images`);
  
  return data;
}
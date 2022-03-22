import { Layout } from "../components/Layout";
import { Search } from "../components/Search";
import { CardList } from "../components/CardList";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../utils/getData";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(response => setMovies(response));
  }, []);

  return (
    <Layout title="Filmes">
      <Search placeholder="Procurar por filmes" />
      <CardList title="Filmes recomendados para você" data={movies} media="movie" />
    </Layout>
  );
}
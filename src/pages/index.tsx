import { Layout } from "../components/Layout";
import { Search } from "../components/Search";
import { CardList } from "../components/CardList";
import { useState, useEffect } from "react";
import { getTrendingMovies, getTrendingSeries } from "../utils/getData";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => setMovies(response));
    getTrendingSeries().then(response => setSeries(response));
  }, []);

  return (
    <Layout title="Início">
      {/* <Search placeholder="Procurar por filmes ou séries" /> */}
      <CardList title="Tendências de filmes para você" data={movies} media="movie" />
      <CardList title="Tendências de séries para você" data={series} media="serie" />
    </Layout>
  );
}

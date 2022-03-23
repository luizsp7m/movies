import { Layout } from "../components/Layout";
import { CardList } from "../components/CardList";
import { useState, useEffect } from "react";
import { popular } from "../utils/getData";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    popular("movie").then(response => setMovies(response));
    popular("tv").then(response => setSeries(response));
  }, []);

  return (
    <Layout title="Início">
      <CardList title="Tendências de filmes para você" data={movies} media="movie" />
      <CardList title="Tendências de séries para você" data={series} media="serie" />
    </Layout>
  );
}

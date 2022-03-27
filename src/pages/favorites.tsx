import { useEffect, useState } from "react";
import { Movie, Serie } from "../components/CardItem";
import { CardList } from "../components/CardList";
import { Layout } from "../components/Layout";
import { useApp } from "../contexts/AppContext";
import { useAuth } from "../contexts/AuthContext";
import { details } from "../utils/getData";

export default function Favorites() {
  const { user } = useAuth();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Serie[]>([]);

  const { myMovies, mySeries } = useApp();

  useEffect(() => {
    if (user) {
      Promise.all(myMovies.map(movie => details("movie", movie.mediaId))).then(response => response).then(response => {
        setMovies(response);
      });
    }
  }, [myMovies]);

  useEffect(() => {
    if (user) {
      Promise.all(mySeries.map(serie => details("tv", serie.mediaId))).then(response => response).then(response => {
        setSeries(response);
      });
    }
  }, [mySeries]);

  return (
    <Layout title="Favoritos">
      {user ? (
        <>
          <CardList
            title="Seus filmes favoritos"
            data={movies}
            media="movie"
          />

          <CardList
            title="Suas séries favoritas"
            data={series}
            media="serie"
          />
        </>
      ) : (
        <h1>Usuário não entrou com uma conta Google</h1>
      )}
    </Layout>
  );
}
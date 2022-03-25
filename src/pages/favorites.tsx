import { useEffect, useState } from "react";
import { Movie } from "../components/CardItem";
import { CardList } from "../components/CardList";
import { Layout } from "../components/Layout";
import { useApp } from "../contexts/AppContext";
import { useAuth } from "../contexts/AuthContext";
import { details } from "../utils/getData";

export default function Favorites() {
  const { user } = useAuth();

  const [movies, setMovies] = useState<Movie[]>([]);

  const { myMovies, mySeries } = useApp();

  return (
    <Layout title="Favoritos">
      {user ? (
        <>
          <CardList
            title="Filmes favoritos"
            data={movies}
            media="movie"
          />
        </>
      ) : (
        <h1>Usuário não entrou com uma conta Google</h1>
      )}
    </Layout>
  );
}
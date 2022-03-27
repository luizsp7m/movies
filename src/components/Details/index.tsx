import { Container, BackgroundImage, Information } from "./styles";

import { BsArrowLeft } from "react-icons/bs";
import { useApp } from "../../contexts/AppContext";
import { useRouter } from "next/router";

interface Props {
  data: any;
  media: "movie" | "serie";
}

interface MovieDetailsProps {
  movie: {
    id: number;
    overview: string | null;
    backdrop_path: string | null;
    release_date: string;
    title: string;
    vote_average: number;
    runtime: number | null;
    genres: Array<{
      id: number;
      name: string;
    }>
  };
}

interface SerieDetailsProps {
  serie: {
    id: number;
    overview: string | null;
    backdrop_path: string | null;
    first_air_date: string;
    name: string;
    vote_average: number;
    runtime: number | null;
    genres: Array<{
      id: number;
      name: string;
    }>
  };
}

export function Details({ data, media }: Props) {
  return media === "movie" ? <MovieDetails movie={data} /> : <SerieDetails serie={data} />
}

function MovieDetails({ movie }: MovieDetailsProps) {
  const background = movie.backdrop_path ? movie.backdrop_path : "";

  const { addToFavorites, removeFromFavorites, myMovies } = useApp();

  const exists = myMovies.find(myMovie => myMovie.mediaId === movie.id);

  const { back } = useRouter();

  return (
    <Container>
      <button onClick={() => back()}>
        <BsArrowLeft />
        Voltar
      </button>

      <BackgroundImage image={`https://image.tmdb.org/t/p/original/${background}`} />

      <Information>
        <div className="header">
          <time>{new Date(movie.release_date).getFullYear()}</time>

          <h1>{movie.title}</h1>

          <div className="genres">
            {movie.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
          </div>
        </div>

        <div className="body">
          <p>
            {movie.overview}
          </p>
        </div>

        <div className="footer">
          {exists ? (
            <button onClick={() => removeFromFavorites(exists.docId, "movie")}>
              Remover dos favoritos
            </button>
          ) : (
            <button onClick={() => addToFavorites(movie.id, "movie")}>
              Adicionar aos favoritos
            </button>
          )}
        </div>
      </Information>
    </Container>
  );
}

function SerieDetails({ serie }: SerieDetailsProps) {
  const background = serie.backdrop_path ? serie.backdrop_path : "";

  const { addToFavorites, removeFromFavorites, mySeries } = useApp();

  const exists = mySeries.find(mySerie => mySerie.mediaId === serie.id);

  const { back } = useRouter();

  return (
    <Container>
      <button onClick={() => back()}>
        <BsArrowLeft />
        Voltar
      </button>

      <BackgroundImage image={`https://image.tmdb.org/t/p/original/${background}`} />

      <Information>
        <div className="header">
          <time>{new Date(serie.first_air_date).getFullYear()}</time>

          <h1>{serie.name}</h1>

          <div className="genres">
            {serie.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
          </div>
        </div>

        <div className="body">
          <p>
            {serie.overview}
          </p>
        </div>

        <div className="footer">
          {exists ? (
            <button onClick={() => removeFromFavorites(exists.docId, "serie")}>
              Remover dos favoritos
            </button>
          ) : (
            <button onClick={() => addToFavorites(serie.id, "serie")}>
              Adicionar aos favoritos
            </button>
          )}
        </div>
      </Information>
    </Container>
  );
}
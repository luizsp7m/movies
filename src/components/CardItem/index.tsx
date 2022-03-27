import Link from "next/link";

import { Container, CardImage, CardInformation, Button } from "./styles";

import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { useApp } from "../../contexts/AppContext";

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export interface Serie {
  id: number;
  name: string;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
}

interface Props {
  data: any;
  media: "movie" | "serie";
}

interface MovieCardProps {
  movie: Movie;
}

interface SerieCardProps {
  serie: Serie;
}

export function CardItem({ data, media }: Props) {
  return (
    media === "movie" ? <MovieCard movie={data} /> : <SerieCard serie={data} />
  );
}

export function MovieCard({ movie }: MovieCardProps) {
  const { addToFavorites, removeFromFavorites, myMovies } = useApp();

  const exists = myMovies.find(myMovie => myMovie.mediaId === movie.id);

  return (
    <Container>
      <CardImage>
        <Link href={`/movies/${movie.id}`}>
          <a>
            <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `/assets/image-default.jpg`} alt={movie.title} />
          </a>
        </Link>
      </CardImage>

      <CardInformation>
        <div>
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span><MdLocalMovies /> Filme</span>
          <span>{movie.vote_average}</span>
        </div>

        <h5>{movie.title}</h5>
      </CardInformation>

      {exists && (
        <Button onClick={() => removeFromFavorites(exists.docId, "movie")} selected>
          <FaBookmark />
        </Button>
      )}

      {!exists && (
        <Button onClick={() => addToFavorites(movie.id, "movie")}>
          <FaRegBookmark />
        </Button>
      )}
    </Container >
  );
}

export function SerieCard({ serie }: SerieCardProps) {
  const { addToFavorites, removeFromFavorites, mySeries } = useApp();

  const exists = mySeries.find(mySerie => mySerie.mediaId === serie.id);

  return (
    <Container>
      <CardImage>
        <Link href={`/series/${serie.id}`}>
          <a>
            <img src={serie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${serie.backdrop_path}` : `/assets/image-default.jpg`} alt={serie.name} />
          </a>
        </Link>
      </CardImage>

      <CardInformation>
        <div>
          <span>{new Date(serie.first_air_date).getFullYear()}</span>
          <span><BsCollectionPlayFill /> Série</span>
          <span>{serie.vote_average}</span>
        </div>

        <h5>{serie.name}</h5>
      </CardInformation>

      {exists && (
        <Button onClick={() => removeFromFavorites(exists.docId, "serie")} selected>
          <FaBookmark />
        </Button>
      )}

      {!exists && (
        <Button onClick={() => addToFavorites(serie.id, "serie")}>
          <FaRegBookmark />
        </Button>
      )}
    </Container>
  );
}
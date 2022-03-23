import { Container, CardImage, CardInformation } from "./styles";

import { FaRegBookmark } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";

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
  return(
    media === "movie" ? <MovieCard movie={data} /> : <SerieCard serie={data} />
  );
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Container>
      <CardImage>
      <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `/assets/image-default.jpg`} alt={movie.title} />

        <button>
          <FaRegBookmark />
        </button>
      </CardImage>

      <CardInformation>
        <div>
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span><MdLocalMovies /> Filme</span>
          <span>{movie.vote_average}</span>
        </div>

        <h5>{movie.title}</h5>
      </CardInformation>
    </Container>
  );
}

export function SerieCard({ serie }: SerieCardProps) {
  return (
    <Container>
      <CardImage>
        <img src={serie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${serie.backdrop_path}` : `/assets/image-default.jpg`} alt={serie.name} />

        <button>
          <FaRegBookmark />
        </button>
      </CardImage>

      <CardInformation>
        <div>
          <span>{new Date(serie.first_air_date).getFullYear()}</span>
          <span><BsCollectionPlayFill /> Série</span>
          <span>{serie.vote_average}</span>
        </div>

        <h5>{serie.name}</h5>
      </CardInformation>
    </Container>
  );
}
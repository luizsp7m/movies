import { Movie } from "../CardItem";
import { Container, PosterImage, Summary } from "./styles";
import { MdLocalMovies } from "react-icons/md";

interface Props {
  data: Movie;
}

export function CarouselItem({ data }: Props) {
  return (
    <Container>
      <PosterImage>
      <img src={data.backdrop_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : `/assets/image-default.jpg`} alt={data.title} />
      </PosterImage>

      <Summary>
        <div>
          <span>{new Date(data.release_date).getFullYear()}</span>
          <span><MdLocalMovies /> Filme</span>
          <span>{data.vote_average}</span>
        </div>

        <h5>{data.title}</h5>
      </Summary>
    </Container>
  );
}
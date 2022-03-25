import { Container, PosterImage, Information } from "./styles";

import { AiFillStar } from "react-icons/ai";

import { format } from "date-fns";

interface Props {
  data: {
    backdrop_path: string | null;
    genres: Array<{
      id: number;
      name: string;
    }>
    id: number;
    original_title: string;
    overview: string | null;
    poster_path: string | null;
    production_companies: Array<{
      name: string;
      id: number;
      logo_path: string | null;
    }>
    release_date: string;
    title: string;
    vote_average: number;
  }
}

export function Details({ data }: Props) {
  return (
    <Container>
      <PosterImage>
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="Poster" />
      </PosterImage>

      <Information>
        <h1>{data.title}</h1>

        <div className="row">
          <div className="sub-row">
            <time>{format(new Date(data.release_date), "LLL. dd, yyyy")}</time>
            <span>
              <AiFillStar />
              { data.vote_average }
            </span>
          </div>

          <div className="genres">
            {data.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>

        <p>{data.overview}</p>

        <button onClick={() => alert("🙃")}>Adicionar aos favoritos</button>
      </Information>
    </Container>
  );
}
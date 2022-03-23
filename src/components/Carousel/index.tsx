import { Container } from "./styles";

import Slider from "react-slick";

import { useEffect, useState } from "react";
import { Movie } from "../CardItem";
import { CarouselItem } from "../CarouselItem";
import { upcoming } from "../../utils/getData";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 8,
  slidesToScroll: 7,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export function Carousel() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    upcoming("movie").then(response => setMovies(response));
  }, []);

  return (
    <Container>
      <h1>Filmes que serão lançados em breve</h1>
      <Slider {...settings}>
        {movies.map(movie => (
          <CarouselItem
            key={movie.id}
            data={movie}
          />
        ))}
      </Slider>
    </Container>
  );
}
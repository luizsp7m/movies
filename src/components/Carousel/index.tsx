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
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
import Slider from "react-slick";

import { Container, Button } from "./styles";

import { useEffect, useState } from "react";
import { Movie } from "../CardItem";
import { CarouselItem } from "../CarouselItem";
import { upcoming } from "../../utils/getData";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <Button onClick={onClick} className="slick-arrow" direction="right">
      <BiRightArrowAlt />
    </Button>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <Button onClick={onClick} className="slick-arrow" direction="left">
      <BiLeftArrowAlt />
    </Button>
  );
}

export function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
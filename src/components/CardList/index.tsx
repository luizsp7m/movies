import { useEffect, useRef } from "react";
import { CardItem } from "../CardItem";
import { Container, Grid } from "./styles";

interface Props {
  title: string;
  data: Array<any>;
  media: "movie" | "serie";
  numberPages?: number;
  currentPage?: number;
}

export function CardList({ title, data, media, numberPages, currentPage }: Props) {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [data]);

  return (
    <Container>
      <h1>{title}</h1>

      {numberPages !== undefined && numberPages > 0 && <span>Página {currentPage} de {numberPages}</span>}

      <Grid>
        {data.map(item => (
          <CardItem
            key={item.id}
            media={media}
            data={item}
          />
        ))}
      </Grid>
    </Container>
  );
}
import { Container, Disclaimer } from "./styles";

interface Props {
  numberPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export function Pagination({ numberPages, currentPage, onChangePage }: Props) {
  if (numberPages === 0) {
    return <Disclaimer>Esses são os filmes ou séries recomendados para você, faça uma busca no campo acima caso não encontrou o que desejava</Disclaimer>
  }

  return (
    <Container>
      {Array.from(Array(numberPages), (item, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? `selected` : ""}
          onClick={() => onChangePage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </Container>
  );
}
import { Container, Disclaimer } from "./styles";

interface Props {
  numberPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

const siblingCount = 2;

export function Pagination({ numberPages, currentPage, onChangePage }: Props) {
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
import { Container } from "./styles";

interface Props {
  numberPages: number;
  currentPage: number;
  onChangePages: (page: number) => void;
}

export function Pagination({ numberPages, currentPage, onChangePages }: Props) {
  return (
    <Container>
      {Array.from(Array(numberPages), (item, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? `selected` : ""}
          onClick={() => onChangePages(index + 1 + item)}
        >
          {index + 1}
        </button>
      ))}
    </Container>
  );
}
import { Container } from "./styles";

interface Props {
  number: number;
  isCurrent?: boolean;
  onChangePage: (page: number) => void;
}

export function PaginationItem({ number, isCurrent, onChangePage }: Props) {
  return (
    <Container onClick={() => onChangePage(number)} isCurrent={isCurrent ? true : false}>
      { number }
    </Container>
  );
}
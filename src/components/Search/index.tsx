import { Container } from "./styles";

import { AiOutlineSearch } from "react-icons/ai"
import { FormEvent, useState } from "react";

interface Props {
  placeholder: string;
  inputSearch: string;
  onChangeInputSearch: (value: string) => void;
  onSubmit: () => void;
}

export function Search({ placeholder, inputSearch, onChangeInputSearch, onSubmit }: Props) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <button type="submit">
        <AiOutlineSearch />
      </button>

      <input
        type="text"
        placeholder={placeholder}
        value={inputSearch}
        onChange={({ target }) => onChangeInputSearch(target.value) }
      />
    </Container>
  );
}
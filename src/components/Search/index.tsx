import { Container } from "./styles";

import { AiOutlineSearch } from "react-icons/ai"
import { FormEvent, useState } from "react";

interface Props {
  placeholder: string;
  onSearch: (query: string) => void;
}

export function Search({ placeholder, onSearch }: Props) {
  const [inputSearch, setInputSearch] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    
    onSearch(inputSearch);
  }

  return (
    <Container onSubmit={onSubmit}>
      <button type="submit">
        <AiOutlineSearch />
      </button>

      <input
        type="text"
        placeholder={placeholder}
        value={inputSearch}
        onChange={({ target }) => setInputSearch(target.value) }
      />
    </Container>
  );
}
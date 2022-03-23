import { Layout } from "../components/Layout";
import { Search } from "../components/Search";
import { CardList } from "../components/CardList";
import { useEffect, useState } from "react";
import { popular, search } from "../utils/getData";
import { Pagination } from "../components/Pagination";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("Filmes recomendados para você");
  const [searchParam, setSearchParam] = useState("");
  const [numberPages, setNumberPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  function onSearch(query: string) {
    if (query.trim() === "") {
      popular("movie").then(response => setMovies(response));
      setTitle("Filmes recomendados para você");
      setSearchParam("");
      setNumberPages(0);
      setCurrentPage(0);
      return;
    }

    search("movie", query, 1).then(response => {
      setSearchParam(query);
      setCurrentPage(response.page);
      setNumberPages(response.total_pages);
      setMovies(response.results);
      setTitle(`${response.total_results} resultados encontrados para "${query}"`);
    });
  }

  function onChangePage(page: number) {
    search("movie", searchParam, page).then(response => {
      setCurrentPage(response.page);
      setMovies(response.results);
    });
  }

  useEffect(() => {
    popular("movie").then(response => setMovies(response));
  }, []);

  return (
    <Layout title="Filmes">
      <Search
        placeholder="Procurar por filmes"
        onSearch={onSearch}
      />

      <CardList
        title={title}
        data={movies}
        media="movie"
        numberPages={numberPages}
        currentPage={currentPage}
      />

      <Pagination
        numberPages={numberPages}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </Layout>
  );
}
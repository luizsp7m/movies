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
      popular("movie", 1).then(response => {
        setCurrentPage(response.page);
        setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
        setMovies(response.results);
        setTitle("Filmes recomendados para você");
        setSearchParam("");
      });

      return;
    }

    search("movie", query, 1).then(response => {
      setSearchParam(query);
      setCurrentPage(response.page);
      setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
      setMovies(response.results);
      setTitle(`${response.total_results} resultados encontrados para "${query}"`);
    });
  }

  function onChangePage(page: number) {
    if (!searchParam) {
      popular("movie", page).then(response => {
        setCurrentPage(response.page);
        setMovies(response.results);
      });

      return;
    }

    search("movie", searchParam, page).then(response => {
      setCurrentPage(response.page);
      setMovies(response.results);
    });
  }

  useEffect(() => {
    popular("movie", 1).then(response => {
      setCurrentPage(response.page);
      setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
      setMovies(response.results);
    });
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
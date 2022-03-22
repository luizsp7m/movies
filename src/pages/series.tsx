import { Layout } from "../components/Layout";
import { Search } from "../components/Search";
import { CardList } from "../components/CardList";
import { useEffect, useState } from "react";
import { getPopularSeries, searchSeries } from "../utils/getData";
import { Pagination } from "../components/Pagination";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [title, setTitle] = useState("Séries recomendadas para você");
  const [inputSearch, setInputSearch] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [numberPages, setNumberPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function onChangeInputSearch(value: string) {
    setInputSearch(value);
  }

  function onSearch() {
    if (inputSearch.trim() === "") {
      setTitle("Séries recomendadas para você");
      getPopularSeries().then(response => setSeries(response));
      return;
    }

    setSearchParam(inputSearch);

    searchSeries(inputSearch, 1).then(response => {
      setSeries(response.results);
      setTitle(`${response.total_results} resultados encontrados para "${inputSearch}"`);
      setNumberPages(response.total_pages);
      setCurrentPage(response.page);
    });
  }

  function onChangePages(page: number) {
    searchSeries(searchParam, page).then(response => {
      setSeries(response.results);
      setCurrentPage(response.page);
    });
  }

  useEffect(() => {
    getPopularSeries().then(response => setSeries(response));
  }, []);

  return (
    <Layout title="Séries">
      <Search
        placeholder="Procurar por séries"
        inputSearch={inputSearch}
        onChangeInputSearch={onChangeInputSearch}
        onSubmit={onSearch}
      />

      <CardList
        title={title}
        data={series}
        media="serie"
        numberPages={numberPages}
        currentPage={currentPage}
      />

      <Pagination
        numberPages={numberPages}
        currentPage={currentPage}
        onChangePages={onChangePages}
      />
    </Layout>
  );
}
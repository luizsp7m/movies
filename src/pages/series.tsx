import { Layout } from "../components/Layout";
import { Search } from "../components/Search";
import { CardList } from "../components/CardList";
import { useEffect, useState } from "react";
import { popular, search } from "../utils/getData";
import { Pagination } from "../components/Pagination";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [title, setTitle] = useState("Séries recomendadas para você");
  const [searchParam, setSearchParam] = useState("");
  const [numberPages, setNumberPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  function onSearch(query: string) {
    if (query.trim() === "") {
      popular("tv", 1).then(response => {
        setCurrentPage(response.page);
        setNumberPages(10);
        setSeries(response.results);
        setTitle("Séries recomendadas para você");
        setSearchParam("");
      });

      return;
    }

    search("tv", query, 1).then(response => {
      setSearchParam(query);
      setCurrentPage(response.page);
      setNumberPages(response.total_pages);
      setSeries(response.results);
      setTitle(`${response.total_results} resultados encontrados para "${query}"`);
    });
  }

  function onChangePage(page: number) {
    if (!searchParam) {
      popular("tv", page).then(response => {
        setCurrentPage(response.page);
        setSeries(response.results);
      });

      return;
    }

    search("tv", searchParam, page).then(response => {
      setCurrentPage(response.page);
      setSeries(response.results);
    });
  }

  useEffect(() => {
    popular("tv", 1).then(response => {
      setCurrentPage(response.page);
      setNumberPages(10);
      setSeries(response.results);
    });
  }, []);

  return (
    <Layout title="Séries">
      <Search
        placeholder="Procurar por séries"
        onSearch={onSearch}
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
        onChangePage={onChangePage}
      />
    </Layout>
  );
}
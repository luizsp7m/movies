import { GetServerSideProps } from "next";
import { Details } from "../../components/Details";
import { Layout } from "../../components/Layout";
import { details } from "../../utils/getData";

interface MovieProps {
  movie: {
    backdrop_path: string | null;
    genres: Array<{
      id: number;
      name: string;
    }>
    id: number;
    original_title: string;
    overview: string | null;
    poster_path: string | null;
    production_companies: Array<{
      name: string;
      id: number;
      logo_path: string | null;
    }>
    release_date: string;
    title: string;
    vote_average: number;
  }
}

export default function Movie({ movie }: MovieProps) {
  return (
    <Layout title="Filme ou série">
      <Details 
        data={movie}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const response = await details("movie", id);

  return {
    props: {
      movie: response,
    }
  }
}
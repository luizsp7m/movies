import { GetServerSideProps } from "next";
import { Details } from "../../components/Details";
import { Layout } from "../../components/Layout";
import { details } from "../../utils/getData";

interface Props {
  movie: {
    id: number;
    overview: string | null;
    backdrop_path: string | null;
    release_date: string;
    title: string;
    vote_average: number;
    runtime: number | null;
    genres: Array<{
      id: number;
      name: string;
    }>
  };
}

export default function Media({ movie }: Props) {
  return (
    <Layout title={movie.title}>
      <Details
        data={movie}
        media="movie"
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
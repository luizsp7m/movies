import { GetServerSideProps } from "next";
import { Details } from "../../components/Details";
import { Layout } from "../../components/Layout";
import { details } from "../../utils/getData";

interface Props {
  serie: {
    id: number;
    overview: string | null;
    backdrop_path: string | null;
    first_air_date: string;
    name: string;
    vote_average: number;
    runtime: number | null;
    genres: Array<{
      id: number;
      name: string;
    }>
  };
}

export default function Media({ serie }: Props) {
  return (
    <Layout title={serie.name}>
      <Details
        data={serie}
        media="serie"
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const response = await details("tv", id);

  return {
    props: {
      serie: response,
    }
  }
}
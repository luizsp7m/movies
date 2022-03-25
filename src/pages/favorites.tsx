import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";

export default function Favorites() {
  const { user } = useAuth();

  return (
    <Layout title="Favoritos">
      { user ? (
        <h1>Tudo certo</h1>
      ) : (
        <h1>Usuário não entrou com uma conta Google</h1>
      ) }
    </Layout>
  );
}
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

interface AppContextData {
  addToFavorites: (mediaId: number, mediaType: string) => Promise<void>;
  removeFromFavorites: (docId: string, mediaType: string) => Promise<void>;
  myMovies: Array<Favorites>;
  mySeries: Array<Favorites>;
}

interface AppProviderProps {
  children: ReactNode;
}

type Favorites = {
  docId: string;
  mediaId: number;
}

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {

  const [myMovies, setMyMovies] = useState<Favorites[]>([]);
  const [mySeries, setMySeries] = useState<Favorites[]>([]);

  const { user } = useAuth();

  async function addToFavorites(mediaId: number, mediaType: string) {
    if (!user) {
      toast.error("Usuário não autenticado");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "favorites"), {
        mediaId,
        mediaType,
        userId: user.id,
      });

      const message = mediaType === "movie" ? "Filme adicionado aos favoritos" : "Série adicionada aos favoritos";

      toast.success(message);

    } catch (error) {
      toast.error("Houve um erro")
    }
  }

  async function removeFromFavorites(docId: string, mediaType: string) {
    if (!user) {
      toast.error("Usuário não autenticado");
      return;
    }

    try {
      const docRef = await deleteDoc(doc(db, "favorites", docId));

      const message = mediaType === "movie" ? "Filme removido dos favoritos" : "Série removida dos favoritos";

      toast.success(message);

    } catch (error) {

      toast.error("Houve um erro")
    }
  }

  useEffect(() => {
    if (user) {
      const favoritesRef = collection(db, "favorites");

      const q = query(favoritesRef, where("userId", "==", user.id));

      const unsubscribe = onSnapshot(q, snapshot => {
        let movies: Favorites[] = [];
        let series: Favorites[] = [];

        snapshot.forEach(favorite => {
          if (favorite.data().mediaType === "movie") {
            movies.push({
              docId: favorite.id,
              mediaId: favorite.data().mediaId,
            });
          }

          if (favorite.data().mediaType === "serie") {
            series.push({
              docId: favorite.id,
              mediaId: favorite.data().mediaId,
            });
          }
        });

        setMyMovies(movies);
        setMySeries(series);
      });

      return () => unsubscribe();
    }

    setMyMovies([]);
    setMySeries([]);
  }, [user]);

  return (
    <AppContext.Provider value={{
      addToFavorites, removeFromFavorites, myMovies, mySeries
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
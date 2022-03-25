import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
import { useAuth } from "./AuthContext";

interface AppContextData {
  addToFavorites: (mediaId: number, mediaType: string) => Promise<void>;
  removeFromFavorites: (docId: string) => Promise<void>;
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
      alert("Entre com uma conta Google para adicionar aos favoritos");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "favorites"), {
        mediaId,
        mediaType,
        userId: user.id,
      });

      console.log("Document written with ID: ", docRef.id);

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  async function removeFromFavorites(docId: string) {
    if (!user) {
      return;
    }

    alert("😶");

    // deleteDoc(doc(db, "favorites", docId)).then(() => {
    //   alert("Documento deletado com sucesso");
    // })
  }

  // async function myFavorites() {
  //   if (user) {
  //     const favoritesRef = collection(db, "favorites");

  //     const moviesQuery = query(favoritesRef, where("userId", "==", user?.id), where("mediaType", "==", "movie"));
  //     const seriesQuery = query(favoritesRef, where("userId", "==", user?.id), where("mediaType", "==", "serie"));

  //     const querySnapshotMovies = await getDocs(moviesQuery);
  //     const querySnapshotSeries = await getDocs(seriesQuery);

  //     let moviesArray: Favorites[] = [];
  //     let seriesArray: Favorites[] = [];

  //     querySnapshotMovies.forEach(doc => {
  //       const movie = {
  //         docId: doc.id,
  //         mediaId: doc.data().mediaId,
  //       }

  //       moviesArray.push(movie);
  //     });

  //     querySnapshotSeries.forEach(doc => {
  //       const serie = {
  //         docId: doc.id,
  //         mediaId: doc.data().mediaId,
  //       }

  //       seriesArray.push(serie);
  //     });

  //     setMyMovies(moviesArray);
  //     setMySeries(seriesArray);

  //     return;
  //   }

  //   setMyMovies([]);
  //   setMySeries([]);
  // }

  // useEffect(() => {
  //   myFavorites();
  // }, [user]);

  useEffect(() => {
    if (user) {
      const favoritesRef = collection(db, "favorites");

      const q = query(favoritesRef, where("userId", "==", user?.id));

      const unsubscribe = onSnapshot(q, snapshot => {
        let movies: Favorites[] = [];
        let series: Favorites[] = [];

        snapshot.forEach(favorite => {
          if (favorite.data().mediaType === "movie") {
            movies.push(favorite.data());
          }

          if (favorite.data().mediaType === "serie") {
            series.push(favorite.data());
          }
        });

        setMyMovies(movies);
        setMySeries(series);
      });

      return () => unsubscribe();
    }
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
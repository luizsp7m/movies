import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../services/firebase";

interface AuthContextData {
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  user: User | undefined;
}

interface AuthProviderProps {
  children: ReactNode;
}

type User = {
  id: string;
  name: any; // string
  email: any; // string
  avatar: any; // string
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const response = await signInWithPopup(auth, googleProvider);

    if (response.user) {
      const { uid, displayName, email, photoURL } = response.user;

      setUser({
        id: uid,
        name: displayName,
        email: email,
        avatar: photoURL,
      });
    }
  }
  
  async function logout() {
    signOut(auth).then(() => {
      setUser(undefined)
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;

        setUser({
          id: uid,
          name: displayName,
          email: email,
          avatar: photoURL,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      signInWithGoogle, logout, user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
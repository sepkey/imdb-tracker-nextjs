'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { IWatchedMovie } from '@/types/types';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type ContextType = {
  watched: IWatchedMovie[];
  setWatched: Dispatch<SetStateAction<IWatchedMovie[]>>;
  handleDeleteWatched: (id: string) => void;
  handleAddWatched: (movie: IWatchedMovie) => void;
};
const WatchedContext = createContext<ContextType | null>(null);

function WatchedProvider({ children }: PropsWithChildren) {
  const [watched, setWatched] = useLocalStorage([], 'watched');

  const handleDeleteWatched = useCallback(
    (id: string) => {
      setWatched((movies) => movies.filter((movie) => movie.imdbID !== id));
    },
    [setWatched]
  );

  const handleAddWatched = useCallback(
    (movie: IWatchedMovie) => {
      setWatched((prev) => [...prev, movie]);
    },
    [setWatched]
  );

  const value = useMemo(
    () => ({ watched, setWatched, handleDeleteWatched, handleAddWatched }),
    [handleAddWatched, handleDeleteWatched, setWatched, watched]
  );
  return (
    <WatchedContext.Provider value={value}>{children}</WatchedContext.Provider>
  );
}

function useWatched() {
  const context = useContext(WatchedContext) as ContextType;
  if (context === undefined) throw new Error('Out of post context');
  return context;
}
export { WatchedProvider, useWatched };

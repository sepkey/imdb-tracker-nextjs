'use client';
import { useWatched } from '@/app/Providers';
import { WatchedMovie } from './WatchedMovie';

export function WatchedMovies() {
  const { watched } = useWatched();
  return (
    <div className="bg-slate-50 m-3 mt-6">
      <h2 className="text-center text-teal-600 font-bold mt-2">
        List of watched movies
      </h2>
      <ul className="overflow-y-scroll p-6 list-none flex flex-col gap-4 h-screen ">
        {watched.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

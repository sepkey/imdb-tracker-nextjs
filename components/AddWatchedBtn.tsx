'use client';

import { useWatched } from '@/app/Providers';
import { IMovieDetail } from '@/types/types';

type Props = {
  movie: IMovieDetail;
  movieId: string;
};

export default function AddWatchedBtn({ movie, movieId }: Props) {
  const { handleAddWatched } = useWatched();

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: movieId!,
      Poster: movie.Poster!,
      Title: movie.Title!,
      imdbRating: Number(movie.imdbRating!),
      runtime: Number(movie.Runtime?.split(' ')[0]),
      Year: movie.Year!,
    };
    handleAddWatched(newWatchedMovie);
  }

  return (
    <button
      className="bg-teal-600 text-white rounded-md text-2xl p-4 cursor-pointer font-bold hover:bg-teal-700 transition-colors"
      onClick={handleAdd}
    >
      Add to watched list
    </button>
  );
}

'use client';

import { useWatched } from '@/app/Providers';
import useCheckClient from '@/hooks/useCheckClient';
import { IMovieDetail } from '@/types/types';
import { useEffect, useState } from 'react';

type Props = {
  movie: IMovieDetail;
  movieId: string;
};

export default function AddWatchedBtn({ movie, movieId }: Props) {
  const { handleAddWatched, watched } = useWatched();
  const iswatched = watched.map((movie) => movie.imdbID).includes(movieId!);
  const { isClient } = useCheckClient();

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

  if (!isClient) {
    return null;
  }

  if (iswatched) {
    return <p className="text-red-400">You already have watched this movie!</p>;
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

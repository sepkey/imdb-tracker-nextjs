import { useWatched } from '@/app/Providers';
import { IWatchedMovie } from '@/types/types';

type Props = {
  movie: IWatchedMovie;
};

export function WatchedMovie({ movie }: Props) {
  const { handleDeleteWatched } = useWatched();

  return (
    <li className="p-2 rounded-md shadow-emerald-300 shadow relative">
      <button
        className="absolute right-1 cursor-pointer font-bold text-sm rounded-full text-red-400 border border-red-400 px-1 hover:bg-red-400 hover:text-white transition-colors"
        onClick={() => handleDeleteWatched(movie.imdbID)}
      >
        &#x2715;
      </button>
      <div className="flex justify-between gap-2 pr-2 text-slate-600 h-16">
        <img
          className="w-14"
          src={movie.Poster}
          alt={`${movie.Title} poster`}
        />
        <h4 className="text-xs font-semibold ">{movie.Title}</h4>
      </div>
    </li>
  );
}

import { IMovie } from '@/types/types';
import Link from 'next/link';

type Props = {
  result: IMovie;
};

export default function Card({ result }: Props) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group h-52 overflow-y-hidden">
      <Link
        href={`/movie/${result.imdbID}`}
        className="flex flex-col justify-center items-center"
      >
        <div className="max-h-32 overflow-hidden">
          <img src={result.Poster} alt="alter of movies" />
        </div>
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.Title}</p>
          <h2 className="truncate text-lg font-bold">{result.Year}</h2>
        </div>
      </Link>
    </div>
  );
}

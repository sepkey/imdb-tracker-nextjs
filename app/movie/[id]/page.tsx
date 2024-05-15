import AddWatchedBtn from '@/components/AddWatchedBtn';
import { assertIsMovie } from '@/types/assertions';

type Props = {
  params: { id: string };
};

export default async function Movie({ params }: Props) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${params.id}`
  );

  if (!response.ok)
    throw new Error('Something went wrong while fetching the movie!');

  const movie = (await response.json()) as unknown;

  assertIsMovie(movie);

  return (
    <div className="text-2xl leading-6">
      <header className="flex justify-center pt-5 ">
        <img
          className="w-1/3"
          src={movie.Poster}
          alt={`poster of ${movie?.Title} movie`}
        />

        <div className="w-auto px-12 py-10  flex flex-col gap-6">
          <h2 className="text-4xl mb-2 leading-4">{movie.Title}</h2>
          <p>
            {movie.Released} &bull; {movie.Runtime}{' '}
          </p>
          <p>{movie.Genre}</p>
          <p>
            <span>⭐</span>
            {movie.imdbRating} imdb rating
          </p>

          <div className=" py-8 px-10 rounded-md mb-3 font-medium flex flex-col gap-10">
            <AddWatchedBtn movie={movie} movieId={params.id} />
          </div>
        </div>
      </header>

      <section className="p-16 flex flex-col gap-6">
        <p>
          <em> {movie.Plot}</em>
        </p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </section>
    </div>
  );
}

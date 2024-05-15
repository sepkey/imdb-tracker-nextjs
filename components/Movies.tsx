import { IMovie } from '@/types/types';
import Card from './Movie';

type Props = {
  results: IMovie[];
};

export default function Movies({ results }: Props) {
  return (
    <div className="flex-1 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  py-4">
      {results.map((result) => (
        <Card key={result.imdbID} result={result} />
      ))}
    </div>
  );
}

import { API_URL } from "../app/(landing)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}
interface IMovieInfoProps {
  id: string;
}

const MovieInfo = async ({ id }: IMovieInfoProps) => {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
};

export default MovieInfo;

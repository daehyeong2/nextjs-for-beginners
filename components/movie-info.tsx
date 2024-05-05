import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";
import Link from "next/link";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}
interface IMovieInfoProps {
  id: string;
}

const MovieInfo = async ({ id }: IMovieInfoProps) => {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <Link href={`/movies/${movie.id}/credits`}>Go to credits &rarr;</Link>
        <Link href={`/movies/${movie.id}/providers`}>
          Go to providers &rarr;
        </Link>
        <Link href={`/movies/${movie.id}/similar`}>Go to similar &rarr;</Link>
        {movie.homepage ? (
          <Link href={movie.homepage} target="_blank">
            Go to homepage &rarr;
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default MovieInfo;

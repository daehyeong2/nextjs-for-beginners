import { getMovie } from "../../../../../components/movie-info";
import { IParams } from "../page";
import styles from "../../../../../styles/movie-similar.module.css";
import { API_URL } from "../../../../(landing)/page";
import Movie from "../../../../../components/movie";

const getMovies = async (id: string) => {
  const movies = await fetch(`${API_URL}/${id}/similar`);
  return await movies.json();
};

const SimilarPage = async ({ params: { id } }: IParams) => {
  const [movie, movies] = await Promise.all([getMovie(id), getMovies(id)]);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>
        <h1 className={styles.title}>Similar</h1>
        <ul className={styles.list}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              id={movie.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimilarPage;

import { getMovie } from "../../../../../components/movie-info";
import { IParams } from "../page";
import styles from "../../../../../styles/movie-credits.module.css";
import { API_URL } from "../../../../constants";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

const MovieCreditPage = async ({ params: { id } }: IParams) => {
  const movie = await getMovie(id);
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>
        <h1 className={styles.title}>Credits</h1>
        <ul className={styles.credits}>
          {credits.map((credit) => (
            <li key={credit.credit_id}>
              <h2>{credit.known_for_department}</h2>
              <span>{credit.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCreditPage;

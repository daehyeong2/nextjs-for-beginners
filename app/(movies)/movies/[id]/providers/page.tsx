import { getMovie } from "../../../../../components/movie-info";
import { IParams } from "../page";
import styles from "../../../../../styles/movie-providers.module.css";

const ProvidersPage = async ({ params: { id } }: IParams) => {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>
        <h1 className={styles.title}>Providers</h1>
        <ul className={styles.list}>
          {movie.production_companies.map((company) => (
            <li key={company.id}>
              <img src={company.logo_path} alt={company.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProvidersPage;

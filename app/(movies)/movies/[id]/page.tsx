import { API_URL } from "../../../(landing)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

interface IMovie {
  params: { id: string };
}

const MovieDetail = async ({ params: { id } }: IMovie) => {
  console.log("start fetching..");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching..");
  return <h1>{movie.title}</h1>;
};

export default MovieDetail;

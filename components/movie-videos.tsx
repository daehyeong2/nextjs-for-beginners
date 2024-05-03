import { API_URL } from "../app/(landing)/page";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error("something is broken..");
  //   const response = await fetch(`${API_URL}/${id}/videos`);
  //   return response.json();
}

interface IMovieVideosProps {
  id: string;
}

const MovieVideos = async ({ id }: IMovieVideosProps) => {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;

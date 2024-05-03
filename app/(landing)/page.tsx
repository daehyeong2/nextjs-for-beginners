"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? "로딩 중.." : JSON.stringify(movies)}</div>;
};

export default Page;

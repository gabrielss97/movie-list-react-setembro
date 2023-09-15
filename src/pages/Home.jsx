import { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieService from "../api/MovieService";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  }

  async function getMoviesSearch(movieName) {
    const {
      data: { results },
    } = await MovieService.getMoviesSearch(movieName);

    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Header search={true} getMoviesSearch={getMoviesSearch} />
      <div className="flex flex-wrap gap-8 p-12 justify-center">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

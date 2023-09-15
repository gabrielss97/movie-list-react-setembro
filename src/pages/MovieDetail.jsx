import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import MovieService from "../api/MovieService";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie() {
    const { data } = await MovieService.getMovieDetail(id);

    setMovie(data);
    console.log(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="flex-col flex items-center gap-8">
      <Header search={false} />
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
        />

        <div>
          <h1>{movie.tile}</h1>
          <p>{movie.overview}</p>
          <p>R${movie.budget}</p>
        </div>
      </div>

      <Link to={"/"}>Voltar</Link>
    </div>
  );
}

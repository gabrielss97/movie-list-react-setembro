import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MovieCard({ movie = {} }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="flex justify-center flex-col items-center">
        <h3 className="text-2xl">{movie.title}</h3>
        <Link to={`/movie/${movie.id}`}>
          <button className="underline">Ver Detalhes</button>
        </Link>
      </div>
    </div>
  );
}

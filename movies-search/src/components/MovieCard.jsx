import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    console.log(movie.title);
    return navigate("/movieDetail", {
      state: {
        movie,
      },
    });
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:-translate-y-1 hover:border-gray-700">
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Rating */}
        <span className="absolute right-3 top-3 rounded-md bg-black/80 px-2 py-1 text-sm font-medium text-yellow-400">
          ⭐ {movie.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="truncate text-lg font-semibold text-white">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>

        <p className="mt-2 text-sm text-gray-500">{movie.duration}</p>

        <button
          onClick={handleClick}
          className="mt-4 w-full rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

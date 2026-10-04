import { useLocation, useNavigate } from "react-router";

const MovieDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const movie = state?.movie;

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Movie not found</h2>

          <button
            onClick={() => navigate("/movies")}
            className="mt-4 rounded-lg bg-red-600 px-5 py-2 hover:bg-red-700"
          >
            Back to Movies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-gray-950 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1
            onClick={() => navigate("/movies")}
            className="cursor-pointer text-2xl font-bold"
          >
            Movie<span className="text-red-500">Hub</span>
          </h1>

          <button
            onClick={() => navigate("/movies")}
            className="text-sm text-gray-400 hover:text-white"
          >
            ← Back to Movies
          </button>
        </div>
      </nav>

      {/* Movie Details */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-[280px_1fr]">
          {/* Poster */}
          <div>
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-400">
                {movie.genre}
              </span>

              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300">
                {movie.year}
              </span>

              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-yellow-400">
                ⭐ {movie.rating}
              </span>
            </div>

            <h1 className="text-4xl font-bold md:text-5xl">{movie.title}</h1>

            <p className="mt-4 text-gray-400">
              A great movie experience with an engaging story, memorable
              characters and outstanding performances.
            </p>

            {/* Movie Info */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-gray-900 p-4">
                <p className="text-sm text-gray-500">Release Year</p>
                <p className="mt-1 font-semibold">{movie.year}</p>
              </div>

              <div className="rounded-lg bg-gray-900 p-4">
                <p className="text-sm text-gray-500">Genre</p>
                <p className="mt-1 font-semibold">{movie.genre}</p>
              </div>

              <div className="rounded-lg bg-gray-900 p-4">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="mt-1 font-semibold">{movie.duration}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button className="rounded-lg bg-red-600 px-6 py-3 font-medium hover:bg-red-700">
                ▶ Watch Trailer
              </button>

              <button className="rounded-lg border border-gray-700 px-6 py-3 font-medium hover:bg-gray-800">
                ♡ Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;

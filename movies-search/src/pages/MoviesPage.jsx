import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieFilters from "../components/MovieFilters";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      duration: "2h 28m",
      image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      rating: 8.7,
      duration: "2h 49m",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: 9.1,
      duration: "2h 32m",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      year: 2019,
      genre: "Action",
      rating: 8.4,
      duration: "3h 1m",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
      id: 5,
      title: "The Matrix",
      year: 1999,
      genre: "Sci-Fi",
      rating: 8.7,
      duration: "2h 16m",
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      id: 6,
      title: "Gladiator",
      year: 2000,
      genre: "Action",
      rating: 8.5,
      duration: "2h 35m",
      image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      id: 7,
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      rating: 9.3,
      duration: "2h 22m",
      image: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    },
    {
      id: 8,
      title: "Forrest Gump",
      year: 1994,
      genre: "Drama",
      rating: 8.8,
      duration: "2h 22m",
      image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    },
    {
      id: 9,
      title: "The Hangover",
      year: 2009,
      genre: "Comedy",
      rating: 7.7,
      duration: "1h 40m",
      image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    },
    {
      id: 10,
      title: "The Conjuring",
      year: 2013,
      genre: "Horror",
      rating: 7.5,
      duration: "1h 52m",
      image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    },
  ];
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = () => {
    console.log({
      search,
      genre,
      year,
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Explore Movies</h2>
          <p className="mt-2 text-gray-400">
            Search and discover your favorite movies.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 md:flex-row md:items-center">
          {/* Left */}
          <SearchBar
            value={search}
            onChange={setSearch}
            onSearch={handleSearch}
          />

          {/* Right */}
          <MovieFilters
            genre={genre}
            year={year}
            onGenreChange={setGenre}
            onYearChange={setYear}
          />
        </div>

        {/* Movies will come here */}
        <section className="mt-10">
          <h3 className="mb-5 text-xl font-semibold">Movies</h3>

          <div className="rounded-xl border border-dashed border-gray-700 p-10 text-center text-gray-500 grid grid-cols-4 gap-5">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MoviesPage;

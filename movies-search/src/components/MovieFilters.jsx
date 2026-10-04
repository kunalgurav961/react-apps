const MovieFilters = ({ genre, year, onGenreChange, onYearChange }) => {
  return (
    <div className="flex gap-3">
      <select
        value={genre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-gray-300 outline-none focus:border-red-500"
      >
        <option value="">All Genres</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="horror">Horror</option>
        <option value="sci-fi">Sci-Fi</option>
      </select>

      <select
        value={year}
        onChange={(e) => onYearChange(e.target.value)}
        className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-gray-300 outline-none focus:border-red-500"
      >
        <option value="">All Years</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default MovieFilters;

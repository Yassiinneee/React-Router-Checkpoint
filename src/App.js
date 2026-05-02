import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Import CSS
import "./App.css";

// Components
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDescription from "./components/MovieDescription";

function App() {

  // 🎬 Movies state
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://shunrize.com/blog/wp-content/uploads/2010/07/Inception.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Breaking Bad",
      description: "A chemistry teacher becomes a drug kingpin",
      posterURL: "https://www.radiofrance.fr/pikapi/images/53e2b9fb-1944-4aac-aedb-eaec0a7b0231/2048",
      rating: 5,
      trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
  ]);

  // 🔍 Filters
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  // ➕ Add Movie
  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  // 🎯 Filter logic
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <BrowserRouter>
      <Routes>

        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <div className="app">
              <h1>🎬 Movie App</h1>

              {/* Filter */}
              <Filter
                setTitleFilter={setTitleFilter}
                setRateFilter={setRateFilter}
              />

              {/* Add Movie */}
              <AddMovie addMovie={addMovie} />

              {/* Movie List */}
              <MovieList movies={filteredMovies} />
            </div>
          }
        />

        {/* 🎬 Movie Details Page */}
        <Route
          path="/movie/:id"
          element={
            <div className="app">
              <MovieDescription movies={movies} />
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {

  // Hook to navigate between pages
  const navigate = useNavigate();

  return (
    <div
      // When clicking the card → go to details page
      onClick={() => navigate(`/movie/${movie.id}`)}

      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      {/* Movie image */}
      <img src={movie.posterURL} alt={movie.title} width="150" />

      {/* Movie title */}
      <h3>{movie.title}</h3>

      {/* Movie rating */}
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDescription({ movies }) {

  // Get id from URL (/movie/:id)
  const { id } = useParams();

  // Hook to navigate back
  const navigate = useNavigate();

  // Find the movie using id
  const movie = movies.find((m) => m.id === Number(id));

  // If movie not found
  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ padding: "20px" }}>

      {/* Movie title */}
      <h1>{movie.title}</h1>

      {/* Movie description */}
      <p>{movie.description}</p>

      {/* Embedded YouTube trailer */}
      <iframe
        width="600"
        height="350"
        src={movie.trailer}
        title="trailer"
        allowFullScreen
      ></iframe>

      <br /><br />

      {/* Back button */}
      <button onClick={() => navigate("/")}>
        🔙 Back to Home
      </button>

    </div>
  );
}

export default MovieDescription;
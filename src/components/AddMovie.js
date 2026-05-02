import React, { useState } from "react";

function AddMovie({ addMovie }) {

  // Local state to store form inputs
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailer: "",
  });

  // Handle input changes dynamically
  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value, // update specific field
    });
  };

  // Submit new movie
  const handleSubmit = () => {

    // Basic validation
    if (!movie.title || !movie.trailer) {
      alert("Title and trailer are required!");
      return;
    }

    // Send movie to App.js
    addMovie(movie);

    // Reset form after adding
    setMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
      trailer: "",
    });
  };

  return (
    <div>
      <h3>Add Movie</h3>

      {/* Inputs */}
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="posterURL" placeholder="Poster URL" onChange={handleChange} />
      <input name="rating" type="number" placeholder="Rating" onChange={handleChange} />
      <input name="trailer" placeholder="YouTube embed link" onChange={handleChange} />

      {/* Submit button */}
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddMovie;
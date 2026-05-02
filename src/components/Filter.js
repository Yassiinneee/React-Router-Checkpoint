import React from "react";

function Filter({ setTitleFilter, setRateFilter }) {

  return (
    <div>

      {/* Input for title search */}
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      {/* Input for rating filter */}
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        onChange={(e) => setRateFilter(Number(e.target.value))}
      />

    </div>
  );
}

export default Filter;
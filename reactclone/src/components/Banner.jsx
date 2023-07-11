import React from "react";

function Banner() {
  return (
    <div className="hero-section">
      <div className="hero-msg">
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>

        <div className="hero-search">
          <input
            className="hero-input"
            type="text"
            placeholder="Search for a movie, TV show, person....."
          />
          <button className="hero-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

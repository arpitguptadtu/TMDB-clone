import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Favourites.css";

function Favourites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeEmoji = (id) => {
    axios
      .delete(`http://localhost:3000/movies/${id}`)
      .then(() => {
        const filteredMovies = movies.filter((movie) => movie.id !== id);
        setMovies(filteredMovies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="movie-table-container">
        <table className="movie-table">
          <thead>
            <tr>
              <th
                scope="col"
                className="table-heading"
                style={{ paddingLeft: "250px", fontSize: "17px" }}
              >
                Name
              </th>

              <th
                scope="col"
                className="table-heading"
                style={{ paddingLeft: "30px", fontSize: "17px" }}
              >
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr className="movie-row" key={movie.id}>
                <td className="movie-cell" style={{ paddingLeft: "200px" }}>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                    style={{ width: "10rem" }}
                  />
                  <div className="movie-title">{movie.title || movie.name}</div>
                </td>

                <td className="movie-cell">
                  <span
                    className="remove-button"
                    onClick={() => removeEmoji(movie.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Favourites;

import React, { useState, useEffect } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Movies({ title, fetchUrl, isTrailer }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [hovered, setHovered] = useState("");
  const [favourites, setFavourites] = useState([]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  const showEmoji = (id) => {
    setHovered(id);
  };

  const hideEmoji = () => {
    setHovered("");
  };

  const addEmoji = (movie) => {
    const newMovie = {
      id: movie.id,
      title: movie.title || movie.name,
      poster_path: movie.poster_path,
    };
    setFavourites((prevFavourites) => [...prevFavourites, newMovie]);

    axios
      .post("http://localhost:3000/movies", newMovie)
      .then((response) => {
        setMovies([...movies, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeEmoji = (id) => {
    axios
      .delete(`http://localhost:3000/movies/${id}`)
      .then(() => {
        const filteredMovies = movies.filter((movie) => movie.id !== id);
        setMovies(filteredMovies);
        setFavourites((prevFavourites) =>
          prevFavourites.filter((movie) => movie.id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.original_title ||
          movie?.name ||
          movie?.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="movies">
      <h2 className="category-title">{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onMouseOver={() => showEmoji(movie.id)}
            onMouseLeave={() => hideEmoji(movie.id)}
            className="each-movie-box"
          >
            <div
              className="emoji"
              style={{ display: hovered === movie.id ? "block" : "none" }}
            >
              {!favourites.some((fav) => fav.id === movie.id) ? (
                <div className="emojiadd" onClick={() => addEmoji(movie)}>
                  😍
                </div>
              ) : (
                <div className="emojiadd" onClick={() => removeEmoji(movie.id)}>
                  ❌
                </div>
              )}
            </div>
            <img
              onClick={() => handleClick(movie)}
              className={`row-poster ${isTrailer && "row-poster-small"}`}
              src={`${imageBaseUrl}${
                isTrailer ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.name}
            />

            <div className="row-poster-content">
              <div className="addtofav">
                <h2 className="movie-title">
                  {movie?.title ||
                    movie?.original_title ||
                    movie?.name ||
                    movie?.original_name}
                </h2>
              </div>

              <p className="movie-date">
                {movie?.first_air_date || movie?.release_date}
              </p>
            </div>
          </div>
        ))}
        <div className="row-posters-blur"></div>
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Movies;

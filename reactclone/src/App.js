import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import requests from "./requests";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  title="What's Popular"
                  fetchUrl={requests.fetchPopular}
                />
                <Movies
                  title="Free to Watch"
                  fetchUrl={requests.fetchRomanceMovies}
                />
                <Movies
                  title="Latest Trailers"
                  fetchUrl={requests.fetchComedyMovies}
                  isTrailer
                />
                <Movies title="Trending" fetchUrl={requests.fetchTrending} />
              </>
            }
          ></Route>

          <Route path="/fav" element={<Favourites></Favourites>}></Route>

          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

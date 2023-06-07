import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
      <div className="banner_Buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">{movie?.overview}</h1>
      {/* background img */}
    </div>
  );
}

export default Banner;

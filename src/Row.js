import { React, useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row(props) {
  const baseImgUrl = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovie] = useState([]);
  //   useEffect(() => {
  //     axios.get(props.fetchNetflixOriginals).then((response) => {
  //       if (response.data.results) {
  //         setMovie(response.data.results);
  //       }
  //     });

  //   }, [props.fetchNetflixOriginals]);
  //   useEffect(() => {
  //     axios.get(props.fetchUrl).then((response) => {
  //       if (response.data.results) {
  //         setMovie(response.data.results);
  //       }
  //     });
  //   }, [props.fetchUrl]);

  //-------------------------------//
  //   useEffect(() => {
  //     fetch("https://dog.ceo/api/breeds/image/random/3")
  //     .then(response => response.json())
  //         // 4. Setting *dogImage* to the image url that we received from the response above
  //     .then(data => setDogImage(data.message))
  //   },[])

  //-----------------------------------------//
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(props.fetchUrl);
      setMovie(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchdata();
  }, [props.fetchUrl]);

  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>
        <div className="row_posters">
          {/* if you wish to use js in jsx file , enclose it in {} */}
          {movies.map((e) => (
            <img
              key={e.id}
              className={
                props.isLargeRow ? "row_poster row_posterLarge" : "row_poster"
              }
              src={`${baseImgUrl}${
                props.isLargeRow ? e.poster_path : e.backdrop_path
              }`}
              alt={e.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;

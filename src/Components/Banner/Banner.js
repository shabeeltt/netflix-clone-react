import "./Banner.scss";
import axios from "../../axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faList } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  //state for keeping fetched movie to dispaly in the banner
  const [movie, setMovie] = useState();

  //fetches trending movie details
  useEffect(() => {
    axios
      .get(`trending/movie/day?api_key=${API_KEY}&language=en`)
      .then((res) => {
        setMovie(res.data.results[4]);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `
          linear-gradient(
            to left,
            rgba(37, 37, 37, 0.2),
            rgba(37, 37, 37, 0.3),
            rgb(15, 15, 15)
          ),linear-gradient(to top, rgba(37, 37, 37, 0.2),
            rgba(37, 37, 37, 0.3),
            rgb(100, 100, 100,0.4)),url(${
              movie ? imageUrl + movie.backdrop_path : ""
            })
        `,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__content__title">{movie ? movie.title : ""}</h1>
        <div className="banner__content__buttons">
          <button>
            Play
            <FontAwesomeIcon icon={faPlay} style={{ padding: "0 0 0 10px" }} />
          </button>
          <button>
            My List{" "}
            <FontAwesomeIcon icon={faList} style={{ padding: "0 0 0  10px" }} />
          </button>
        </div>
        <h1 className="banner__content__description">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;

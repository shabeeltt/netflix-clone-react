import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import "./RowPost.scss";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";

function RowPost({ title, url }) {
  const [trending, setTrending] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const [videoKey, setVideoKey] = useState([]);

  // Function to handle the display of the popup and fetch video details for movies or TV shows
  // Based on the title (either "Movies" or "Shows"), it sends an API request to fetch video data for the selected item
  // If the response contains video data, it updates the state with the video key of the second video in the results
  // @param obj - The object representing the selected movie or TV show
  const handlerPopup = (obj) => {
    console.log(obj);
    if (title === "Movies") {
      axios
        .get(`/movie/${obj.id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            setVideoKey(response.data.results[0]);
          }
        });
    } else if (title === "Shows") {
      axios
        .get(`/tv/${obj.id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            setVideoKey(response.data.results[0]);
          }
        });
    }

    setPopupContent(obj);
    setShowPopup(true);
  };

  useEffect(() => {
    axios.get(url).then((respose) => {
      setTrending(respose.data.results);
    });
  }, [url]);

  return (
    <div className="container">
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setPopupContent={setPopupContent}
          videoKey={videoKey.key}
          setVideoKey={setVideoKey}
        />
      )}
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters ">
          {trending.map((obj) => (
            <div key={obj.id ? obj.id : ""} className="cards">
              <img
                title={obj.title || obj.name}
                className="row__posters__image"
                src={`${imageUrl + obj.backdrop_path}`}
                alt="Poster"
                onClick={() => handlerPopup(obj)}
              />
              <p className="row__posters__name">{obj.title || obj.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RowPost;

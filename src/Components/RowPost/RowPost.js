import React, { useEffect, useState } from "react";
// import { API_KEY } from "../../Constants/Constants";

import Popup from "../Popup/Popup";
import "./RowPost.scss";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";

function RowPost({ title, url }) {
  const [trending, setTrending] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const [videoKey, setVideoKey] = useState([]);

  const handlerPopup = (obj) => {
    if (title === "Movies") {
      axios
        .get(`/movie/${obj.id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            setVideoKey(response.data.results[1]);
          } else {
            console.log("response is empty");
          }
        });
    } else if (title === "Shows") {
      axios
        .get(`/tv/${obj.id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            setVideoKey(response.data.results[1]);
          } else {
            console.log("response is empty");
          }
        });
    }
    setPopupContent(obj);
    setShowPopup(true);
  };

  useEffect(() => {
    axios

      // .get(`trending/movie/day?api_key=${API_KEY}&language=en`)
      // .get(`trending/tv/day?api_key=${API_KEY}&language=en`)
      .get(url)
      .then((respose) => {
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
        />
      )}
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters ">
          {trending.map((obj) => (
            <img
              title={obj.title || obj.name}
              key={obj.id}
              className="row__posters__image"
              src={`${imageUrl + obj.backdrop_path}`}
              alt="Poster"
              onClick={() => handlerPopup(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RowPost;

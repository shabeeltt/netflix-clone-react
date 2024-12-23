import React, { useEffect, useState, useRef } from "react";
import Popup from "../Popup/Popup";
import "./RowPost.scss";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function RowPost({ title, url }) {
  const [trending, setTrending] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const [videoKey, setVideoKey] = useState([]);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 900;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 900;
  };

  const handlerPopup = (obj) => {
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
    axios.get(url).then((response) => {
      setTrending(response.data.results);
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
        <div className="row__items">
          <MdChevronLeft
            size={30}
            className="slider-arrow"
            style={{ left: "10px" }}
            onClick={slideLeft}
          />
          <div className="row__posters" ref={sliderRef}>
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
          <MdChevronRight
            size={30}
            className="slider-arrow"
            style={{ right: "10px" }}
            onClick={slideRight}
          />
        </div>
      </div>
    </div>
  );
}

export default RowPost;

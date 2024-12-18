import React, { useRef } from "react";
import "./Popup.scss";
import { X } from "lucide-react";
import { imageUrl } from "../../Constants/Constants";
import YouTube from "react-youtube";

function Popup({ setShowPopup, popupContent, setPopupContent, videoKey }) {
  const popupRef = useRef();

  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setShowPopup(false);
    }
  };

  const opts = {
    height: "350",
    width: "680",
    playerVars: {
      autoplay: 0,
    },
  };
  console.log(popupContent);

  return (
    <div className="popup" ref={popupRef} onClick={closePopup}>
      <div className="popup__content">
        <button
          className="popup__content-close"
          onClick={() => {
            setPopupContent({});
            setShowPopup(false);
          }}
        >
          <X />
        </button>
        <div>
          {videoKey ? (
            <YouTube
              style={{ borderRadius: "15px" }}
              videoId={videoKey}
              opts={opts}
            />
          ) : (
            <img
              style={{
                maxWidth: "680px",
                height: "350px",
                borderRadius: "15px",
              }}
              src={`${imageUrl + popupContent.backdrop_path}`}
              alt="Poster"
            />
          )}

          <h1>{popupContent.title || popupContent.name}</h1>
          <hr style={{ color: "#eae3e2" }} />
          <ul>
            <li>
              {popupContent.release_date?.slice(0, 4) ||
                popupContent.first_air_date?.slice(0, 4)}
            </li>
            <li>Type: {popupContent.media_type} </li>
            <li>Language: {popupContent.original_language} </li>
            <li>Rating: {popupContent.vote_average}</li>
          </ul>
          <hr style={{ color: "#eae3e2" }} />

          <p className="popup__content-descritption">{popupContent.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;

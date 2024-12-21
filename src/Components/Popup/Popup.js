import React, { useRef } from "react";
import "./Popup.scss";
import { X } from "lucide-react";
import { imageUrl } from "../../Constants/Constants";
import YouTube from "react-youtube";
import PopupContent from "../PopupContent/PopupContent";

function Popup({
  setShowPopup,
  popupContent,
  setPopupContent,
  videoKey,
  setVideoKey,
}) {
  const popupRef = useRef();

  // Closes the popup when clicking outside the content
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setShowPopup(false);
      setVideoKey([]);
      setPopupContent({});
    }
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <div className="popup" ref={popupRef} onClick={closePopup}>
      <div className="popup__content">
        <button
          className="popup__content-close"
          onClick={() => {
            setPopupContent({});
            setVideoKey([]);
            setShowPopup(false);
          }}
        >
          <X />
        </button>
        <div>
          {videoKey ? (
            <YouTube
              className="trailer"
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
          <PopupContent popupContent={popupContent} />
        </div>
      </div>
    </div>
  );
}

export default Popup;

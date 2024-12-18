import React, { useRef } from "react";
import "./Popup.scss";
import { X } from "lucide-react";
import { imageUrl } from "../../Constants/Constants";
import YouTube from "react-youtube";
import PopupContent from "../PopupContent/PopupContent";

function Popup({ setShowPopup, popupContent, setPopupContent, videoKey }) {
  const popupRef = useRef();

  //closes the popup on clicking anywhere on the screen
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setShowPopup(false);
    }
  };

  //constants used for the youtube react package
  const opts = {
    height: "350",
    width: "680",
    playerVars: {
      autoplay: 0,
    },
  };

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
          <PopupContent popupContent={popupContent} />
        </div>
      </div>
    </div>
  );
}

export default Popup;

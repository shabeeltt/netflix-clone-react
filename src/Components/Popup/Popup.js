import React, { useRef, useState, useEffect } from "react";
import "./Popup.scss";
import { X } from "lucide-react";
import { imageUrl } from "../../Constants/Constants";
import YouTube from "react-youtube";
import PopupContent from "../PopupContent/PopupContent";
import { useUserAuth } from "../../storeContexts/AuthContext";
import { db } from "../../firebase/config";
import { arrayUnion, doc, getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";

function Popup({
  setShowPopup,
  popupContent,
  setPopupContent,
  videoKey,
  setVideoKey,
}) {
  const popupRef = useRef();
  const { user } = useUserAuth();
  const [saved, setSaved] = useState(false);

  const movieId = doc(db, "users", `${user?.email}`);

  // Check if the movie already exists in the playlist
  useEffect(() => {
    const checkIfSaved = async () => {
      if (!user?.email) return;
      const docSnapshot = await getDoc(movieId);
      const playList = docSnapshot.data()?.playList || [];
      const exists = playList.some((movie) => movie.id === popupContent.id);
      setSaved(exists);
    };

    checkIfSaved();
  }, [user?.email, popupContent.id, movieId]);

  // add the movie to wathlist
  const addToList = async () => {
    if (user?.email) {
      try {
        await setDoc(
          movieId,
          {
            playList: arrayUnion({
              id: popupContent.id,
              title: popupContent.title || popupContent.name,
              img: popupContent.backdrop_path,
            }),
          },
          { merge: true }
        );
        setSaved(true);
      } catch (err) {
        console.error("Error adding to playlist:", err);
      }
    } else {
      alert("Please login to save to playlist.");
    }
  };

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
          {saved ? (
            <button className="add-to-list">Added</button>
          ) : (
            <button className="add-to-list" onClick={addToList}>
              Add to List
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;

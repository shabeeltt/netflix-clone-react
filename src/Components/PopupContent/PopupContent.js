import React from "react";

function PopupContent({ popupContent }) {
  return (
    <div>
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
  );
}

export default PopupContent;

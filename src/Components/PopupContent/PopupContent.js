function PopupContent({ popupContent }) {
  return (
    <div>
      <h1>{popupContent.title || popupContent.name}</h1>
      <ul>
        <li>
          <p>
            {popupContent.release_date?.slice(0, 4) ||
              popupContent.first_air_date?.slice(0, 4)}
          </p>
        </li>
        <li>
          <p>Type: {popupContent.media_type} </p>
        </li>
        <li>
          <p>Language: {popupContent.original_language}</p>{" "}
        </li>
        <li>
          <p>Rating: {popupContent.vote_average}</p>
        </li>
      </ul>

      <p className="popup__content-descritption">{popupContent.overview}</p>
    </div>
  );
}

export default PopupContent;

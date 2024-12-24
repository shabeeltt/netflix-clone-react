import React, { useState, useEffect, useRef } from "react";
import { imageUrl } from "../Constants/Constants";
import { useUserAuth } from "../storeContexts/AuthContext";
import { db } from "../firebase/config";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { X } from "lucide-react";

const SavedItems = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useUserAuth();
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 900;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 900;
  };

  useEffect(() => {
    if (!user?.email) return;

    const unsubscribe = onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
      setMovies(doc.data()?.playList || []);
    });

    return () => unsubscribe();
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteItem = async (id) => {
    try {
      const result = movies.filter((item) => item.id !== id);
      await updateDoc(movieRef, {
        playList: result,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="flex">
      {movies.length > 0 && (
        <MdChevronLeft
          size={30}
          className="slider-arrow"
          style={{ left: "10px" }}
          onClick={slideLeft}
        />
      )}
      {movies.length > 0 ? (
        <div className="row__posters" ref={sliderRef}>
          {movies.map((obj) => (
            <div key={obj.id || Math.random()} className="cards">
              <X
                className="delete-from-list"
                onClick={() => deleteItem(obj.id)}
              />

              <img
                title={obj.title}
                className="row__posters__image"
                src={`${imageUrl + obj.img}`}
                alt="Poster"
              />
              <p className="row__posters__name">{obj.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <h3 style={{ textAlign: "center", color: "#999" }}>List is Empty</h3>
        </div>
      )}
      {movies.length > 0 && (
        <MdChevronRight
          size={30}
          className="slider-arrow"
          style={{ right: "10px" }}
          onClick={slideRight}
        />
      )}
    </div>
  );
};

export default SavedItems;

import React from "react";
import "../App.scss";
import Banner from "../Components/Banner/Banner";
import RowPost from "../Components/RowPost/RowPost";
import ReasonToJoin from "../Components/ReasonToJoin/ReasonToJoin";
import Faq from "../Components/Faq/Faq";
import { movies, shows } from "../urls";
import Footer from "../Components/Footer/Footer";

function HomePage() {
  return (
    <div className="App">
      <Banner />
      <RowPost id="movies" title="Movies" url={movies} />
      <RowPost id="shows" title="Shows" url={shows} />
      <ReasonToJoin id="reasontojoin" />
      <Faq id="faq" />
      <Footer />
    </div>
  );
}

export default HomePage;

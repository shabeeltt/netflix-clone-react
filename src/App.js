import "./App.scss";
import NavBar from "../src/Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import ReasonToJoin from "./Components/ReasonToJoin/ReasonToJoin";
import Faq from "./Components/Faq/Faq";
import { movies, shows } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Movies" url={movies} />
      <RowPost title="Shows" url={shows} />
      <ReasonToJoin />
      <Faq />
    </div>
  );
}

export default App;

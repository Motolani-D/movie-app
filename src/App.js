import "./App.css";
import Rating from "./component/Rating";
import AddMovieModal from "./component/Modal";
import MovieList from "./component/MovieList";
import Search from "./component/Search";

import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Bruce Willis Die Hard",
      Year: "2010",
      Rating: "4",
      PosterURL:
        "https://images.moviesanywhere.com/b853294bdcbd7f3f50caa4d4e88bdbb5/7356456a-0b47-4dc1-bd71-39fefae15adb.jpg?h=375&resize=fit&w=250",
    },
    {
      Title: "Pride and Prejuduce",
      Year: "20a9",
      Rating: "5",
      PosterURL:
        "https://images.moviesanywhere.com/39620e4fb032335b636cb169d766202e/a3817776-28cd-4c1a-8e5c-228538134ee5.jpg?h=375&resize=fit&w=250",
    },
    {
      Title: "Pitch Perfect",
      Year: "2010",
      Rating: "5",
      PosterURL:
        "https://images.moviesanywhere.com/28f2638c60932d30d45f22853ea99af9/7e91998e-7f30-4365-89c3-ef12596a4883.jpg?h=375&resize=fit&w=250",
    },
    {
      Title: "Mama Mia",
      Year: "2010",
      Rating: "3",
      PosterURL:
        "https://images.moviesanywhere.com/24b204384e43573f3d961c340d33108f/b90afbd0-c8d0-4fe4-9752-a51489480a05.jpg?h=375&resize=fit&w=250",
    },
  ]);
  return (
    <div className="App">
      <div className="header-items">
        {/* <AddMovie /> */}
        <Rating index="4" />
        <Search />
        <AddMovieModal />
      </div>
      <div className="moviesArea">
        {" "}
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;

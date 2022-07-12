import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmRow from "./Components/FilmRow";
import FIlm from "./Components/Film";
import { useState } from "react";

function App() {
  const [filmRow, setFilmRow] = useState([]);
  const [film, setFilm] = useState([]);
  const [search, setSearch] = useState("");
  const [inputValue, setinputValue] = useState("");

  const findFilm = () => {
    if (search.length >= 1) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=229acdf84a101f9a5384b5070f692468&language=en-US&query=${search}`
      )
        .then((response) => response.json())

        .then((data) => {
          const dataCopy = data.results;
          console.log(data.results);
          setFilmRow(dataCopy);
        });
    }
  };

  const getFilm = (event) => {
    setFilm([]);
    if (event.target.value.length >= 1) {
      setSearch(event.target.value);
      findFilm();
    } else {
      setSearch("");
      setFilmRow([]);
    }
  };

  const filmToWatch = (id) => {
    const filmCopy = [...filmRow].filter((film) => film.id === id);
    setFilm(filmCopy);
    setFilmRow([]);
    setinputValue("");
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Find-film"
            element={
              <FilmRow
                filmToWatch={filmToWatch}
                getFilm={getFilm}
                setinputValue={setinputValue}
                inputValue={inputValue}
                filmRow={filmRow}
              />
            }
          ></Route>
          <Route
            path="/Find-film/one/:id"
            element={<FIlm filmCard={film}></FIlm>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useEffect } from "react";
import HeaderCustomer from "./HeaderCustomer";
import { FaSearch, FaArrowUp } from "react-icons/fa";
import "./search.scss";
import { useNavigate } from "react-router-dom";
import "./filmRow.scss";
import Footer from "./Footer";
import image from "../image.jpg";

function FilmRow({ filmToWatch, getFilm, setinputValue, inputValue, filmRow }) {
  const [up, setUp] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setUp(1);
      } else {
        setUp(0);
      }
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="visitors">
      <div className="pad">
        <HeaderCustomer></HeaderCustomer>
        <div>
          <form className="search">
            <input
              type="search"
              placeholder="enter min 2 letters"
              onChange={(event) => {
                getFilm(event);
                setinputValue(event.target.value);
              }}
              value={inputValue}
              required
            />
            <FaSearch className="fa fa-search"></FaSearch>
          </form>
        </div>
        <div className="cards">
          {filmRow
            .sort((a, b) => b.vote_average - a.vote_average)
            .slice(0, 12)
            .map((item, i) => (
              <div key={item.id} className="card">
                <h2 className="card-title">{item.title}</h2>
                {item.poster_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                    alt="png"
                  />
                ) : (
                  <img src={image} alt="png" />
                )}

                <div className="card-desc">
                  <span>{item.title}</span>

                  <span className="coment"> About Film: {item.overview}</span>
                  <button
                    className="aboutButton"
                    onClick={() => {
                      navigate("/Find-film/one/" + item.id);
                      filmToWatch(item.id);
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
        </div>
        <button
          className={up === 0 ? "backToTop backNone" : "backToTop"}
          onClick={backToTop}
        >
          <FaArrowUp></FaArrowUp>
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default FilmRow;

import React from "react";
import star from "../star.svg";
import { useNavigate } from "react-router-dom";
import HeaderCustomer from "./HeaderCustomer";
import "./film.scss";
import Footer from "./Footer";

function FIlm({ filmCard }) {
  const navigate = useNavigate();
  return (
    <div className="visitors">
      <div className="pad">
        <HeaderCustomer />

        <div className="film">
          {filmCard.map((film, i) => (
            <div className="filmCard" key={film.id}>
              <div className="img">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                  alt="png"
                />
              </div>
              <div className="mainContent">
                <h3 className="titles">
                  {film.title} ({film.release_date.slice(0, 4)}){" "}
                </h3>
                <p className="lang">
                  Original language: <span>{film.original_language}</span>{" "}
                </p>
                <div className="star">
                  <div>
                    <img src={star} alt="star" />
                  </div>
                  <div className="votes">
                    <span>
                      {film.vote_average}
                      <i>/10</i>
                    </span>
                    <span>{film.vote_count} votes</span>
                  </div>
                </div>
                <p className="overview">{film.overview}</p>
                <div className="action">
                  <button type="button" onClick={() => navigate("/Find-film")}>
                    Back to search
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FIlm;

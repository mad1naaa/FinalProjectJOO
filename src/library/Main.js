import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import "./style.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);

  const searchBook = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
            "&maxResults=40"
        );
        setBookData(response.data.items);
        setError(null);
      } catch (error) {
        console.error("API Error:", error);
        setError(
          "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте ещё раз."
        );
      }
    }
  };

  return (
    <>
      <div className="header11">
        <div className="row1">
          <h1>
            Комната без книг подобна
            <br /> телу без души.
          </h1>
          <hr></hr>
        </div>
        <div className="row2">
          <h2>Найди свою книгу</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Введите название книги"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="container11">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;

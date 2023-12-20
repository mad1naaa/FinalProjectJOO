import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/courses">Все курсы</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/team">Команда</Link>
            </li>
            <li>
              <Link to="/pricing">Цены</Link>
            </li>
            <li>
              <Link to="/journal">Журнал</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
            <li>
              <Link to="/library">Библиотека</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">ПОЛУЧИТЬ СЕРТИФИКАТ</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;

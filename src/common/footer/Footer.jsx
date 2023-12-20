import React from "react";
import { blog } from "../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>
              Подписка на рассылку - Следите и получайте последние обновления
            </h1>
            <span>Сделаете правильный шаг</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Введите адрес электронной почты" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>JOO.KZ</h1>
            <span>ОНЛАЙН-ОБРАЗОВАНИЕ И ОБУЧАЮЩАЯ ПРОГРАММА</span>
            <p>Лучший курс для школьников 11 класса</p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Исследовать</h3>
            <ul>
              <li>О нас</li>
              <li>Услуги</li>
              <li>Курсы</li>
              <li>Блог</li>
              <li>Свяжитесь с нами</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Есть вопросы?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Алматы, Розыбакиева 45
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +7 777 456 5667
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                joo.com@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

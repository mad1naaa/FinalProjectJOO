import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="Добро пожаловать в онлайн курс"
              title=" Лучший опыт онлайн-образования"
            />
            <p>
              Правильно планируйте свое будущее!Здесь есть все, что нужно
              соискателю!
            </p>
            <div className="button">
              <Link to="./courses"></Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;

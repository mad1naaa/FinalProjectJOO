import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d76.929016!3d43.238949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skz!4v1652535615693!5m2!1sen!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
  return (
    <>
      <Back title="Контакты" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Контакты</h1>

            <div className="items grid2">
              <div className="box">
                <h4>Наш адрес:</h4>
                <p>г Алматы, мкр-Орбита</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> joo.jz@gmail.com</p>
              </div>
              <div className="box">
                <h4>Телефон:</h4>
                <p> 8777 777 77 77 </p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Имя" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Предмет" />
              <textarea cols="30" rows="10">
                Напишите вашу сообщению здесь
              </textarea>
              <button className="primary-btn">ОТПРАВИТЬ СООБЩЕНИЕ</button>
            </form>

            <h3>Подпишитесь на нас</h3>
            <span>FACEBOOK TWITTER INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

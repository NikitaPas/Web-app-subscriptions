import React from "react";
import Navbar from '../../components/NavBar';
import Button from '@mui/material/Button';
import './about.css'
 
const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
      <div className="about_title">
        <h2>О нас</h2>
      </div>
      <div className="about_text">
        <p className="title_main">Объедините все ваши подписки в одном месте<br></br> контролируйте, управляйте, смотрите расходы<br></br>Все права защищены. 2022
        </p>
      </div>
      <a href = "/login"><Button className="button_in1" variant="contained">Вход</Button></a>
        <a href = "/login"><Button className="button_in2" variant="contained">Регистрация</Button></a>
    </div>
    </>
  );
};
 
export default About;
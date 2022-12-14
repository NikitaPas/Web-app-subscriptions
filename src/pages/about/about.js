import React from "react";
import Navbar from '../../components/NavBar';
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
        <p>Работаем для вас с 2022 года</p>
      </div>
    </div>
    </>
  );
};
 
export default About;
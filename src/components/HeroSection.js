import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Schönheitselixier Salon</h1>
      <p>By Alwina Schäfer</p>
      <div className="card">
        <div className="container">
          <div className="image-first-slide">
            <div className="image__link">
              <div className="image-wrap">
                <img className="alwina" src={"images/AsLifeStyle-1_Page_02.jpg"} />
              </div>
            </div>
          </div>
          <div className="textbox-second-slide">
            <h5 className="alwina-text">
              Hi ich bin Alwina, schön dass du hier bist! Willkommen ich heiße
              Sie willkommen mein Name ist Alwina Schäfer ich biete
              Anamnesebehandlungen Beratung Empfehlungen Tipps und Tricks
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import "../App.css";
import "./HeroSection.css";

function CardItemFirstPage(props) {
  return (
    <>
      <div className="image__item__container">
        <div className="image__text__container" to={props.path}>
          <figure className="figure__image__wrap" data-category={props.label}>
            <img className="ceo__image" alt="CEO Image" src={props.src} />
          </figure>
        </div>
      </div>
    </>
  );
}
function CardItemTextFirstPage(props) {
  return (
    <>
      <li className="text__item__container">
        <div className="image__text__container" to={props.path}>
          <div className="text__container">
            <h5 className="description_ceo_text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Schönheitselixier Salon</h1>
      <p>By Alwina Schäfer</p>
      <div className="image__container">
        <div className="image__wrapper">
          <ul className="card">
            <CardItemFirstPage
              src="images/AsLifeStyle-1_Page_02.jpg"
              label="Geschäftsführerin"
            />
            <CardItemTextFirstPage
              text="Hallo ich bin Alwina, 
                  schön dass du hier bist! 
                  Ich biete Ihnen Anamnese Behandlungen, Beratung, 
                  Empfehlungen, sowie Tipps und Tricks."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

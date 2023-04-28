import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Label } from "@mui/icons-material";
import { Link } from 'react-router-dom';


function CardItemFirstPage(props) {
  return (
    <>
      <li className='container'>
        <div className='image__container' to={props.path}>


          <figure className='image-wrap' data-category={props.label}>
            <img
              className='alwina'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
        </div>
        <div className="text__container">
          <h5 className='alwina-text'>{props.text}</h5>

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
      <ul className="card">
              <CardItemFirstPage 
                  src='images/AsLifeStyle-1_Page_02.jpg'
                  text='Hallo ich bin Alwina, 
                  schön dass du hier bist! 
                  Ich biete Ihnen Anamnese Behandlungen, Beratung, 
                  Empfehlungen, sowie Tipps und Tricks.'
                  label='Geschäftsführerin'
                />
                {/* <img className="alwina" src={"images/AsLifeStyle-1_Page_02.jpg"} /> */}
          {/* <div className="textbox-second-slide">
            <h5 className="alwina-text">
            Hallo ich bin Alwina, 
            schön dass du hier bist! 
            Ich biete Ihnen Anamnese Behandlungen, Beratung, 
            Empfehlungen, sowie Tipps und Tricks.
            </h5>
          </div> */}
        </ul>

    </div>
  );
}

export default HeroSection;

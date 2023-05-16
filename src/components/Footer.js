import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription"></section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact</h2>

            <a href="https://goo.gl/maps/8xj9MTpz1ZLERkTo7">
              <HomeIcon className="footer-icons" /> Frauengartenstrasse 2 72379
              Hechingen
            </a>

            <a>
              <PhoneIcon className="footer-icons" /> +49 174 75 88 339
            </a>

            <a href="mailto:alwina1309@hotmail.de">
              <EmailIcon className="footer-icons" /> alwina1309@hotmail.de
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Impressum</h2>
            <a>Angaben gemäß § 5 TMG</a>

            <p className="">Max Muster</p>
            <p className="Anschrift">Musterweg</p>
            <p className="Anschrift">12345 Musterstadt</p>
            <p className="Anschrift">Vertreten durch:</p>
            <p className="Anschrift">Max Muster</p>
            <p className="Kontakt">Kontakt:</p>
            <p className="Kontakt">Telefon: 01234-789456</p>
            <p className="Kontakt">Fax: 1234-56789</p>
            <a href="mailto:max@muster.de" className="Kontakt">
              E-Mail: max@muster.de
            </a>
            <p className="Ust-Id">Umsatzsteuer-ID:</p>
            <p className="Musterweg">Umsatzsteuer-Identifikationsnummer </p>
            <p className="Musterweg">gemäß §27a Umsatzsteuergesetz: </p>
            <p className="Musterweg">Musterustid.</p>
            <p className="Musterweg">Wirtschafts-ID:</p>
            <p className="Musterweg">Musterwirtschaftsid</p>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/schonheits_elixier_salon/">
              <InstagramIcon className="footer-icons" /> Instagram
            </a>
            <a href="https://api.whatsapp.com/message/OLF4SYOCVNDNO1?autoload=1&app_absent=0">
              <WhatsAppIcon className="footer-icons" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

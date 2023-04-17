import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>

      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            
            <a href='https://goo.gl/maps/8xj9MTpz1ZLERkTo7'><HomeIcon className='footer-icons'/> Frauengartenstrasse 2 72379 Hechingen</a>
            
            <a><PhoneIcon className='footer-icons'/>  +49 174 75 88 339</a> 
            
            <a href="mailto:alwina1309@hotmail.de"><EmailIcon className='footer-icons'/>  alwina1309@hotmail.de</a>
          </div>
          <div className='footer-link-items'>
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
<a href="mailto:max@muster.de" className="Kontakt">E-Mail: max@muster.de</a>
<p className="Ust-Id">Umsatzsteuer-ID:</p>
<p className="Musterweg">Umsatzsteuer-Identifikationsnummer </p>
<p className="Musterweg">gemäß §27a Umsatzsteuergesetz: </p>
<p className="Musterweg">Musterustid.</p>
<p className="Musterweg">Wirtschafts-ID:</p>
<p className="Musterweg">Musterwirtschaftsid</p>

          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'><InstagramIcon className='footer-icons'/> Instagram</Link>
            <Link to='/'><FacebookIcon className='footer-icons'/> Facebook</Link>
            <Link to='/'><YouTubeIcon className='footer-icons'/> Youtube</Link>
            <Link to='/'><TwitterIcon className='footer-icons'/> Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact__container' style={{position:'relative'}}>
      <form className="contact__form">
        <h1 className="contact__form__title">Contactez-nous</h1>
        <hr />
        <div className="form__group">
          <input 
            type="text"
            placeholder="Nom et prénom"
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <input 
            type="email"
            placeholder="Email"
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <input 
            type="tel"
            placeholder="Téléphone"
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <input
            type="text"
            placeholder="Message"
            className="form__input"
            required
          />
        </div>

        <button type="submit" className="form__button">
          Envoyer
        </button>
      </form>
      <div className="contact__separator"></div>
      <div className="contact__info__footer">
        <h1 className="footer__title">
            Rester en contact
        </h1>
        <div className="footer__description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
        </div>
        <hr />
        <div className="footer__contact">
            <h2 style={{paddingBlock:'1rem'}}>Contact Info :</h2>
            {/* icon item*/}
            <div className="footer__contact__li">
                <div className="footer__icon__container"><img loading="lazy" src="/contact/support.svg" alt="Image" /></div>
                <p>H24/7 Service</p>
            </div>
            <div className="footer__contact__li">
                <div className="footer__icon__container"><img loading="lazy" src="/contact/openEnvelope.svg" alt="Image" /></div>
                <p>contact@cliniqueibnrochdberkane.com</p>
            </div>
            <div className="footer__contact__li">
                <div className="footer__icon__container"><img loading="lazy" src="/contact/phone.svg" alt="Image" /></div>
                <p>+212 - 536  614  446<br />
                +212 - 616  569  193</p>
            </div>
        </div>
        <div className="social__links" style={{ display: "flex", gap: "10px", marginBlock: "1rem" }}>
          <Link to="/instagram" style={{ color: "#4CB9C1", textDecoration: "none", width:'38px', height:'38px', background:'white', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <FontAwesomeIcon icon={faInstagram} style={{fontSize:'1.5rem'}} />
          </Link>
          <Link to="/facebook" style={{ color: "#4CB9C1", textDecoration: "none", width:'38px', height:'38px', background:'white', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <FontAwesomeIcon icon={faFacebookF} style={{fontSize:'1.5rem'}} />
          </Link>
          <Link to="/linkedin" style={{ color: "#4CB9C1", textDecoration: "none", width:'38px', height:'38px', background:'white', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:'1.5rem'}} />
          </Link>
        </div>
      </div>
      <div className="copyright" style={{ position: "absolute", bottom: "1rem", width: "100%", textAlign: "center", color: "white", fontSize: "15px" }}>
        Tous les droits sont réservés pour SOFT CACTUS 2024
      </div>
    </div>
  )
}

export default Contact
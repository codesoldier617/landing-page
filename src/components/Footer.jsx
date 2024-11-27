import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {

  return (
    <>
    <div className="footop">
      <img src="img/Group41.png" alt="" />
    </div>
      <div className="footer footerct">
          <div className="foor row">
            <div className="fooc column">
              <h2>Events</h2>
              <ul>
                <li><Link to="#">Next Event</Link></li>
                <li><Link to="#">Past Events</Link></li>
              </ul>
            </div>
            <div className="fooc column">
              <h2>Stay In Touch</h2>
              <ul>
                <li><Link to="#">Newsletter</Link></li>
                <li><Link to="#">Calendar</Link></li>
                <li><Link to="#">Telegram</Link></li>
                <li><Link to="#">Volunteer</Link></li>

              </ul>
            </div>
            <div className="fooc column">
              <h2>Support</h2>
              <ul>
                <li><Link to="#">Donate</Link></li>
                <li><Link to="#">Sponsorship</Link></li>
                <li><Link to="#">Shop</Link></li>
              </ul>
            </div>
            <div className="fooc column">
              <h2>Socials</h2>
              <ul>
                <li><Link to="#">X</Link></li>
                <li><Link to="#">Instagram</Link></li>
                <li><Link to="#">GitHub</Link></li>
                <li><Link to="#">TikTok</Link></li>
                <li><Link to="#">YouTube</Link></li>
              </ul>
            </div>

          </div>
          <div className="hr-row02-content">
            <h2>Subscribe to the mailing list.</h2>
            <p>
            The latest events, news, and resources, sent to your inbox monthly.
            </p>
            <div className="news">
              <form className="subscribe-form" method="POST">
                {" "}
                {/* Corrected `class` to `className` */}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        

          <div className="foobtmrow">
            <div className="btmleft">
              <p>Stay curious.</p>
            </div>
            <div className="btmright">
            <ul className="iconlist">
                <li><Link to="#"><img src="/img/x.png" alt="X" /></Link></li>
                <li><Link to="#"><img src="/img/ig.png" alt="Instagram" /></Link></li>
                <li><Link to="#"><img src="/img/git.png" alt="Github" /></Link></li>
                <li><Link to="#"><img src="/img/tiktok.png" alt="Tiktok" /></Link></li>
                <li><Link to="#"><img src="/img/you.png" alt="Youtube" /></Link></li>
              </ul>
            </div>
          </div>
           
      </div>
    </>
  );
};

export default Footer;

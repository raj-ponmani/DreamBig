import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="contactusmaincont">
      <div className="contactcontain">
        <h2>Contact Us</h2>
        <p className="contentcontact">
          Thank you for considering Dream Big Studios to be a part of your
          special moments. If you have any questions, inquiries, or would like
          to book our services, we would love to hear from you! Please feel free
          to reach out through any of the following contact methods:
        </p>
      </div>
      <div className="details">
        <div className="address-main">
          <div className="datailadd">
            <div className="detailshead">Address</div>
            <div className="street-addr">
              No 35, 1st floor, Vasantha Nagar, 1st Street, Madurai, Tamil Nadu
              625003
            </div>
            <div>
              <b>Google Map Code</b> : 9.906462, 78.099587
            </div>
            <div className="iconstyles">
              <a
                className="ig"
                href="https://instagram.com/dreambigstudio.in?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <img src="/instagramicon.png" height={40} width={40} />
              </a>
              <a
                className="fb"
                href="https://www.facebook.com/dreambigstudio.fb"
                target="_blank"
              >
                <img src="/facebookicon.png" height={40} width={40} />
              </a>
              <a
                className="yt"
                href="https://www.youtube.com/@dreambigstudio.youtube"
                target="_blank"
              >
                <img src="/youtubeicon.png" height={40} width={40} />
              </a>
              <a
                className="wa"
                href={`https://api.whatsapp.com/send/?phone=916379550678&text&type=phone_number&app_absent=0`}
                target="_blank"
              >
                <img src="/whatsappicon.png" height={40} width={40} />
              </a>
            </div>
          </div>
          <div className="contact">
            <div className="detailshead">Contact</div>
            <div className="contact-addr">+ 91 98942 11704</div>
            <div className="contact-addr">+ 91 95859 72207</div>
            <Link>dreambigstudio.in@gmail.com</Link>
          </div>
          <div className="opening">
            <div className="detailshead">Opening Hours</div>
            <div className="date-time1">
              <div>Monday - Saturday</div>
              <div>09:30 am - 08:00 pm</div>
            </div>
            <div className="date-time2">
              <div>Sunday</div>
              <div>Closed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

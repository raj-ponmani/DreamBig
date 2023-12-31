import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="contactusmaincont">
        <div className="contactcontain">
          <p className="contactInfo">Contact Us</p>
          <p className="contentcontact">
            Thank you for considering Dream Big Studios to be a part of your
            special moments. If you have any questions, inquiries, or would like
            to book our services, we would love to hear from you! Please feel
            free to reach out through any of the following contact methods:
          </p>
        </div>
        <div className="details">
          <div className="address-main">
            <div className="datailadd">
              <div className="detailshead">Address</div>
              <div className="street-addr">
                No 35, 1st floor, Vasantha Nagar, 1st Street, Madurai, Tamil
                Nadu 625003
              </div>
              <div>
                <b>Google Map Code</b> : 9.906462, 78.099587
              </div>
              <div className="iconstyles">
                <a
                  href="https://instagram.com/dreambigstudio.in?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <img src="/instagramicon.png" height={40} width={40} />
                </a>
                <a
                  href="https://www.facebook.com/dreambigstudio.fb"
                  target="_blank"
                >
                  <img src="/facebookicon.png" height={40} width={40} />
                </a>
                <a
                  href="https://www.youtube.com/@dreambigstudio.youtube"
                  target="_blank"
                >
                  <img src="/youtubeicon.png" height={40} width={40} />
                </a>
                <a
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
      <div className="description">
        Let us join hands to create cherished memories that will last a
        lifetime. At Dream Big Studios, we're dedicated to capturing your dreams
        one frame at a time.
      </div>
    </div>
  );
};

export default Footer;

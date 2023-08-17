import "./AddressSection.css";
const AddressSection = () => {
  return (
    <div className="group-parent9">
      <div className="group-wrapper">
        <div className="group-parent10">
          <div className="group-parent11">
            <div className="address-parent">
              <div className="address">Address</div>
              <div className="no-35-1st">
                No 35, 1st floor, Vasantha Nagar, 1st Street, Madurai, Tamil
                Nadu 625003
              </div>
              <div className="google-map-code-container">
                <span>
                  <span className="google-map-code">{`Google Map Code `}</span>
                </span>
                <span className="span">
                  <span>:</span>
                  <span> 9.906462, 78.099587</span>
                </span>
              </div>
            </div>
            <div className="opening-hours-parent">
              <div className="opening-hours">Opening Hours</div>
              <div className="sunday-parent">
                <div className="sunday">Sunday</div>
                <div className="closed">Closed</div>
              </div>
              <div className="monday-saturday-parent">
                <div className="sunday">Monday - Saturday</div>
                <div className="closed">09:30 am – 08:00 pm</div>
              </div>
            </div>
            <div className="contact-parent">
              <div className="opening-hours">Contact</div>
              <div className="div7">+ 91 98942 11704</div>
              <div className="div8">+ 91 95859 72207</div>
              <a
                className="dreambigstudioingmailcom"
                href="mailto:dreambigstudio.in@gmail.com"
                target="_blank"
              >
                dreambigstudio.in@gmail.com
              </a>
            </div>
          </div>
          <div className="facebook-3-logo-svgrepo-com-1-parent">
            <div className="facebook-3-logo-svgrepo-com-1">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <a
                className="fb"
                href="https://www.facebook.com/dreambigstudio.fb"
                target="_blank"
              >
                FB
              </a>
            </div>
            <div className="whatsapp-symbol-logo-svgrepo-c">
              <img className="vector-icon2" alt="" src="/vector2.svg" />
              <img className="vector-icon3" alt="" src="/vector3.svg" />
              <img className="vector-icon4" alt="" src="/vector4.svg" />
              <img className="vector-icon5" alt="" src="/vector5.svg" />
              <a
                className="wa"
                href={`https://api.whatsapp.com/send/?phone=916379550678&text&type=phone_number&app_absent=0`}
                target="_blank"
              >
                Wa
              </a>
            </div>
            <div className="youtube-icon-logo-svgrepo-com">
              <img className="vector-icon6" alt="" src="/vector6.svg" />
              <img className="vector-icon7" alt="" src="/vector7.svg" />
              <img className="vector-icon8" alt="" src="/vector8.svg" />
              <a
                className="yt"
                href="https://www.youtube.com/@dreambigstudio.youtube"
                target="_blank"
              >
                Yt
              </a>
            </div>
            <div className="instagram-1-svgrepo-com-1">
              <img className="vector-icon9" alt="" src="/vector9.svg" />
              <img className="vector-icon9" alt="" src="/vector10.svg" />
              <img className="vector-icon9" alt="" src="/vector11.svg" />
              <img className="vector-icon12" alt="" src="/vector12.svg" />
              <img className="vector-icon13" alt="" src="/vector13.svg" />
              <img className="vector-icon14" alt="" src="/vector14.svg" />
              <a
                className="ig"
                href="https://instagram.com/dreambigstudio.in?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                Ig
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-parent">
        <div className="sunday">Contact Us</div>
        <div className="thank-you-for">
          Thank you for considering Dream Big Studios to be a part of your
          special moments. If you have any questions, inquiries, or would like
          to book our services, we would love to hear from you! Please feel free
          to reach out through any of the following contact methods:
        </div>
      </div>
      <div className="let-us-join">
        Let us join hands to create cherished memories that will last a
        lifetime. At Dream Big Studios, we're dedicated to capturing your dreams
        one frame at a time.
      </div>
    </div>
  );
};

export default AddressSection;

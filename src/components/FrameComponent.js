import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";
const FrameComponent = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="rectangle-parent">
      <div className="frame-child" />
      <div className="frame-parent">
        <div className="submit-wrapper" onClick={onFrameContainer1Click}>
          <div className="submit">Submit</div>
        </div>
        <div className="contact-us">Contact Us</div>
        <div className="group-parent">
          <div className="name-parent">
            <div className="name">Name *</div>
            <div className="group-child" />
          </div>
          <div className="email-id-parent">
            <div className="name">Email ID *</div>
            <div className="group-child" />
          </div>
          <div className="event-location-parent">
            <div className="name">Event Location *</div>
            <div className="group-child" />
          </div>
          <div className="more-details-parent">
            <div className="name">More Details</div>
            <div className="group-child" />
          </div>
          <div className="contact-number-parent">
            <div className="name">Contact Number *</div>
            <div className="group-child" />
          </div>
          <div className="event-type-parent">
            <div className="event-type">Event Type *</div>
            <div className="wedding-photography-parent">
              <div className="wedding-photography">{`Wedding Photography `}</div>
              <div className="group-child2" />
            </div>
            <div className="engagement-photography-parent">
              <div className="wedding-photography">{`Engagement Photography `}</div>
              <div className="group-child2" />
            </div>
            <div className="birthday-photography-parent">
              <div className="wedding-photography">{`Birthday Photography `}</div>
              <div className="group-child2" />
            </div>
            <div className="maternity-photography-parent">
              <div className="wedding-photography">Maternity Photography</div>
              <div className="group-child2" />
            </div>
            <div className="others-parent">
              <div className="wedding-photography">Others</div>
              <div className="group-child2" />
            </div>
          </div>
          <div className="event-date-parent">
            <div className="name">Event Date *</div>
            <div className="group-child" />
            <img
              className="solarcalendar-linear-icon"
              alt=""
              src="/solarcalendarlinear.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent1.css";
const FrameComponent1 = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="rectangle-root">
      <div className="frame-item" />
      <div className="time-parent">
        <div className="time">9:41 AM</div>
        <div className="group-container">
          <div className="rectangle-group">
            <div className="group-child8" />
            <div className="to-send-us-a-message-first-le-parent">
              <div className="to-send-us">
                To send us a message, first leave your contact info so we can
                get back to you.
              </div>
              <div className="hi-thanks-for">{`Hi, Thanks for visitingDream Big Studios. `}</div>
            </div>
          </div>
          <img
            className="logo-for-post-22"
            alt=""
            src="/logo-for-post-21@2x.png"
          />
        </div>
        <div className="logo-for-post-3-parent">
          <img
            className="logo-for-post-22"
            alt=""
            src="/logo-for-post-21@2x.png"
          />
          <div className="rectangle-container">
            <div className="group-child9" />
            <div className="name-group">
              <div className="email">Name</div>
              <div className="line-div" />
            </div>
            <div className="email-parent">
              <div className="email">Email</div>
              <div className="line-div" />
            </div>
            <div className="phone-parent">
              <div className="email">Phone</div>
              <div className="line-div" />
            </div>
            <div className="message-parent">
              <div className="email">Message</div>
              <div className="line-div" />
            </div>
            <div className="submit-container" onClick={onFrameContainer1Click}>
              <div className="submit1">Submit</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child13" />
          <div className="logo-for-post-2-wrapper">
            <img
              className="logo-for-post-23"
              alt=""
              src="/logo-for-post-22@2x.png"
            />
          </div>
        </div>
        <div className="rectangle-parent2">
          <div className="group-child14" />
          <div className="ellipse-parent">
            <div className="ellipse-div" />
            <div className="c">C</div>
          </div>
          <div className="i-like-to">
            I like to know the tarrif for wedding cermony
          </div>
        </div>
        <div className="rectangle-parent3">
          <div className="group-child15" />
          <div className="type-your-message">Type your Message....</div>
          <img
            className="iconamoonsend-light"
            alt=""
            src="/iconamoonsendlight.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;

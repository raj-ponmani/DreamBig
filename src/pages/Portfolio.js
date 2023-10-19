import { useState, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
const Portfolio = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onLogoForPost2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="portfoliocontainer">
        <div>
          {" "}
          <img
            className="imageHeader"
            alt=""
            src="/logo-for-post-2@2x.png"
            onClick={onLogoForPost2Click}
          />
        </div>
        <div class="center-container">
          <div className="portfolioimagecontainer">
            <img
              alt=""
              src="/rectangle-19@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />

            <img
              alt=""
              src="/rectangle-22@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />

            <img
              alt=""
              src="/rectangle-27@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />

            <img
              alt=""
              src="/rectangle-30@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />

            <img
              alt=""
              src="/rectangle-33@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />

            <img
              alt=""
              src="/rectangle-20@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              className="custom-class-1"
              alt=""
              src="/rectangle-36@2x.png"
              style={{ objectFit: "cover", height: "400px", width: "730px" }}
            />
            <img
              className="custom-class-1"
              alt=""
              src="/rectangle-37@2x.png"
              style={{ objectFit: "cover", height: "400px", width: "730px" }}
            />

            <img
              alt=""
              src="/rectangle-23@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              alt=""
              src="/rectangle-28@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              alt=""
              src="/rectangle-31@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              alt=""
              src="/rectangle-34@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              alt=""
              src="/rectangle-21@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              alt=""
              src="/rectangle-24@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              className="custom-class-2"
              alt=""
              src="/rectangle-25@2x.png"
              style={{ objectFit: "cover", height: "400px", width: "730px" }}
            />
            <img
              className="custom-class-2"
              alt=""
              src="/rectangle-26@2x.png"
              style={{ objectFit: "cover", height: "400px", width: "730px" }}
            />
            <img
              alt=""
              src="/rectangle-29@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              alt=""
              src="/rectangle-32@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
            <img
              alt=""
              src="/rectangle-35@2x.png"
              style={{ objectFit: "cover", height: "630px", width: "430px" }}
            />
          </div>
          <img
            alt=""
            src="/msg.svg"
            onClick={openFrame}
            height={70}
            width={70}
            className="fixed-image"
          />
        </div>
      </div>

      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent1 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Portfolio;

import { useState, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./GovermentProjects.css";
const GovermentProjects = () => {
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
          <img
            alt=""
            src="/rectangle-38@2x.png"
            style={{ objectFit: "cover", height: "366px", width: "auto" }}
          />

          <img
            alt=""
            src="/rectangle-39@2x.png"
            style={{ objectFit: "cover", height: "366px", width: "auto" }}
          />

          <img
            alt=""
            src="/rectangle-40@2x.png"
            style={{ objectFit: "cover", height: "366px", width: "auto" }}
          />

          <img
            alt=""
            src="/rectangle-41@2x.png"
            style={{ objectFit: "cover", height: "366px", width: "auto" }}
          />

          <img
            alt=""
            src="/rectangle-42@2x.png"
            style={{ objectFit: "cover", height: "366px", width: "auto" }}
          />

          <img
            alt=""
            src="/rectangle-43@2x.png"
            style={{ objectFit: "cover", height: "366px", width: "auto" }}
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

export default GovermentProjects;

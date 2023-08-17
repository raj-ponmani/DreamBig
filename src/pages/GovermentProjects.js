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
      <div className="goverment-projects">
        <img
          className="logo-for-post-2"
          alt=""
          src="/logo-for-post-2@2x.png"
          onClick={onLogoForPost2Click}
        />
        <img
          className="goverment-projects-child"
          alt=""
          src="/rectangle-38@2x.png"
        />
        <img
          className="goverment-projects-item"
          alt=""
          src="/rectangle-40@2x.png"
        />
        <img
          className="goverment-projects-inner"
          alt=""
          src="/rectangle-42@2x.png"
        />
        <img className="rectangle-icon" alt="" src="/rectangle-39@2x.png" />
        <img
          className="goverment-projects-child1"
          alt=""
          src="/rectangle-41@2x.png"
        />
        <img
          className="goverment-projects-child2"
          alt=""
          src="/rectangle-43@2x.png"
        />
        <img className="msg-icon" alt="" src="/msg.svg" onClick={openFrame} />
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

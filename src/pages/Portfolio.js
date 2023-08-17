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
      <div className="portfolio">
        <img
          className="logo-for-post-21"
          alt=""
          src="/logo-for-post-2@2x.png"
          onClick={onLogoForPost2Click}
        />
        <img className="portfolio-child" alt="" src="/rectangle-19@2x.png" />
        <img className="portfolio-item" alt="" src="/rectangle-22@2x.png" />
        <img className="portfolio-inner" alt="" src="/rectangle-27@2x.png" />
        <img className="portfolio-child1" alt="" src="/rectangle-30@2x.png" />
        <img className="portfolio-child2" alt="" src="/rectangle-33@2x.png" />
        <img className="portfolio-child3" alt="" src="/rectangle-20@2x.png" />
        <img className="portfolio-child4" alt="" src="/rectangle-23@2x.png" />
        <img className="portfolio-child5" alt="" src="/rectangle-28@2x.png" />
        <img className="portfolio-child6" alt="" src="/rectangle-31@2x.png" />
        <img className="portfolio-child7" alt="" src="/rectangle-34@2x.png" />
        <img className="portfolio-child8" alt="" src="/rectangle-21@2x.png" />
        <img className="portfolio-child9" alt="" src="/rectangle-24@2x.png" />
        <img className="portfolio-child10" alt="" src="/rectangle-29@2x.png" />
        <img className="portfolio-child11" alt="" src="/rectangle-32@2x.png" />
        <img className="portfolio-child12" alt="" src="/rectangle-35@2x.png" />
        <img className="portfolio-child13" alt="" src="/rectangle-25@2x.png" />
        <img className="portfolio-child14" alt="" src="/rectangle-36@2x.png" />
        <img className="portfolio-child15" alt="" src="/rectangle-26@2x.png" />
        <img className="portfolio-child16" alt="" src="/rectangle-37@2x.png" />
        <img className="ig-001-1" alt="" src="/ig-001-1@2x.png" />
        <img className="msg-icon1" alt="" src="/msg.svg" onClick={openFrame} />
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

import { useState, useEffect } from "react";
import "./Property1Slider1.css";

const images = [
  "/dbs-2404-1@2x.png",
  "/01-1-1@2x.png",
  "/02-1@2x.png",
  "/03-1@2x.png",
  "/04-1@2x.png",
  "/05-1@2x.png",
];

const Property1Slider1 = ({
  property1Slider1Position,
  property1Slider1Top,
  property1Slider1Left,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="property-1slider-1">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentImageIndex ? "active" : ""
          }`}
        >
          <img className="dbs-2404-1-icon" alt="" src={image} />
          <div className="content">
            <div className="welcome-to-dream-big-studio-parent">
              <div className="welcome-to-dream-big-container">
                <p className="welcome-to">
                  <span className="welcome-to1">Welcome to</span>
                </p>
                <p className="dream-big-studio">
                  <span>DREAM BIG STUDIO</span>
                </p>
              </div>
              <div className="unlocking-the-magic">
                "Unlocking the Magic of Memories - Dream Big Studio"
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Property1Slider1;

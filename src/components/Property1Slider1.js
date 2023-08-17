import { useMemo } from "react";
import "./Property1Slider1.css";
const Property1Slider1 = ({
  property1Slider1Position,
  property1Slider1Top,
  property1Slider1Left,
}) => {
  const property1Slider1Style = useMemo(() => {
    return {
      position: property1Slider1Position,
      top: property1Slider1Top,
      left: property1Slider1Left,
    };
  }, [property1Slider1Position, property1Slider1Top, property1Slider1Left]);

  return (
    <div className="property-1slider-1" style={property1Slider1Style}>
      <div className="div">
        <img className="dbs-2404-1-icon" alt="" src="/dbs-2404-1@2x.png" />
        <div className="welcome-to-dream-big-studio-parent">
          <div className="welcome-to-dream-big-container">
            <p className="welcome-to">
              <span>
                <span className="welcome-to1">Welcome to</span>
              </span>
            </p>
            <p className="dream-big-studio">DREAM BIG STUDIO</p>
          </div>
          <div className="unlocking-the-magic">
            "Unlocking the Magic of Memories - Dream Big Studio"
          </div>
        </div>
      </div>
      <div className="div1">
        <img className="dbs-2404-1-icon" alt="" src="/01-1-1@2x.png" />
        <div className="welcome-to-dream-big-studio-parent">
          <div className="welcome-to-dream-big-container">
            <p className="welcome-to">
              <span>
                <span className="welcome-to1">Welcome to</span>
              </span>
            </p>
            <p className="dream-big-studio">DREAM BIG STUDIO</p>
          </div>
          <div className="unlocking-the-magic">
            "Unlocking the Magic of Memories - Dream Big Studio"
          </div>
        </div>
      </div>
      <div className="div2">
        <img className="dbs-2404-1-icon" alt="" src="/02-1@2x.png" />
        <div className="welcome-to-dream-big-studio-parent">
          <div className="welcome-to-dream-big-container">
            <p className="welcome-to">
              <span>
                <span className="welcome-to1">Welcome to</span>
              </span>
            </p>
            <p className="dream-big-studio">DREAM BIG STUDIO</p>
          </div>
          <div className="unlocking-the-magic">
            "Unlocking the Magic of Memories - Dream Big Studio"
          </div>
        </div>
      </div>
      <div className="div3">
        <img className="dbs-2404-1-icon" alt="" src="/03-1@2x.png" />
        <div className="welcome-to-dream-big-studio-parent">
          <div className="welcome-to-dream-big-container">
            <p className="welcome-to">
              <span>
                <span className="welcome-to1">Welcome to</span>
              </span>
            </p>
            <p className="dream-big-studio">DREAM BIG STUDIO</p>
          </div>
          <div className="unlocking-the-magic">
            "Unlocking the Magic of Memories - Dream Big Studio"
          </div>
        </div>
      </div>
      <div className="div4">
        <img className="dbs-2404-1-icon" alt="" src="/04-1@2x.png" />
        <div className="welcome-to-dream-big-studio-parent">
          <div className="welcome-to-dream-big-container">
            <p className="welcome-to">
              <span>
                <span className="welcome-to1">Welcome to</span>
              </span>
            </p>
            <p className="dream-big-studio">DREAM BIG STUDIO</p>
          </div>
          <div className="unlocking-the-magic">
            "Unlocking the Magic of Memories - Dream Big Studio"
          </div>
        </div>
      </div>
      <div className="div5">
        <img className="dbs-2404-1-icon" alt="" src="/05-1@2x.png" />
        <div className="welcome-to-dream-big-studio-parent">
          <div className="welcome-to-dream-big-container">
            <p className="welcome-to">
              <span>
                <span className="welcome-to1">Welcome to</span>
              </span>
            </p>
            <p className="dream-big-studio">DREAM BIG STUDIO</p>
          </div>
          <div className="unlocking-the-magic">
            "Unlocking the Magic of Memories - Dream Big Studio"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Slider1;

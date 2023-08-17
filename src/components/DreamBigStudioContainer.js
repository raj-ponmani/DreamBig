import { useMemo } from "react";
import "./DreamBigStudioContainer.css";
const DreamBigStudioContainer = ({ imageDimensions, propLeft }) => {
  const divStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="div6" style={divStyle}>
      <img className="dbs-2404-1-icon1" alt="" src={imageDimensions} />
      <div className="welcome-to-dream-big-studio-parent3">
        <div className="welcome-to-dream-big-container6">
          <p className="welcome-to12">
            <span>
              <span className="welcome-to13">Welcome to</span>
            </span>
          </p>
          <p className="dream-big-studio6">DREAM BIG STUDIO</p>
        </div>
        <div className="unlocking-the-magic6">
          "Unlocking the Magic of Memories - Dream Big Studio"
        </div>
      </div>
    </div>
  );
};

export default DreamBigStudioContainer;

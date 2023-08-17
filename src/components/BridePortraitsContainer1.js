import { useMemo } from "react";
import "./BridePortraitsContainer1.css";
const BridePortraitsContainer1 = ({
  rectangle4,
  rectangle6,
  bridePortraits,
  propLeft,
  propLeft1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const bridePortraitsStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className="rectangle-parent7" style={groupDivStyle}>
      <img className="group-child20" alt="" src={rectangle4} />
      <img className="group-child20" alt="" src={rectangle6} />
      <div className="bride-portraits" style={bridePortraitsStyle}>
        {bridePortraits}
      </div>
    </div>
  );
};

export default BridePortraitsContainer1;

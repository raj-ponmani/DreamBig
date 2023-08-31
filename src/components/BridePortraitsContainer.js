import BridePortraitsContainer1 from "./BridePortraitsContainer1";
import "./BridePortraitsContainer.css";
const BridePortraitsContainer = () => {
  return (
    <div className="group-parent5">
      <BridePortraitsContainer1
        rectangle4="/rectangle-6@2x.png"
        rectangle6="/rectangle-6@2x.png"
        bridePortraits="Bride Portraits"
      />
      <div className="rectangle-parent8">
        <img className="group-child22" alt="" src="/rectangle-5@2x.png" />
        <div className="groom-portraits">Groom Portraits</div>
      </div>
      <div className="rectangle-parent9">
        <img className="group-child22" alt="" src="/rectangle-61@2x.png" />
        <div className="couple-portraits">Couple Portraits</div>
      </div>
    </div>
  );
};

export default BridePortraitsContainer;

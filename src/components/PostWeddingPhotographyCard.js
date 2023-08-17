import BridePortraitsContainer1 from "./BridePortraitsContainer1";
import "./PostWeddingPhotographyCard.css";
const PostWeddingPhotographyCard = () => {
  return (
    <div className="group-parent6">
      <div className="rectangle-parent10">
        <img className="group-child24" alt="" src="/rectangle-45@2x.png" />
        <div className="post-wedding-photography">Post-Wedding Photography</div>
      </div>
      <div className="rectangle-parent11">
        <img className="group-child24" alt="" src="/rectangle-52@2x.png" />
        <div className="maternity-shoot">Maternity Shoot</div>
      </div>
      <BridePortraitsContainer1
        rectangle4="/rectangle-6@2x.png"
        rectangle6="/rectangle-53@2x.png"
        bridePortraits="Baby Shoot"
        propLeft="882px"
        propLeft1="127px"
      />
    </div>
  );
};

export default PostWeddingPhotographyCard;

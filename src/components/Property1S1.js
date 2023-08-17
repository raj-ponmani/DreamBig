import { useMemo } from "react";
import "./Property1S1.css";
const Property1S1 = ({
  property1S1Position,
  property1S1Top,
  property1S1Left,
}) => {
  const property1S1Style = useMemo(() => {
    return {
      position: property1S1Position,
      top: property1S1Top,
      left: property1S1Left,
    };
  }, [property1S1Position, property1S1Top, property1S1Left]);

  return (
    <div className="property-1s1" style={property1S1Style}>
      <div className="r4">
        <img className="r4-child" alt="" src="/rectangle-44@2x.png" />
        <div className="the-shots-are-container">
          <p className="the-shots-are">
            The shots are fantastic; they are quiet and understandable.
          </p>
          <p className="the-shots-are">{`We want to do more in the future.  Special thanks to Mr. Vasanth & Mr. Deva.. `}</p>
          <p className="the-shots-are">Best wishes</p>
          <p className="the-shots-are">&nbsp;</p>
          <p className="mohammed-musaraf">Mohammed Musaraf</p>
        </div>
      </div>
      <div className="r3">
        <img className="r4-child" alt="" src="/rectangle-441@2x.png" />
        <div className="such-a-fantastic-container">
          <p className="the-shots-are">{`Such a fantastic experience with a fantastic crew.... I would definitely recommend it to my friends and family... `}</p>
          <p className="the-shots-are">&nbsp;</p>
          <p className="the-shots-are">Thank you, Deva and Team....</p>
          <p className="the-shots-are">&nbsp;</p>
          <p className="mohammed-musaraf">Sardar Sabeek</p>
        </div>
      </div>
      <div className="r2">
        <img className="r4-child" alt="" src="/rectangle-442@2x.png" />
        <div className="so-genuine-and-container">
          <p className="the-shots-are">
            So genuine and friendly crew, super best photo and album quality. 
          </p>
          <p className="the-shots-are">
            Best service at best price. If someone asks me about their events, I
            would definitely recommend them.
          </p>
          <p className="the-shots-are">&nbsp;</p>
          <p className="mohammed-musaraf">Saravanan V</p>
        </div>
      </div>
      <div className="r1">
        <img className="r1-child" alt="" src="/rectangle-443@2x.png" />
        <div className="genuinely-nice-and-container">
          <p className="the-shots-are">{`Genuinely nice and well-behaved team.... `}</p>
          <p className="the-shots-are"></p>
          <p className="the-shots-are">{`I booked a 55000 bundle...My uncle's 60th Wedding anniversary. Excellent photo quality and genuine work photos quality great and video also album work are very wonderful my family members all enjoy 60th wedding book Thank you Dream Big studio team.   Special thanks to Mr. Vasanth & Mr. Deva.. 
`}</p>
          <p className="the-shots-are">Best supporting photography's team</p>
          <p className="the-shots-are"> </p>
          <p className="mohammed-musaraf">Sathish</p>
        </div>
      </div>
    </div>
  );
};

export default Property1S1;

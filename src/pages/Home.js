import { useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import BridePortraitsContainer from "../components/BridePortraitsContainer";
import PostWeddingPhotographyCard from "../components/PostWeddingPhotographyCard";
import Property1Slider1 from "../components/Property1Slider1";
import SectionCard from "../components/SectionCard";
import AddressSection from "../components/AddressSection";
import Property1S1 from "../components/Property1S1";
import "./Home.css";
const Home = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPortflioTextClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onRectangleImage11Click = useCallback(() => {
    navigate("/goverment-projects");
  }, [navigate]);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  return (
    <>
      <div className="home">
        <div className="logo-for-post-2-parent">
          <div className="header">
            <img
              className="logo-for-post-24"
              alt=""
              src="/logo-for-post-2@2x.png"
            />
            <div className="about-us-parent">
              <div className="about-us" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="portflio" onClick={onPortflioTextClick}>
                Portflio
              </div>
              <div className="services" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="contact-us1" onClick={openFrame}>
                Contact Us
              </div>
            </div>
          </div>
        </div>
        <Property1Slider1
          property1Slider1Position="absolute"
          property1Slider1Top="178px"
          property1Slider1Left="0px"
        />
        <div className="about-us-g">
          {/* <div className="about-us-group" data-scroll-to="groupContainer1"> */}
          <div className="about-us1">About Us</div>
          <b className="welcome-to-dream">Welcome to Dream Big Studio!</b>
          <div className="welcome-to-dream-container">
            <p className="our-team-of">
              Welcome to Dream Big Studio, your go-to budget-friendly
              photography studio in Madurai! With over five years of experience,
              we are the experts in candid wedding photography and much more.
              From pre-wedding to post-wedding, outdoor adventures to maternity
              shoots, and everything in between, we capture it all with
              exceptional skill and creativity.
            </p>
            <p className="our-team-of">
              Our team of passionate professionals, widely appreciated across
              Tamil Nadu, specializes in creative wedding filmmaking and has a
              unique style that beautifully enhances your precious moments. Not
              only do we serve Madurai and Chennai, but our services extend
              throughout Tamil Nadu, and we're available for assignments all
              over South India.
            </p>
            <p className="our-team-of">
              At Dream Big Studios, we believe in the magic of preserving every
              special moment with perfection. Founded by the dynamic duo of
              Vasanth and Deva, we're driven by our love for visual storytelling
              and creating timeless memories. If you're looking to capture your
              cherished moments with a touch of creativity and expertise, look
              no further than Dream Big Studio – where your dreams become
              stunning realities.
            </p>
          </div>
        </div>

        <div className="our-mission-parent">
          <div>
            <div className="our-mission">Our Mission</div>
            <div className="our-mission-is">
              Our mission is to craft visual magic, one click at a time,
              ensuring that every milestone, every laugh, and every tear is
              frozen in its most genuine form. With unwavering dedication, we
              vow to curate personalized experiences, capturing the essence of
              your journey with precision and flair. Dream Big Studios is
              committed to nurturing a collaborative and joyous atmosphere,
              where dreams are embraced, memories cherished, and hearts forever
              inspired.
            </div>
          </div>
          <div>
            <div className="our-vision">Our Vision</div>
            <div className="at-dream-big1">
              At Dream Big Studios, our vision is to be the guardian of your
              cherished memories, transforming them into captivating tales that
              transcend time. We aim to inspire hearts, weaving emotions and
              creativity into every frame, ensuring your stories are eternally
              cherished and celebrated. With our lenses as storytellers, we
              endeavor to be the beacon of innovation and excellence, setting
              new standards in visual artistry.
            </div>
          </div>
        </div>

        {/* </div> */}

        <div className="our-service-parent" data-scroll-to="groupContainer">
          <div className="our-service">Our Service</div>
          <div className="at-dream-big2">
            At Dream Big Studios, we offer a diverse range of photography and
            videography services that celebrate life's most beautiful moments.
            Our team of skilled professionals is dedicated to ensuring that your
            memories are captured with precision and creativity. Here are the
            services we provide
          </div>
        </div>

        <div className="group-parent2">
          <BridePortraitsContainer />
          <div className="group-parent3">
            <div className="rectangle-parent4">
              <img className="group-child16" alt="" src="/rectangle-4@2x.png" />
              <div className="wedding-photography1">Wedding Photography</div>
            </div>
            <div className="rectangle-parent5">
              <img
                className="group-child16"
                alt=""
                src="/rectangle-51@2x.png"
              />
              <div className="engagement">Engagement</div>
            </div>
            <div className="rectangle-parent6">
              <img
                className="group-child16"
                alt=""
                src="/rectangle-62@2x.png"
              />
              <div className="pre-wedding-photography">
                Pre-Wedding Photography
              </div>
            </div>
          </div>
          <PostWeddingPhotographyCard />
        </div>

        <div className="goverment-project-parent">
          <div className="goverment-project">Goverment Project</div>
          <div className="group-parent4">
            <div className="madurai-natham-flyover-parent">
              <div className="nhai-project">NHAI Project</div>
              <div className="madurai-natham">Madurai - Natham Flyover</div>
            </div>
            <div>
              <img
                className="group-child19"
                alt=""
                src="/rectangle-18@2x.png"
                onClick={onRectangleImage11Click}
              />
            </div>
          </div>
        </div>

        <div>
          {" "}
          <SectionCard />
        </div>
      </div>

      <AddressSection />
      {/* <Property1S1 />
      <img className="msg-icon2" alt="" src="/msg.svg" onClick={openFrame1} /> */}
      {/* 
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )} */}
      {/* {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <FrameComponent1 onClose={closeFrame1} />
        </PortalPopup>
      )} */}
    </>
  );
};

export default Home;

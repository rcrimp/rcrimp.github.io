import React from "react";
import TextLoop from "react-text-loop";
import Social from "../SocialTwo.jsx";

const Slider = () => {
  return (
    <div className="slider-four">
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/slider/4.jpg"
              })`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  Reuben Crimp
                  <br />
                </span>{" "}
                {/* <span className="overlay_effect"></span> */}
                <TextLoop interval={1000}>
									{/* <span className="loop-text">Designer</span> */}
									<span className="loop-text">Comedian</span>
									<span className="loop-text">Event Producer</span>
                  <span className="loop-text">Software Engineer</span>
									
                  
                  {/* <span className="loop-text">Technical Artist</span> */}
                  
                  <span className="loop-text">Information Scientist</span>
                </TextLoop>{" "}
                {/* <span className="overlay_effect"></span> */}
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                Dunedin, NZ
                {/* <span className="overlay_effect"></span> */}
              </span>
            </div>
            {/* <Social /> */}
            <br />
            {/* End designation */}
            <a
              href="#portfolio"
              className="white-fill-bg btn-outline btn-medium"
            >
              SEE PORTFOLIO
            </a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;

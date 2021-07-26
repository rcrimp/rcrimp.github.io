import React from "react";
import Reveal from "react-reveal/Reveal";

const About = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <Reveal effect="fadeInLeft">
                  <div className="image">
                    <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/about/4.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                </Reveal>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <Reveal effect="fadeInLeft">
                  <div className="shane_tm_title">
                    <h3>About Me</h3>
                  </div>
                  <div className="text">
                    <p>
                      Something about creativity and tech-art.
                      I obtained a Masters degree in Information Retrieval because I wanted to work for Google... but now I'd rather leave my soul uncorrupted.
                    </p>
                  </div>
                  <div className="shane_tm_button">
                    <a href="Reuben_Crimp_CV.pdf" download>
                      Technical Resume
                    </a>
                  </div>
                </Reveal>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;

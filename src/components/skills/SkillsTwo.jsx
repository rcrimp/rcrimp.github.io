import React from "react";
import Reveal from "react-reveal/Reveal";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <Reveal effect="fadeInLeft">
                <div className="left">
                  <div className="shane_tm_title">
                    <h3>I have high skills in developing and programming</h3>
                  </div>
                  <div className="text">
                    <p>
                      I am working on a professional, visually sophisticated and
                      technologically proficient, responsive and
                      multi-functional personal portfolio template Shane.
                    </p>
                  </div>
                </div>
                {/* End .left */}
              </Reveal>

              <Reveal effect="fadeInLeft">
                <div className="right">
                  <div className="tokyo_progress">
                    <div className="progress_inner">
                      <span>
                        <span className="label">Web Development</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}

                    <div className="progress_inner">
                      <span>
                        <span className="label">Brand Identity</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}

                    <div className="progress_inner">
                      <span>
                        <span className="label">Logo Design</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}
                  </div>
                </div>
                {/* End .right */}
              </Reveal>
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;

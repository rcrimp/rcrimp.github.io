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
                      I'm passionate about creativity and creative problem solving.
											I have a BSc in Computer Science, MSc in Information Retrieval, and two relevant publications.
											My employment history ranges from game development to data science.
										</p>
										<br />
                  {/* </div>
                  
									<div className="text"> */}
                    <p>
										In 2018 I founded <a href="http://www.dunedincomedy.co.nz/">Dunedin Comedy</a>, an organisation to produce comedy, from open-mics to charity benefits.
										My ambition is to provide stage opportunities for rising talent and to nurture the local comedy community to be inclusive, welcoming, and safe for all people.
										
										</p>
                  </div>
									{/* <div className="shane_tm_button">
                    <a href="Reuben_Crimp_CV.pdf" download>
                      Comedy Producer Resume
                    </a>
                  </div> */}
									<div className="shane_tm_button">
                    <a href="Reuben_Crimp_resume.pdf" download>
                      Technical Resumé
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

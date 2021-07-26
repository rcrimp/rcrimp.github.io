import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFour";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/PortfolioTwo";
import Skills from "../../components/skills/SkillsTwo";
import Video from "../../components/video/VideoTwo";
import Brand from "../../components/Brand";
import Testimonial from "../../components/testimonial/TestimonialTwo";
import News from "../../components/news/NewsTwo";
import CallToAction from "../../components/calltoactions/CallToActionTwo";
import Footer from "../../components/footer/Footer";
import Reveal from "react-reveal/Reveal";

const HomeTwo = () => {
  return (
    <div className="home-four">
      <Header />
      <Slider />
      <About />
      <Portfolio />
      {/* <Skills /> */}
      {/* <Video /> */}

      {/* <div className="shane_tm_section">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div> */}
      {/* End shane_tm_partners */}

      {/* <div className="shane_tm_section">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <Reveal effect="fadeInRight">
                <div className="left">
                  <div className="shane_tm_title">
                    <span>Testimonials</span>
                    <h3>What clients say about my portfolio template</h3>
                  </div>
                </div>
              </Reveal>
              <Reveal effect="fadeInRight">
                <div className="right">
                  <Testimonial />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div> */}
      {/* End  shane_tm_testimonials*/}

      {/* <News /> */}
      {/* End Blog Section */}

      {/* <Video /> */}

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeTwo;

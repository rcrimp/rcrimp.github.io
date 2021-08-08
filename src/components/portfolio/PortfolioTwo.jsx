import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import Video from "../video/VideoTwo";

const generateImageCard = (title, info, subtitle, url) => {
  return (<li>
    <Reveal effect="fadeIn">
      <div className="inner">
        <div className="entry shane_tm_portfolio_animation_wrap">
          <a href={url}>
            <img
              src={url}
              alt={info}
            />
          </a>
        </div>
        <div className="mobile_title">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      </div>
    </Reveal>
  </li>)
}

const generateVideoCard = (title, info, subtitle, id, thumburl) => {
  return (<li>
    <Reveal effect="fadeIn">
      <div className="inner">
        <div className="entry shane_tm_portfolio_animation_wrap">
          <Video videoId={id} bgUrl={thumburl}/>
        </div>
        <div className="mobile_title">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      </div>
    </Reveal>
  </li>)
}

const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <h3>Technical Portfolio</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    <Tab>All</Tab>
                    <Tab>Software</Tab>
										<Tab>Websites</Tab>
                    <Tab>Tech-Art</Tab>
                    <Tab>Other</Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list">
                    <SRLWrapper>
                      <TabPanel>
                        <ul className="gallery_zoom">
													{generateImageCard("3D Cow Tracking", "Visualising locomation tracking data of dairy cows.", "2021", "/img/portfolio/3dcow.jpg")}
                          {/* {generateImageCard("Anatomy Annotator", "Application for the Department of Anatomy (University of Otago), for learning anatomical features on specimens that are too delicate to touch.", "2017", "/img/portfolio/anatomy.jpg")} */}
                          {generateImageCard("VR Mirror Therapy", "Virtual-reality software for chronic stroke rehabilitation, using mirror therapy techniques.", "2015", "/img/portfolio/vrmt.png")}

													{generateImageCard("Data Science Dashboard", "Website for live interaction of dairy farm analyrics. ", "2021", "/img/portfolio/omnieye.jpg")}
													{/* {generateImageCard("Dunedin Comedy", "Website for Dunedin Comedy events.", "2020", "/img/portfolio/dunedincomedy.jpg")} */}
                          {generateImageCard("Matui EPiC Web App", "Dashboard to display aggregated prescription data provided by Pharmac. EPiC: Evaluating Prescribing to inform Care.", "2021", "/img/portfolio/epic.jpg")}

													{generateImageCard("Visual Style Transfer", "Simple style transfer using TensorFlow.", "2020", "/img/portfolio/nst.jpg")}
                          {generateImageCard("Game Dev Lectures", "Summer school game development lectures.", "2018", "/img/portfolio/graphics-talk.jpg")}
                          {/* {generateVideoCard("Tech Art Demo Reel", "", "2010-2015", "WuWEGCVDysA", "/img/video/game-dev-demo-reel-thumbnail-2.jpg")} */}

													{generateImageCard("Twisty Puzzle Collection", "I enjoy solving many kinds of puzzles, especially Rubik's style twisty puzzles. Here is a photo of my collection back in 2016.", "2016", "/img/portfolio/rubiks.jpg")}
                          {generateImageCard("Split Ergonomic Keyboard", "I built an Ergodox; a split ergonomic mechanical keyboard. Prevents wrist strain, and has vastly improved my typing speed.", "2014", "/img/portfolio/ergodox.jpg")}
                          {generateImageCard("Competitive Programming", "Our team qualified for the ACM ICPC Regional Finals in Sydney. Pictured: Me, Phillip Hodder, Simon Finnie, & David Eyers (coach).", "2014", "/img/portfolio/psr.png")}
                          {/* {generateImageCard("Procedural Creativity", "", "/img/portfolio/ai.jpg")} */}
                        </ul>
                      </TabPanel>

                      {/* software */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("3D Cow Tracking", "Visualising locomation tracking data of dairy cows.", "2021", "/img/portfolio/3dcow.jpg")}
                          {generateImageCard("Anatomy Annotator", "Application for the Department of Anatomy (University of Otago), for learning anatomical features on specimens that are too delicate to touch.", "2017", "/img/portfolio/anatomy.jpg")}
                          {generateImageCard("VR Mirror Therapy", "Virtual-reality software for chronic stroke rehabilitation, using mirror therapy techniques.", "2015", "/img/portfolio/vrmt.png")}
                          {/* {generateImageCard("Path Tracing", "", "/img/portfolio/hand.png")} */}
                          
                        </ul>
                      </TabPanel>

											 {/* web */}
											 <TabPanel>
                        <ul className="gallery_zoom">
                          {/* {generateImageCard("Raw Comedy Quest", "Website for the Lower South Island Raw Comedy Quest 2021.", "2021", "/img/portfolio/rawcomedy.jpg")} */}
                          {generateImageCard("Data Science Dashboard", "Website for live interaction of dairy farm analyrics. ", "2021", "/img/portfolio/omnieye.jpg")}
													{generateImageCard("Dunedin Comedy", "Website for Dunedin Comedy events.", "2020", "/img/portfolio/dunedincomedy.jpg")}
                          {generateImageCard("Matui EPiC Web App", "Dashboard to display aggregated prescription data provided by Pharmac. EPiC: Evaluating Prescribing to inform Care.", "2021", "/img/portfolio/epic.jpg")}
                        </ul>
                      </TabPanel>

                      {/* game art */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("Visual Style Transfer", "Simple style transfer using TensorFlow.", "2020", "/img/portfolio/nst.jpg")}
                          {generateImageCard("Game Dev Lectures", "Summer school game development lectures.", "2018", "/img/portfolio/graphics-talk.jpg")}
                          {/* {generateImageCard("Global Illumination, Path Tracing", "?", "/img/portfolio/hand.png")} */}
                          {/* {generateImageCard("Shodō. Ninja Game", "Art", "/img/portfolio/Shodo_screenshot.png")} */}
                          {generateVideoCard("Game Dev History", "", "2010-2015", "WuWEGCVDysA", "/img/video/game-dev-demo-reel-thumbnail-2.jpg")}
                          {/* {generateImageCard("Pixel Art", "Art", "/img/portfolio/pixelart.png")} */}
                          {/* {generateImageCard("Ron Weasley Zombie", "Art", "/img/portfolio/zombies.png")} */}
                          
                        {/* {generateImageCard("Raw Comedy Quest", "", "/img/portfolio/rawcomedy.jpg")} */}
                        </ul>
                      </TabPanel>

                      {/* other */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("Twisty Puzzle Collection", "I enjoy solving many kinds of puzzles, especially Rubik's style twisty puzzles. Here is a photo of my collection back in 2016.", "2016", "/img/portfolio/rubiks.jpg")}
                          {generateImageCard("Split Ergonomic Keyboard", "I built an Ergodox; a split ergonomic mechanical keyboard. Prevents wrist strain, and has vastly improved my typing speed.", "2014", "/img/portfolio/ergodox.jpg")}
                          {generateImageCard("Competitive Programming", "Our team qualified for the ACM ICPC Regional Finals in Sydney. Pictured: Me, Phillip Hodder, Simon Finnie, & David Eyers (coach).", "2014", "/img/portfolio/psr.png")}
                          {/* {generateImageCard("Procedural Creativity", "", "/img/portfolio/ai.jpg")} */}
                        </ul>
                      </TabPanel>
                      
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default PortfolioTwo;

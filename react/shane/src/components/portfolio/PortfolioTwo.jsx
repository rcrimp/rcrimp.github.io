import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import Video from "../video/VideoTwo";

const generateImageCard = (title, info, url) => {
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
          <span>{info}</span>
        </div>
      </div>
    </Reveal>
  </li>)
}

const generateVideoCard = (title, info, id, thumburl) => {
  return (<li>
    <Reveal effect="fadeIn">
      <div className="inner">
        <div className="entry shane_tm_portfolio_animation_wrap">
          <Video videoId={id} bgUrl={thumburl}/>
        </div>
        <div className="mobile_title">
          <h3>{title}</h3>
          <span>{info}</span>
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
                    <h3>Project Portfolio</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    {/* <Tab>All</Tab> */}
                    <Tab>Websites</Tab>
                    <Tab>3D Software</Tab>
                    <Tab>Tech-Art</Tab>
                    <Tab>Comedy</Tab>
                    <Tab>Other</Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list">
                    <SRLWrapper>
                      {/* <TabPanel>
                        <ul className="gallery_zoom">
                        {generateImageCard("Dunedin Comedy", "Web", "/img/portfolio/dunedincomedy.jpg")}
                          {generateImageCard("Raw Comedy Quest", "Web", "/img/portfolio/rawcomedy.jpg")}
                          {generateImageCard("Data Science Dashboard", "Web", "/img/portfolio/omnieye.jpg")}
                          {generateImageCard("Pharmac Dashboard", "Web", "/img/portfolio/epic.jpg")}
                          {generateImageCard("Charity Show", "", "/img/portfolio/charity-2020.jpg")}
                          {generateImageCard("Raw Comedy Quest", "", "/img/portfolio/raw-2021.jpg")}
                          {generateImageCard("Fringe Festival", "", "/img/portfolio/fringe-2021.jpg")}
                          {generateImageCard("Christmas", "", "/img/portfolio/christmas-2020.jpg")}
                          {generateImageCard("3D Cow Tracking", "", "/img/portfolio/3dcow.jpg")}
                          {generateImageCard("Specimen Annotator", "", "/img/portfolio/anatomy.jpg")}
                          {generateImageCard("VR Mirror Therapy", "", "/img/portfolio/vrmt.png")}
                          {generateImageCard("Game Dev Curriculum", "", "/img/portfolio/graphics-talk.jpg")}
                          {generateImageCard("Twisty Puzzles", "", "/img/portfolio/rubiks.jpg")}
                          {generateImageCard("Ergonomic Keyboard", "", "/img/portfolio/ergodox.jpg")}
                          {generateImageCard("Competitive Programming", "", "/img/portfolio/psr.png")}
                          {generateImageCard("Procedural Creativity", "", "/img/portfolio/ai.jpg")}
                        </ul>
                      </TabPanel> */}

                      {/* web */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("Dunedin Comedy", "Web", "/img/portfolio/dunedincomedy.jpg")}
                          {generateImageCard("Raw Comedy Quest", "Web", "/img/portfolio/rawcomedy.jpg")}
                          {/* {generateImageCard("Data Science Dashboard", "Web", "/img/portfolio/omnieye.jpg")} */}
                          {generateImageCard("Pharmac Dashboard", "Web", "/img/portfolio/epic.jpg")}
                        </ul>
                      </TabPanel>

                      {/* software */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("3D Cow Tracking", "", "/img/portfolio/3dcow.jpg")}
                          {generateImageCard("VR Mirror Therapy", "", "/img/portfolio/vrmt.png")}
                          {generateImageCard("Specimen Annotator", "", "/img/portfolio/anatomy.jpg")}
                          {/* {generateImageCard("Path Tracing", "", "/img/portfolio/hand.png")} */}
                          
                        </ul>
                      </TabPanel>

                      {/* game art */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("Visual Style Transfer", "", "/img/portfolio/nst.jpg")}
                          {generateImageCard("Game Development Lectures", "", "/img/portfolio/graphics-talk.jpg")}
                          {/* {generateImageCard("Global Illumination, Path Tracing", "?", "/img/portfolio/hand.png")} */}
                          {/* {generateImageCard("Shodō. Ninja Game", "Art", "/img/portfolio/Shodo_screenshot.png")} */}
                          {generateVideoCard("Tech Art Demo Reel", "", "WuWEGCVDysA", "/img/video/game-dev-demo-reel-thumbnail-2.jpg")}
                          {/* {generateImageCard("Pixel Art", "Art", "/img/portfolio/pixelart.png")} */}
                          {/* {generateImageCard("Ron Weasley Zombie", "Art", "/img/portfolio/zombies.png")} */}
                          
                        {/* {generateImageCard("Raw Comedy Quest", "", "/img/portfolio/rawcomedy.jpg")} */}
                        </ul>
                      </TabPanel>

                      {/* comedy */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("Down to Mirth", "", "/img/portfolio/fringe-2021.jpg")}
                          {generateImageCard("Charity Show", "", "/img/portfolio/charity-2020.jpg")}
                          {generateImageCard("Filming", "", "/img/portfolio/video.jpg")}
                          {generateImageCard("Raw Comedy Quest", "", "/img/portfolio/raw-2021.jpg")}
                          {generateImageCard("Community Building", "", "/img/portfolio/ODT.jpg")}
                          {generateImageCard("Christmas Show", "", "/img/portfolio/christmas-2020.jpg")}
                          
                          {/* {generateVideoCard("Raw", "", "4kgFpo1758I", "/img/video/raw.jpg")} */}
                          {/* {generateVideoCard("Rusty", "", "uQhI70Vv_9w", "/img/video/rusty.jpg")} */}
                          {/* {generateVideoCard("CH39", "", "8WKA6xhB5ms", "/img/video/ch39.jpg")} */}
                          
                        </ul>
                      </TabPanel>

                      {/* other */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("Twisty Puzzles", "", "/img/portfolio/rubiks.jpg")}
                          {generateImageCard("Split Keyboards", "", "/img/portfolio/ergodox.jpg")}
                          {generateImageCard("Competitive Programming", "", "/img/portfolio/psr.png")}
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

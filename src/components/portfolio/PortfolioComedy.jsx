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
    <div className="shane_tm_section" id="comedy">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <h3>Comedy Productions</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    {/* <Tab>All</Tab> */}
                    <Tab>Productions</Tab>
										<Tab>Websites</Tab>
										<Tab>Video Editing</Tab>
										<Tab>Other</Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list">
                    <SRLWrapper>
										
                      {/* shows */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("Raw Comedy Quest", "I produce the local heats of the annual Raw Comedy Quest, providing stage opportunities for rising talent.", "2021", "/img/portfolio/raw-2021.jpg")}
													{generateImageCard("Charity Show", "I produce the annual breast cancer charity benefit for the Breast Cancer Foundation NZ.", "2020", "/img/portfolio/charity-2020.jpg")}
                          {generateImageCard("Christmas Show", "I occasionaly produce pro-shows to showcase the talented comedians we ahve in Dunedin.", "2020", "/img/portfolio/christmas-2020.jpg")}
                        </ul>
                      </TabPanel>

											{/* web */}
											<TabPanel>
                        <ul className="gallery_zoom">
                          {generateImageCard("Raw Comedy Quest", "Website for the Lower South Island Raw Comedy Quest 2021.", "2021", "/img/portfolio/rawcomedy.jpg")}
                          {/* {generateImageCard("Data Science Dashboard", "Web", "/img/portfolio/omnieye.jpg")} */}
                          {generateImageCard("Dunedin Comedy", "Website for Dunedin Comedy events.", "2020", "/img/portfolio/dunedincomedy.jpg")}
                        </ul>
                      </TabPanel>

                      {/* video editing */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {generateVideoCard("Raw", "", "2020", "4kgFpo1758I", "/img/video/raw.jpg")}
                          {generateVideoCard("Rusty", "", "2021", "uQhI70Vv_9w", "/img/video/rusty.jpg")}
                          {/* {generateVideoCard("CH39", "", "2020", "8WKA6xhB5ms", "/img/video/ch39.jpg")} */}
													{generateImageCard("Fringe Chats", "Filming in the Allied Productions green screen studio.", "2021", "/img/portfolio/video.jpg")}
                        </ul>
                      </TabPanel>

                      {/* other */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          {/* {generateImageCard("Twisty Puzzle Collection", "I enjoy solving many kinds of puzzles, especially Rubik's style twisty puzzles. Here is a photo of my collection back in 2016.", "2016", "/img/portfolio/rubiks.jpg")} */}
                          {/* {generateImageCard("Split Ergonomic Keyboard", "An Ergodox, split ergonomic mechanical keyboard. Prevents wrist strain, and has vastly improved my typing speed.", "2014", "/img/portfolio/ergodox.jpg")} */}
                          {/* {generateImageCard("Competitive Programming", "Our team qualified for the ACM ICPC Regional Finals in Sydney. Pictured: Me, Phillip Hodder, Simon Finnie, & David Eyers (coach).", "2014", "/img/portfolio/psr.jpg")} */}
													{generateImageCard("Down to Mirth", "I produced a Fringe Festival comedy show with fellow comedian Josh Ritchie.", "2021", "/img/portfolio/fringe-2021.jpg")}
										      {generateImageCard("Award Winning MC", "I won the 2020 Dunedin Comedy Award for Best Compere.", "2020", "/img/portfolio/blue.jpg")}
													{generateImageCard("Community Leader", "I do what I can to help nurture and grow the local comedy scene.", "2019", "/img/portfolio/ODT.jpg")}
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

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Reveal from "react-reveal/Reveal";

const Video = (props) => {
  const bgUrl = props.bgUrl;
  console.log(bgUrl);

  const [isOpen, setOpen] = useState(false);
  return (
    <div className="shane_tm_section">
      <div className="shane_tm_business_video">
        <div className="bg">
          <div
            className="image jarallax"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + bgUrl
              })`,
            }}
          ></div>
          <div className="overlay"></div>
        </div>
        {/* End .bg */}

        <div className="content">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={props.videoId}
            onClose={() => setOpen(false)}
          />

          <span className="rounded" onClick={() => setOpen(true)}></span>
          <div className="shane_tm_video_button">
          </div>
        </div>
        {/* End .content */}
      </div>
      {/* End .shane_tm_business_video */}
    </div>
    // End .shane_tm_section
  );
};

export default Video;

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import citrine from "../assets/citrine-earring.mov";
import teardrop from "../assets/tear-drop.mov";
import xearring from "../assets/x-earrings.mov";
import CircularProgress from '@mui/material/CircularProgress';

const videos = [citrine, teardrop, xearring];

const PageHero = ({ title, product }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([null, null, null]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideo((currentVideo + 1) % videos.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentVideo]);

  useEffect(() => {
    const prevVideo = (currentVideo - 1 + videos.length) % videos.length;
    const nextVideo = (currentVideo + 2) % videos.length;

    // Pause the previous video
    if (videoRefs.current[prevVideo]) {
      videoRefs.current[prevVideo].pause();
    }

    // Play the next video
    if (videoRefs.current[nextVideo]) {
      videoRefs.current[nextVideo].play();
    }
  }, [currentVideo]);
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };


  const randomIndex = Math.floor(Math.random() * videos.length);
  const selectedSource = videos[randomIndex];  return (
    <Wrapper>
      <div className="section-center">
        <div className="video-dekstop">
        <VideosContainer>
        {videos.map((video, index) => (
          <div key={index} className="VideoHolder">
            {isLoading[index] ? (
              <div className="ProgressHolder">
              <CircularProgress />
              </div>
            ) : (
              <Video
                ref={(el) => (videoRefs.current[index] = el)}
                autoPlay={
                  index === currentVideo ||
                  index === (currentVideo + 1) % videos.length
                }
                loop
                muted
                playsInline
                onLoadedData={() => handleVideoLoad()}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            )}
          </div>
        ))}
      </VideosContainer>
        </div>

        <div className="video-mobile">
          <VideosContainer>
          {isLoading ? (
              <div className="ProgressHolder">
              <CircularProgress />
              </div>
            ) : (
           
            <Video
              key={0}
              ref={(el) => (videoRefs.current[0] = el)}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => handleVideoLoad()}
            >
              <source src={selectedSource} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
)}

          </VideosContainer>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .ProgressHolder{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .section-center {
    padding-top: 1%;
  }

  .video-dekstop{
    width:100%;
    padding-right:0%;
    margin-right:0%;
  }
  .video-mobile {
    display: none;
  }

  @media (max-width: 992px) {
    padding-top: 20%;
    .video-mobile {
      display: unset;
    }

    .video-dekstop {
      display: none;
    }
  }
  @media (max-width: 767px) {
    
    .section-center {
      padding-top: 10%;
    }
  }
`;

const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 100vh;
  overflow: hidden;
  border: none;
  border-radius: 8px;
  
  @media (max-width: 767px) {
    width: 100%;
    height:20vh;
  }

  @media (min-width: 800px) and (max-width: 950px){
    width: 100%;
    height:20vh;
  }

`;

const Video = styled.video`
  flex: 1;
  height: 100%;
  object-fit: cover;
`;

export default PageHero;

import React from "react";
import styled from "styled-components";

const TickerWrapper = styled.div`
  /* Ticker.css */
  background-color: #a6705d;
  overflow: hidden;
  position: relative;
  height: 50px; /* Set the desired height */
  border-color: black;
  border-width: 1px;
  border-style: solid;

  .ticker-content {
    display: inline-block;
    white-space: nowrap;
    animation: slide-left 60s linear infinite; /* Updated animation duration */
    vertical-align: middle;
    text-align: center;
  }

  .ticker-item {
    display: inline-flex;
    align-items: center;
    color: black;
    font-size: 20px;
    font-weight: 200px;
    padding: 0 20px; /* Adjust spacing between items */
  }

  .ticker-item:not(:last-child)::after {
    content: "•";
    margin-left: 20px;
    font-size: 18px;
  }

  @keyframes slide-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Ticker = ({ content }) => {
  // Duplicate the content array to ensure seamless looping
  const duplicatedContent = [...content, ...content];

  return (
    <TickerWrapper>
      <div className="ticker-content">
        {duplicatedContent.map((item, index) => (
          <div
            className="ticker-item"
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
        ))}
      </div>
    </TickerWrapper>
  );
};

export default Ticker;

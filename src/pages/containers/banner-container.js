import React from 'react';

function BannerContainer(props) {
  return(
    <div className="banner" style = {props.style}>
      <div className="background-dark">
        <div className = "text-container">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default BannerContainer;

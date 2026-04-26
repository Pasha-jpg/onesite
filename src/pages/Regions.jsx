// src/pages/Regions.jsx
import React from 'react';
import './Regions.css'; // Import the CSS file
const Regions = () => {
  return (
    <div className="regions-page">
      <div className="region-heading">
        <h2>  REGIONS IN AUSTRALIA   </h2>
        <p>Welcome to the regions page!</p>
     </div>
       
      
      <div className="g">
        <div className="r-image">
            <h3>New South Wales</h3>
              <a href="/Regions" > <span className="location">Sydney</span> </a>
              <img id="syd"  src="../../syd.jpg" alt="sydney-image" /> 
        </div>
        <div className="r-image">
            <h3>Victoria</h3>
              <a href="/Regions">
              <span className="location">Melbourne</span>
              </a>
              <img id="vic" src="/onesite/images/vic.jpg" alt="vic-image" /> 
        </div>
        <div className="r-image">
            <h3>Queensland</h3>
              <a href="/Regions">
              <span className="location">Brisbane</span>
              </a>
              <img id="bri" src="/onesite/images/bri.jpg" alt="bri-image" /> 
        </div>
      </div>             
    </div>
  );
};

export default Regions;

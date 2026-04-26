// src/pages/News.jsx
import React from 'react';
import './News.css'; // Import the CSS file
const News = () => {
  return (
          
      <>  
    <h2 className="section-title">LATEST NEWS</h2>
    <div className="newscontent">
      <div className="newsgrid">
         <div className="item">                                 
            <h3><a href="/">New Rental Regulations Announced </a></h3>
            <p>
               Sed rutrum urna id tellus euismod gravida. Praesent
               placerat, mauris ac pellentesque fringilla, tortor libero
               condimen.
              </p>
              <span className="meta">
                <span className="author"><i className="user"></i> Admin
                </span>
                <span className="date">
                  <i className="clock"></i> 2024-08-06
                </span>
              </span>
        </div>

        <div className="item">                                 
            <h3><a href="/">Customer Stories: Finding the Perfect Home </a></h3>
            <p>
               Sed rutrum urna id tellus euismod gravida. Praesent
               placerat, mauris ac pellentesque fringilla, tortor libero
               condimen.
              </p>
            <span className="meta">
                <span className="author"><i className="user"></i> Admin
                </span>
                <span className="date">
                  <i className="clock"></i> 2024-08-06
                </span>
              </span>
        </div>
        <div className="item">                                 
            <h3><a href="/">Top 10 Rental Properties in Sydney </a></h3>
            <p>
               Sed rutrum urna id tellus euismod gravida. Praesent
               placerat, mauris ac pellentesque fringilla, tortor libero
               condimen.
            </p>
            <span className="meta">
                <span className="author"><i className="user"></i> Admin
                </span>
                <span className="date">
                  <i className="clock"></i> 2024-08-06
                </span>
            </span>
        </div>

      </div>     
    </div>
  </>
    
  );
};

export default News;


 
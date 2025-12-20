import React from 'react'
import "../App.css"
function Hero() {
  return (
    <div className="hero">
        <div className="text">
          <div className="head-box">
            <p className="heading">We are here to increase your productivity</p>
            <p className="sample-text">
              The curious cat jumped over the fence while children laughed,
              sunlight sparkled on the river, birds sang, and flowers bloomed
              unlight sparkled on the river, birds sang, and flowers bloomed.
            </p>
          </div>
          <div className="buttons">
            <button>Try Free Trail</button>
            <button>View Demo</button>
          </div>
        </div>
        <div className="pic">
          <div className="img"></div>
        </div>
      </div>
  )
}

export default Hero
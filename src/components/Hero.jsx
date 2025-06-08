import React from "react";
// import "./app.css"; // make sure this path matches your project

const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">YOUR FEET DESERVE THE BEST</h1>
          <p className="hero-copy">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">Category</button>
          </div>
          <div className="hero-available">
            <p className="small-label">Also available on</p>
            <div className="partner-logos">
              <img src="./images/flipkart.png" alt="Flipkart" />
              <img src="./images/amazon.png" alt="Amazon" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="./images/hero-image.png" alt="Shoe hero" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

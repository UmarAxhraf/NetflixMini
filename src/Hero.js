import React from "react";
import "./index.css";

const Hero = () => {
  return (
    <div className="hero_div">
      <div className="img_div">
        <img
          src={"/home_cinema.png"}
          width={300}
          height={250}
          layout="responsive"
          alt="home cinema"
        />
      </div>
      <h1 className="hero_h1">Welcome to Netflix Mini</h1>
      <p className="hero_p">Produce FILM feature, TELEVISION and GAME.</p>
    </div>
  );
};

export default Hero;

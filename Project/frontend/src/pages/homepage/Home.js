import React from "react";
import BannerBackground from "../../assets/images/home-banner-background.png";
import BannerImage from "../../assets/images/home-banner-image.png";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            FlexFitness Gyms
          </h1>
          <p className="primary-text">
            Pages list
          </p>
          <div id="button-container">
  <div class="button-column">
    <Link to="/inventory_home">
      <button class="secondary-button yellow">Inventory</button>
    </Link>
    <br />
    <Link to="/customer_home">
      <button class="secondary-button blue">Customer</button>
    </Link>
    <br />
    <Link to="/shophome">
      <button class="secondary-button green">OnlineShop</button>
    </Link>
    <br />
  
    <Link to="/payment_home">
      <button class="secondary-button purple">Payment</button>
    </Link>
  </div>
  <div class="button-column">
    <Link to="/Doctor_home">
      <button class="secondary-button red">Doctor</button>
    </Link>
    <br />
    <Link to="/Trainer_home">
      <button class="secondary-button purple-dark">Trainer</button>
    </Link>
    <br />
    <Link to="/Fitness_home">
      <button class="secondary-button pink">Fitness</button>
    </Link>
    <br />
    <Link to="/Nutrition_home">
      <button class="secondary-button orange">Nutrition</button>
    </Link>
  </div>
</div>



        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

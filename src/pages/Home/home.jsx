import { Link } from "react-router-dom";
import LoginAction from "../../components/Action/Login/loginAction";
import CardOne from "../../components/Cards/cardOne";
import Navbar from "../../components/Navbar/navbar";

import { cardData } from "./data";

import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar>
        <LoginAction />
      </Navbar>

      <div className="hero-section">
        <div className="inner-container">
          <div className="group-togther">
            <div className="hero-text">
              <h2 className="title">
                Welcome to My<span>Jobs</span>
              </h2>
              <div>
                <Link className="get-started-btn" to="/login">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="hero-img">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overview">
        <div className="inner-container">
          <div className="why-us">
            <div className="section-title">Why Us</div>

            <div className="card-section">
              {cardData.map((info) => {
                return (
                  <CardOne
                    key={info.id}
                    title={info.title}
                    description={info.description}
                  />
                );
              })}
            </div>
          </div>

          <div className="companies">
            <div className="section-title">Companies Who Trust Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

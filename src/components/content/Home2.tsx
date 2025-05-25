import React from "react";
import { Logo } from "@interfaces/common";

// interface HomeProps {
//     logo: Logo;
// }
type HomeProps = {
  logo: Logo;
};

const Home2: React.FC<HomeProps> = ({ logo }) => {
  return (
    <div>
      <section id="home">
        <div className="home__container">
          <div className="home__content">
            <div className="home__text-wrapper">
              <span className="home__greeting">Welcome to my world</span>
              <h1 className="home__name">
                <span className="home__name--highlight">{logo.name}</span>
              </h1>
              <div className="home__title-wrapper">
                <h2 className="home__title">
                  <span className="home__title--gradient">FRONTEND</span>
                  <span className="home__title--accent">DEVELOPER</span>
                </h2>
              </div>
              <p className="home__description">
                기술을 통해 사람들의 불편함을 해결하고 더 나은 경험을 제공하는
                개발자 윤지혜입니다.
                <br />
                Based in Seoul, South Korea
              </p>
              <div className="home__buttons">
                <a
                  className="home__button home__button--primary"
                  href="#contact"
                >
                  <span className="button__text">Get in Touch</span>
                  <span className="button__icon">→</span>
                </a>
                <a
                  className="home__button home__button--secondary"
                  href="#work"
                >
                  <span className="button__text">View Projects</span>
                  <span className="button__icon">↗</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home__image-wrapper">
            <div className="home__image-container">
              <img className="home__avatar" src={logo.img} alt="portfolio" />
              <div className="home__avatar__glow"></div>
              <div className="home__avatar__border"></div>
            </div>
            <div className="home__tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-item">TypeScript</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">Next.js</span>
            </div>
          </div>
        </div>
        <div className="home__scroll-indicator">
          <span className="scroll-text">Scroll Down</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>
    </div>
  );
};

export default Home2;

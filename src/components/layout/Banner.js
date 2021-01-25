import { Link } from "react-router-dom";

import BannerLogo from "../../media/OrangeBee.svg";

const Banner = () => {
  return (
    <nav className="banner">
      <div className="banner-logo-container">
        <Link to="/">
          <img
            src={BannerLogo}
            alt="A circular logo with a white background. Where an orange bee sits on the right and a green leaf on the bottom left. The text says leaf and bee gardens"
          />
        </Link>
      </div>
      <div className="banner-links-container">
        <ul className="banner-links">
          <li className="banner-link">
            <Link to="/">HOME</Link>
          </li>
          <li className="banner-link-dot">
            <i className="fas fa-circle"></i>
          </li>
          <li className="banner-link">
            <Link to="/services">SERVICES</Link>
          </li>
          <li className="banner-link-dot">
            <i className="fas fa-circle"></i>
          </li>
          <li className="banner-link">
            <Link to="/design">DESIGN</Link>
          </li>
          <li className="banner-link-dot">
            <i className="fas fa-circle"></i>
          </li>
          <li className="banner-link">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="banner-link-dot">
            <i className="fas fa-circle"></i>
          </li>
          <li className="banner-link">
            <Link to="/news">NEWS</Link>
          </li>
          <li className="banner-link-dot">
            <i className="fas fa-circle"></i>
          </li>
          <li className="banner-link">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Banner;

import { Link } from "react-router-dom";

import HomeLogo from "../../media/OrangeBee.svg";

const Home = () => {
  return (
    <div className="route home">
      <img
        src={HomeLogo}
        alt="A circular logo with a white background. Where an orange bee sits on the right and a green leaf on the bottom left. The text says leaf and bee gardens"
      />
      <p className="home-subtitle">Connecting people with nature & gardens</p>
    </div>
  );
};

export default Home;

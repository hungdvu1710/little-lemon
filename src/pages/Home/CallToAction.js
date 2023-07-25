import RestaurantFoodImage from '../../assets/restauranfood.jpg';
import { useNavigate } from "react-router-dom";
import './CallToAction.css';

const CallToAction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking");
  };
  return (
    <section className="call-to-action">
      <div id='hero-content'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button aria-label='On Click' onClick={handleClick}>Reserve a Table</button>
      </div>
      <img src={RestaurantFoodImage} alt="Restaurant Food" />
    </section>
  )
};

export default CallToAction;

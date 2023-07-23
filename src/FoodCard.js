import './FoodCard.css'

const FoodCard = ({ image, description, name, price }) => {
  return (
    <div className='food-card'>
      <img src={image} alt={name} />
      <div className='food-card-body'>
        <div className='food-card-title'>
          <h3>{name}</h3>
          <h5>{price}</h5>
        </div>
        <p>{description}</p>
        <h3 className='order-button'>Order for delivery</h3>
      </div>
    </div>
  );
};

export default FoodCard;
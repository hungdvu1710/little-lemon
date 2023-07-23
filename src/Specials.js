import './Specials.css';
import FoodCard from './FoodCard';
import GreekSalad from './assets/greek salad.jpg';
import LemonDessert from './assets/lemon dessert.jpg';
import Bruchetta from './assets/bruchetta.jpg';

const dishes = [
  {
    name: 'Greek Salad',
    image: GreekSalad,
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
  },
  {
    name: 'Lemon Dessert',
    image: LemonDessert,
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
  },
  {
    name: 'Bruchetta',
    image: Bruchetta,
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
  }
]

const Specials = () => {
  return (
    <section className='specials'>
      <div className='specials-title'>
        <h1>This Week Specials</h1>
        <button>Online Order</button>
      </div>
      <div className='food-card-container'>
        {dishes.map(dish => {
          return (
            <FoodCard
              image={dish.image}
              price={dish.price}
              description={dish.description}
              name={dish.name}
            />
          )
        })}
      </div>
    </section>
  );
};

export default Specials;

import "./CustomerSay.css";
import CustomerCard from "./CustomerCard";
import customer1 from '../../assets/craig-mckay-jmURdhtm7Ng-unsplash.jpg';
import customer2 from '../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import customer3 from '../../assets/erik-lucatero-d2MSDujJl2g-unsplash.jpg';
import customer4 from '../../assets/austin-wade-X6Uj51n5CE8-unsplash.jpg';
import food1 from '../../assets/ella-olsson-2IxTgsgFi-s-unsplash.jpg';
import food2 from '../../assets/brooke-lark-M4E7X3z80PQ-unsplash.jpg';
import food3 from '../../assets/alex-munsell-Yr4n8O_3UPc-unsplash.jpg';
import food4 from '../../assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg';

const customers = [
  {
    rating: 5,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    avatar: customer1,
    food: food1,
  },
  {
    rating: 5,
    name: "Marry Doe",
    review: "Pellentesque dignissim urna eget ante pharetra",
    avatar: customer2,
    food: food2,
  },
  {
    rating: 5,
    name: "Frank Doe",
    review:
      "Curabitur sed orci tempus eros efficitur consectetur at vitae nisl. Proin congue, quam at euismod faucibus",
    avatar: customer3,
    food: food3,
  },
  {
    rating: 5,
    name: "Mike Doe",
    review:
      "Sed cursus ac felis semper condimentum. Vivamus pulvinar pulvinar risus, ut maximus mi laoreet vitae.",
    avatar: customer4,
    food: food4,
  },
];

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div id="customer-card-container">
        {customers.map((customer) => {
          return (
            <CustomerCard
              rating={customer.rating}
              name={customer.name}
              review={customer.review}
              avatar={customer.avatar}
              food={customer.food}
              key={customer.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CustomersSay;

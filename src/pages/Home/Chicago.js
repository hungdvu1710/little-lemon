import ChefsPic1 from "../../assets/Mario and Adrian A.jpg";
import ChefsPic2 from "../../assets/Mario and Adrian b.jpg";
import "./Chicago.css";

const Chicago = () => {
  return (
    <section className="chicago">
      <div id="chicago-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div id="chicago-images">
        <img src={ChefsPic1} alt="Chefs" id="chefs-a"/>
        <img src={ChefsPic2} alt="Chefs" id="chefs-b"/>
      </div>
    </section>
  );
};

export default Chicago;


import { Link } from "react-router-dom";


const Nutrition_home = () => {
  return (

        <div className="home-text-section">
          <p className="primary-text">
          Nutrition management
          </p>
          
          <Link to="/">
          <button className="secondary-button"> Home</button>
          </Link>

          <br />
        </div>
 
  );
};

export default Nutrition_home;


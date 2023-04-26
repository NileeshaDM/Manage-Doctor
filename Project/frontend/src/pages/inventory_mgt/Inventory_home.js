
import { Link } from "react-router-dom";


const Inventory_home = () => {
  return (

        <div className="home-text-section">
          <p className="primary-text">
            Inventory management - IT WORKS!
          </p>
          
          <Link to="/">
          <button className="secondary-button"> Home</button>
          </Link>

          <br />
        </div>
 
  );
};

export default Inventory_home;


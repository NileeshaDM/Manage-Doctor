
import { Link } from "react-router-dom";


const Customer_home = () => {
  return (

        <div className="home-text-section">
          <p className="primary-text">
            Customer management
          </p>
          
          <Link to="/">
          <button className="secondary-button"> Home</button>
          </Link>

          <br />
        </div>
 
  );
};

export default Customer_home;


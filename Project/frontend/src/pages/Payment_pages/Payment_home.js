
import { Link } from "react-router-dom";


const Payment_home = () => {
  return (

        <div className="home-text-section">
          <p className="primary-text">
          Payment management
          </p>
          
          <Link to="/">
          <button className="secondary-button"> Home</button>
          </Link>

          <br />
        </div>
 
  );
};

export default Payment_home;


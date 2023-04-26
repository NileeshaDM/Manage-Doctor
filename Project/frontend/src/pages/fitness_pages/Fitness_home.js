
import { Link } from "react-router-dom";


const Fitness_home = () => {
  return (

        <div className="home-text-section">
          <p className="primary-text">
            Fitness management
          </p>
          
          <Link to="/">
          <button className="secondary-button"> Home</button>
          </Link>

          <br />
        </div>
 
  );
};

export default Fitness_home;



import { Link } from "react-router-dom";


const Trainer_home = () => {
  return (

        <div className="home-text-section">
          <p className="primary-text">
          Trainer management
          </p>
          
          <Link to="/">
          <button className="secondary-button"> Home</button>
          </Link>

          <br />
        </div>
 
  );
};

export default Trainer_home;


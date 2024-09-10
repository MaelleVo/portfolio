import uk from "/src/img/uk.png";
import fr from "/src/img/fr.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="container"> */}
      <div className="language">
        {/* <p>Choose your language</p> */}
        <Link to="fr">
          <img alt="fr" src={fr}></img>
        </Link>
        <Link to="en">
          <img alt="en" src={uk}></img>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;

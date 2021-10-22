import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ children }) => {
  return (
    <div className="page-nav">
      <div className="group-two container">
        <div className="page-logo">
          <Link to="/">
            My<span>Jobs</span>
          </Link>
        </div>

        <div className="page-actions">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;

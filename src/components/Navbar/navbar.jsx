import "./navbar.scss";

const Navbar = ({ children }) => {
  return (
    <div className="page-nav">
      <div className="group-two container">
        <div className="page-logo">
          My<span>Jobs</span>
        </div>

        <div className="page-actions">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;

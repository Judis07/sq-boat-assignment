import { Link } from "react-router-dom";
import "./loginAction.scss";

const LoginAction = () => {
  return (
    <div className="login-btn">
      <Link to="/login">Login/Signup</Link>
    </div>
  );
};

export default LoginAction;

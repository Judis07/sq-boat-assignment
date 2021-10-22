import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/input";
import Navbar from "../../components/Navbar/navbar";

import "./login.scss";

const Login = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  const getValuesFn = () => {};

  const onSubmit = () => {
    setBtnClicked(true);
  };

  return (
    <div className="login-container">
      <Navbar />

      <div className="content">
        <div className="login-form">
          <h3>Login</h3>

          <div className="form-elements">
            <Input
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter your email"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              extraLabel={{
                name: "Forgot Password?",
                link: "/forgot-password",
                show: true,
              }}
            />
          </div>

          <div className="submit">
            <button onClick={onSubmit} className="login-btn">
              Login
            </button>
          </div>

          <div className="footer">
            New to MyJobs?{" "}
            <Link className="register-link" to="/register">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

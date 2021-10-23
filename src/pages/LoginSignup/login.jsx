import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/input";
import Navbar from "../../components/Navbar/navbar";

import "./styles.scss";

const Login = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  const getValuesFn = () => {};

  const onSubmit = async () => {
    setBtnClicked(true);

    return;

    const API_URL = "https://jobs-api.squareboat.info/api/v1//auth/login";
    // this is a test user

    const params = JSON.stringify({
      email: "arvind@myjob.com",
      password: "arvindmyjob@9876",
    });

    try {
      const res = await axios.post(API_URL, params, {
        headers: {
          "content-type": "application/json",
        },
      });

      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="login-signup-container">
      <Navbar />

      <div className="content">
        <div className="form-div">
          <h3>Login</h3>

          <div className="form-elements">
            <Input
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter your email"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
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
            <Link className="register-link" to="/signup">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/input";
import Navbar from "../../components/Navbar/navbar";

import "./styles.scss";

const SignUp = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  const getValuesFn = () => {};

  const onSubmit = async () => {
    // setBtnClicked(true);\

    const API_URL = "https://jobs-api.squareboat.info/api/v1//auth/register";

    // this is a test user

    const params = JSON.stringify({
      email: "nexus@myjob.com",
      password: "nexusmyjob@9876",
      confirmPassword: "nexusmyjob@9876",
      userRole: 0,
      name: "Nexus",
      skills: "",
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
          <h3>Signup</h3>

          <div className="form-elements">
            <Input
              type="text"
              name="name"
              label="Full name*"
              placeholder="Enter your full name"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
            />

            <Input
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter your email"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
            />

            <div className="group-togther">
              <Input
                type="password"
                name="create-password"
                label="Create Password*"
                placeholder="Enter your password"
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                required={true}
              />
              <Input
                inputClass="margin-left"
                compClass="margin-left"
                type="password"
                name="confirm-password"
                label="Confirm Password*"
                placeholder="Enter your password"
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                required={true}
              />
            </div>

            <Input
              type="text"
              name="skills"
              label="Skills"
              placeholder="Enter comma separated skills"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={false}
            />
          </div>

          <div className="submit">
            <button onClick={onSubmit} className="login-btn">
              Signup
            </button>
          </div>

          <div className="footer">
            Have an account?{" "}
            <Link className="register-link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

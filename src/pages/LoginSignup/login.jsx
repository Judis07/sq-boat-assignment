import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/input";
import Navbar from "../../components/Navbar/navbar";
import { redirectTo } from "../../utilis/redirect";
import { toLocalStorage } from "../../utilis/store";

import "./styles.scss";

let formData = {
  email: "",
  password: "",
};

const Login = (props) => {
  const [formFields, setFormFields] = useState(formData);
  const [allFilled, setAllFilled] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const checkAll = () => {
    const isComplete = [];

    Object.keys(formFields).forEach(function (key) {
      if (formFields[key] === "") {
        isComplete.push(false);
      } else {
        isComplete.push(true);
      }
    });

    if (isComplete.includes(false)) {
      setAllFilled(false);
      return false;
    } else {
      setAllFilled(true);
      return true;
    }
  };

  const getValuesFn = (data) => {
    formData[data.id] = data.value;

    checkAll();

    setFormFields(formData);
  };

  const onSubmit = async () => {
    setBtnClicked(true);

    const API_URL = "https://jobs-api.squareboat.info/api/v1//auth/login";

    const params = JSON.stringify(formFields);

    if (allFilled) {
      try {
        const res = await axios.post(API_URL, params, {
          headers: {
            "content-type": "application/json",
          },
        });

        const { data } = res.data;

        toLocalStorage(data);

        redirectTo(props, "/dashboard");
      } catch (err) {
        console.log("err", err);
      }
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

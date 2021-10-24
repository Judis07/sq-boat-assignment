import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import GroupsIcon from "@mui/icons-material/Groups";
import Input from "../../components/Input/input";
import Navbar from "../../components/Navbar/navbar";
import Radio from "../../components/Radio/radio";
import { redirectTo } from "../../utilis/redirect";
import { toLocalStorage } from "../../utilis/store";

import "./styles.scss";

let formData = {
  userRole: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  skills: "",
};

const SignUp = (props) => {
  const [formFields, setFormFields] = useState(formData);
  const [allFilled, setAllFilled] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [error, setError] = useState(null);

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

    if (formData.userRole == 0) {
      formData.skills = null;
    } else if (formData.userRole == 1 && !formData.skills) {
      formData.skills = "";
    }

    checkAll();

    setFormFields(formData);
  };

  const onSubmit = async () => {
    setBtnClicked(true);
    setError(null);

    const API_URL = "https://jobs-api.squareboat.info/api/v1//auth/register";

    const params = JSON.stringify(formFields);

    console.log("params", params, allFilled);

    // return null;

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
        console.log("err", err.response.data.errors[0]);
        const { name } = err.response.data.errors[0];

        setError(name);
      }
    }
  };
  return (
    <div className="login-signup-container">
      <Navbar />

      <div className="content">
        <div className="form-div">
          <h3>Signup</h3>

          <div className="form-elements">
            <Radio
              name="userRole"
              btnClicked={btnClicked}
              getValuesFn={getValuesFn}
              defaultChecked={0}
              slots={[
                {
                  value: 0,
                  radioVal: "Recruiter",
                  id: "recruiter",
                  isDisabled: false,
                  icon: <FindInPageIcon />,
                },
                {
                  value: 1,
                  radioVal: "Candidate",
                  id: "candidate",
                  isDisabled: false,
                  icon: <GroupsIcon />,
                },
              ]}
            />

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
                name="password"
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
                name="confirmPassword"
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

          {error && <p className="err-msg">{error}</p>}

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

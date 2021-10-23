import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/navbar";
import Input from "../../components/Input/input";

let formData = {
  email: "",
};

const ForgotPassword = (props) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [formFields, setFormFields] = useState(formData);
  const [allFilled, setAllFilled] = useState(false);
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

    checkAll();

    setFormFields(formData);
  };

  const onSubmit = async () => {
    setBtnClicked(true);

    if (allFilled) {
      const API_URL = `https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${formFields.email}`;

      try {
        const res = await axios.get(API_URL, {
          headers: {
            "content-type": "application/json",
          },
        });

        const { token } = res.data.data;
        props.history.push(`/reset-password/${token}`);
      } catch (err) {
        const { message } = err.response.data;

        setError(message);
      }
    }
  };
  return (
    <div className="login-signup-container">
      <Navbar />

      <div className="content">
        <div className="form-div">
          <h3>Forgot your password?</h3>

          <p>
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </p>

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
          </div>

          <div className="submit">
            <button onClick={onSubmit} className="login-btn">
              Submit
            </button>
          </div>
          {error && <p className="err-msg">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Input from "../../components/Input/input";

const ForgotPassword = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  const getValuesFn = () => {};

  const onSubmit = () => {
    setBtnClicked(true);
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
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

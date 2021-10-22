import { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Input from "../../components/Input/input";

const ResetPassword = () => {
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
          <h3>Reset Your Password</h3>

          <p>Enter your new password below.</p>

          <div className="form-elements">
            <Input
              type="password"
              name="newpassword"
              label="New password"
              placeholder="Enter your password"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
            />

            <Input
              type="password"
              name="confirmpassword"
              label="Confirm password"
              placeholder="Enter your password"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
            />
          </div>

          <div className="submit">
            <button onClick={onSubmit} className="login-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

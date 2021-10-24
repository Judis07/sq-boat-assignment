import axios from "axios";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../../components/Navbar/navbar";
import Input from "../../components/Input/input";

let formData = {
  password: "",
  confirmPassword: "",
  token: "",
};

const ResetPassword = (props) => {
  const { token } = props.match.params;
  const [open, setOpen] = useState(false);

  const [formFields, setFormFields] = useState(formData);
  const [allFilled, setAllFilled] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [successMsg, setSuccesMsg] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      formData.token = token;
      const API_URL = `https://jobs-api.squareboat.info/api/v1/auth/resetpassword/${token}`;
      try {
        await axios.get(API_URL, {
          headers: {
            "content-type": "application/json",
          },
        });
      } catch (err) {
        console.log("err", err);
      }
    };

    if (token) {
      verifyToken();
    }
  }, [token]);

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

    const API_URL = `https://jobs-api.squareboat.info/api/v1/auth/resetpassword/`;

    const params = JSON.stringify(formFields);

    if (allFilled) {
      setError(null);
      setSuccesMsg(null);
      setOpen(true);
      try {
        const res = await axios.post(API_URL, params, {
          headers: {
            "content-type": "application/json",
          },
        });

        const { message } = res.data;
        setSuccesMsg(message);
        setOpen(false);
      } catch (err) {
        console.log("err", err);

        setOpen(false);
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
          <h3>Reset Your Password</h3>

          {successMsg ? (
            <p className="success-message">{successMsg}</p>
          ) : (
            <>
              <p>Enter your new password below.</p>

              <div className="form-elements">
                <Input
                  type="password"
                  name="password"
                  label="New password"
                  placeholder="Enter your password"
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  required={true}
                />

                <Input
                  type="password"
                  name="confirmPassword"
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
            </>
          )}

          {error && <p className="err-msg">{error}</p>}
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default ResetPassword;

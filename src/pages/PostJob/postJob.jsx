import { useState } from "react";
import axios from "axios";
import Input from "../../components/Input/input";
import PostJobAction from "../../components/Action/Job/job";
import Navbar from "../../components/Navbar/navbar";

import { getToken } from "../../utilis/store";
import { redirectTo } from "../../utilis/redirect";
import "./postJob.scss";

let formData = {
  title: "",
  description: "",
  location: "",
};

const PostJob = (props) => {
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

    const userToken = getToken();

    const API_URL = "https://jobs-api.squareboat.info/api/v1//jobs";

    const params = JSON.stringify(formFields);

    if (allFilled) {
      try {
        const res = await axios.post(API_URL, params, {
          headers: {
            Authorization: userToken,
            "content-type": "application/json",
          },
        });

        redirectTo(props, "/dashboard");
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  return (
    <div className="postjob-container">
      <Navbar>
        <PostJobAction />
      </Navbar>

      <div className="content">
        <div className="form-div">
          <h3>Post a Job</h3>

          <div className="form-elements">
            <Input
              type="text"
              name="title"
              label="Job Title*"
              placeholder="Enter job title"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
            />

            <Input
              type="text"
              name="description"
              label="Description*"
              placeholder="Enter job description"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
              isTextArea={true}
            />

            <Input
              type="text"
              name="location"
              label="Location*"
              placeholder="Enter location"
              getValuesFn={getValuesFn}
              btnClicked={btnClicked}
              required={true}
            />
          </div>

          <div className="submit">
            <button onClick={onSubmit} className="login-btn">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;

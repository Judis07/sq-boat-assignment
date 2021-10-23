import { useState } from "react";
import axios from "axios";
import Input from "../../components/Input/input";
import PostJobAction from "../../components/Action/Job/job";
import Navbar from "../../components/Navbar/navbar";

import "./postJob.scss";
import { getToken } from "../../utilis/store";

const PostJob = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  const getValuesFn = () => {};

  const onSubmit = async () => {
    setBtnClicked(true);

    const userToken = getToken();

    // console.log("userToken", userToken);

    return;

    const API_URL = "https://jobs-api.squareboat.info/api/v1//jobs";
    // this is a test user

    const params = JSON.stringify({
      title: "React SDE",
      description: "By Arvind",
      location: "Delhi",
    });

    try {
      const res = await axios.post(API_URL, params, {
        headers: {
          Authorization: userToken,
          "content-type": "application/json",
        },
      });

      // console.log("res", res);

      const { data } = res.data;
    } catch (err) {
      console.log("err", err);
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
              name="jobTitle"
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

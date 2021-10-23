import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostJobAction from "../../components/Action/Job/job";
import Navbar from "../../components/Navbar/navbar";
import { getToken } from "../../utilis/store";

import "./dashboard.scss";
import JobCard from "../../components/Cards/jobCard";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [jobData, setData] = useState([]);

  useEffect(() => {
    const userToken = getToken();

    const getData = async () => {
      setLoading(true);
      const API_URL = "https://jobs-api.squareboat.info/api/v1/recruiters/jobs";
      // const API_URL = "https://jobs-api.squareboat.info/api/v1/jobs";

      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: userToken,
            "content-type": "application/json",
          },
        });

        const { data } = res.data.data;

        setData(data);
      } catch (err) {
        console.log("err", err);
        setError(true);
      }
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar>
        <PostJobAction />
      </Navbar>

      <div className="inner-container">
        <div className="page-inner-nav">
          <div>Home</div>
        </div>
        <div className="job-list">
          <h3>Job posted by you</h3>
        </div>

        {!loading ? (
          <>
            <div className="job-cards">
              {jobData.length > 0 &&
                jobData.map((info) => {
                  return <JobCard key={info.id} {...info} />;
                })}
            </div>

            {jobData.length === 0 && (
              <div className="post-job-action">
                <div className="job-msg">Your posted jobs will show here!</div>
                <div className="submit">
                  <Link className="login-btn" to="/post-a-job">
                    Post a Job
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

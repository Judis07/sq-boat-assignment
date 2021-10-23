import { Link } from "react-router-dom";

import PostJobAction from "../../components/Action/Job/job";
import Navbar from "../../components/Navbar/navbar";

import "./dashboard.scss";

const Dashboard = () => {
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

        <div className="post-job-action">
          <div className="job-msg">Your posted jobs will show here!</div>
          <div className="submit">
            <Link className="login-btn" to="/post-a-job">
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

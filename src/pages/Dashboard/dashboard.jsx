import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../utilis/store";
import axios from "axios";
import ReactPaginate from "react-paginate";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PostJobAction from "../../components/Action/Job/job";
import Navbar from "../../components/Navbar/navbar";
import JobCard from "../../components/Cards/jobCard";
import "./dashboard.scss";

const Dashboard = (props) => {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [jobData, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const [currPage, setCurrPage] = useState(null);

  useEffect(() => {
    const userToken = getToken();

    const getData = async () => {
      setLoading(true);
      // const API_URL =  "https://jobs-api.squareboat.info/api/v1/recruiters/jobs/";

      let API_URL = "https://jobs-api.squareboat.info/api/v1/jobs";

      if (currPage) {
        API_URL = `https://jobs-api.squareboat.info/api/v1/jobs?page=${currPage}`;
      } else {
        API_URL = "https://jobs-api.squareboat.info/api/v1/jobs";
      }

      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: userToken,
            "content-type": "application/json",
          },
        });

        const { data } = res.data;

        // console.log("res", res.data.metadata);

        const { count, limit } = res.data.metadata;

        setData(data);
        setTotal(count / limit);
      } catch (err) {
        console.log("err", err);
        // setError(true);
      }
      setLoading(false);
    };

    getData();
  }, [currPage]);

  return (
    <div className="dashboard-container">
      <Navbar>
        <PostJobAction history={props.history} />
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

            {total && (
              <div className="pagination">
                {" "}
                <ReactPaginate
                  pageCount={total}
                  activeClassName="page-selected"
                  initialPage={currPage}
                  onPageChange={(page) => {
                    // console.log(page);
                    setCurrPage(page.selected);
                  }}
                />{" "}
              </div>
            )}

            {jobData.length === 0 && (
              <div className="post-job-action">
                <div className="post-icon">
                  <PostAddIcon />
                </div>
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

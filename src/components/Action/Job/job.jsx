import { Link } from "react-router-dom";
import "./job.scss";

const PostJobAction = () => {
  return (
    <div className="job-action">
      <Link to="/post-a-job">Post a Job</Link>
    </div>
  );
};

export default PostJobAction;

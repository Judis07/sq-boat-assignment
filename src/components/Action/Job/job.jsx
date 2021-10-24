import { Link } from "react-router-dom";
import Logout from "../Logout/logout";
import "./job.scss";

const PostJobAction = (props) => {
  return (
    <div className="job-action">
      <Link to="/post-a-job">Post a Job</Link>

      <Logout history={props.history} />
    </div>
  );
};

export default PostJobAction;

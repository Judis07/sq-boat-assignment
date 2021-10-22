import PostJobAction from "../../components/Action/Job/job";
import Navbar from "../../components/Navbar/navbar";

const PostJob = () => {
  return (
    <div className="postjob-container">
      <Navbar>
        <PostJobAction />
      </Navbar>
    </div>
  );
};

export default PostJob;

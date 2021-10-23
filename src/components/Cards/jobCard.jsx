import "./jobCard.scss";

const JobCard = ({ title, description, location }) => {
  return (
    <div className="job-card">
      <div className="title">{title}</div>

      <div className="description">{description}</div>

      <div className="job-actions">
        <div className="location">{location}</div>

        <div className="view-applicants">View applications</div>
      </div>
    </div>
  );
};

export default JobCard;

import { getFirstLetter } from "../../utilis/getFirstWord";
import "./applicantCard.scss";

const ApplicantCard = ({ name, email, skills }) => {
  return (
    <div className="applicant-card">
      <div className="about">
        <div className="icon">{getFirstLetter(name)}</div>

        <div className="info">
          <div className="name">{name}</div>
          <div className="email">{email}</div>
        </div>
      </div>

      <div className="skills">
        <div className="title">Skill</div>
        <div>{skills}</div>
      </div>
    </div>
  );
};

export default ApplicantCard;

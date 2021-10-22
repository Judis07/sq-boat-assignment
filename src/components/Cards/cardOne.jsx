import "./cardOne.scss";

const CardOne = ({ title, description }) => {
  return (
    <div className="cardOne-container">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

export default CardOne;

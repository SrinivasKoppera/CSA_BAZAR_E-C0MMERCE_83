import "./index.css";

const TestimonnialCard = ({ eachOne }) => {
  return (
    <div className="testimonnial-card">
      <h4 className="testimonnial-title">{eachOne.title}</h4>
      <p className="testimonnial-description">{eachOne.description}</p>
      <p className="testimonnial-name">{eachOne.name}</p>
      <p className="testimonnial-rating">{eachOne.rating}</p>
    </div>
  );
};

export default TestimonnialCard;

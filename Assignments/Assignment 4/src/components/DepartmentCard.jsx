import { Link } from "react-router-dom";

function DepartmentCard({ dept }) {
  return (
    <div className="card">
      <h3>{dept.name}</h3>
      <p>{dept.description}</p>
      <Link to={`/departments/${dept.id}`} className="button">View More</Link>
    </div>
  );
}

export default DepartmentCard;

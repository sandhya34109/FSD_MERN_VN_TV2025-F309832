import { useParams } from "react-router-dom";
import data from "../data/departments.json";

function DepartmentDetails() {
  const { id } = useParams();
  const dept = data.find((d) => d.id === id);

  return (
    <div className="page">
      <h1>{dept.name}</h1>
      <p>{dept.description}</p>

      <h2>Courses Offered</h2>
      <ul>
        {dept.courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <h2>Faculty</h2>
      <ul>
        {dept.faculty.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h2>Labs</h2>
      <ul>
        {dept.labs.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentDetails;

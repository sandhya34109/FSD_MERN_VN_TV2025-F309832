import { useEffect, useState } from "react";
import DepartmentCard from "../components/DepartmentCard";
import data from "../data/departments.json";

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setDepartments(data);
  }, []);

  return (
    <div className="page">
      <h1>Departments</h1>
      <div className="grid">
        {departments.map((d) => (
          <DepartmentCard key={d.id} dept={d} />
        ))}
      </div>
    </div>
  );
}

export default Departments;

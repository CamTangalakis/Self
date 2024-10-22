import React, { useState } from "react";
import "./index.css";

const sampleCourses = [
  {
    name: "Learning to live with stuff",
    grade: 3.5,
    dateCompleted: new Date("04/15/2023"),
  },
  {
    name: "So you got ur peerrrrd",
    grade: 3.2,
    dateCompleted: new Date("04/16/2023"),
  },
  {
    name: "You live you learn i guess",
    grade: 3.5,
    dateCompleted: new Date("04/17/2023"),
  },
];

const Grades = () => {
  const [courses, setCourses] = useState([
    {
      name: "",
      grade: null,
      dateCompleted: new Date(),
    },
  ]);

  React.useEffect(() => {
    setCourses(sampleCourses);
  }, []);

  // TODO: get assigned courses for user, find all completed courses sorted by date completed,
  // find grades for each course

  return (
    <div>
      <div className="gradesHeader header">Grades</div>

      <div style={{ display: "grid", width: "50%", margin: "auto" }}>
        {courses.map((course) => (
          <div style={{ display: "flex", margin: "3px" }}>
            <span>{course.name}</span>
            <span>{course.grade}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grades;

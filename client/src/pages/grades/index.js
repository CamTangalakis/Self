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

  const gpaTotal = () => {
    if (courses.length < 1) {
      return "Loading...";
    }

    let total = 0;
    courses.reduce((acc, course) => (total = acc + course.grade), total);

    return `gpa: ${(total / courses.length).toFixed(2)}`;
  };

  // TODO: get assigned courses for user, find all completed courses sorted by date completed,
  // find grades for each course

  return (
    <div className="gradesPage">
      <div className="gradesHeader header">Grades</div>

      <div className="gradesContainer">
        {courses.map((course) => (
          <div className="gradeDisplay">
            <span className="course">{course.name}</span>
            <span className="grade">{course.grade}</span>
          </div>
        ))}
        <div>{gpaTotal()}</div>
      </div>
    </div>
  );
};

export default Grades;

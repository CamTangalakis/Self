import React from "react";
import "./index.css";

const Courses = () => {
  return (
    <div>
      <div className="coursesHeader header">Courses</div>
      this is your dashboard, where you'll see all of your assigned courses. IF
      you're a student, you can click throgh your courses, find lesson modules
      to do, and get graded. If you're a teacher, you can search through our
      available lessons, add them to unique course structures, adopt existing
      courses, or make your own lessons using our database of educational tools.
      As an administrator, you can check the status of your students, search for
      problematic behaviors and scores, reach out to parents and teachers, and
      create specialized courses for teachers to use. As a parent, you can check
      the status of your children's courses, see what kind of lessons they're
      involved in(?), check their grades, and sign important documents. All in
      one place! This page will probably be called something different for each
      user.
    </div>
  );
};

export default Courses;

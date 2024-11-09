import React from "react";
import * as chalkboard from "../../assets/chalkboard.jpg";
import * as bookshelf from "../../assets/bookshelf.jpg";
import "./index.css";
import DragAndDrop from "../../common/drag_and_drop";
import Quiz from "../../common/quiz";

const LandingPage = () => {
  return (
    <div className="landingContainer">
      <div className="landingOne">
        <img src={chalkboard.default} className="landingImage" />

        <div className="landingHeader">
          <span>SELf Educated</span>
          <span className="subheader">a new kind of learning</span>
        </div>
      </div>

      <div className="landingTag">
        <span className="landingFiller1"> </span>
        <span className="landingFiller2"> </span>
        Premier Learning Center for SEL Education
      </div>

      <div className="landingStatsContainer">
        <img src={bookshelf.default} className="landingImage" />
        <div className="landingStats">
          <div className="landingStat stat1">30,000 Students Served</div>
          <div className="landingStat stat2">20 Disctricts Represented</div>
          <div className="landingStat stat3">100s of Courses</div>
          <div className="landingStat stat4">Unlimited Possibilities</div>
        </div>
      </div>

      <Quiz />
    </div>
  );
};

export default LandingPage;

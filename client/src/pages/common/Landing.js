import React from "react";
import * as chalkboard from "../../assets/chalkboard.jpg";
import * as bookshelf from "../../assets/bookshelf.jpg";
import "./index.css";
import FlipperTile from "../../common/flipper";
import Carousel from "../../common/carousel";
import DragAndDrop from "../../common/drag_and_drop";

const LandingPage = () => {
  return (
    <div className="landingContainer">
      <div className="landingOne">
        <img
          src={chalkboard.default}
          alt="chalkboard"
          className="landingImage"
        />

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

      <div className="flipperTileContainer">
        <FlipperTile
          front={"ooh look a flipper tile!"}
          back={"fuck yeah, it flips!"}
        />

        <FlipperTile front={"look another one!"} back={"this one flips, too"} />

        <FlipperTile front={"wow there's more!"} back={"tired of it yet?"} />
      </div>

      <div className="landingStatsContainer">
        <img src={bookshelf.default} alt="bookshelf" className="landingImage" />
        <div className="landingStats">
          <div className="landingStat stat1">30,000 Students Served</div>
          <div className="landingStat stat2">20 Disctricts Represented</div>
          <div className="landingStat stat3">100s of Courses</div>
          <div className="landingStat stat4">Unlimited Possibilities</div>
        </div>
      </div>

      <Carousel />
      <DragAndDrop />
    </div>
  );
};

export default LandingPage;

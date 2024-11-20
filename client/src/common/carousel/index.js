import React from "react";
import * as puppy from "../../assets/speznf1q.png";
import * as puppykitty from "../../assets/a8ace3ce.png";
import * as anotherpuppy from "../../assets/xuwmum9c.png";
import * as corgipuppy from "../../assets/ba4hflg6.png";
import "./index.css";

const items = [
  {
    title: "dfagadf",
    desc: "dafgadfg",
    image: puppy,
  },
  {
    title: "dfderfhgsfgjaagadf",
    desc: "dafdafgdvgadfg",
    image: puppykitty,
  },
  {
    title: "dsfasdgdfagadf",
    desc: "asarderghdfvdafgadfg",
    image: anotherpuppy,
  },
  {
    title: "uiouhykhgjkdfagadf",
    desc: "hnmgyuijkgdafgadfg",
    image: corgipuppy,
  },
];

// TODO: style

const Carousel = () => {
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    if (index + 1 > items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index - 1 < 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  setTimeout(() => {
    nextSlide();
  }, 5000);

  return (
    <div className="carouselContainer">
      <button onClick={prevSlide}>≺</button>
      <div className="carouselItem">
        <img
          className="carouselImage"
          style={{ height: "200px" }}
          src={items[index].image.default}
        />
        {items[index].title}
      </div>

      <button onClick={nextSlide}>≻</button>
    </div>
  );
};

export default Carousel;

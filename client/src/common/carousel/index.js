import React from "react";
import * as puppy from "../../assets/speznf1q.png";
import * as puppykitty from "../../assets/a8ace3ce.png";
import * as anotherpuppy from "../../assets/xuwmum9c.png";
import * as corgipuppy from "../../assets/ba4hflg6.png";
import "./index.css";

const items = [
  {
    title: "ooh look a puppy",
    desc: "dafgadfg",
    image: puppy,
  },
  {
    title: "heres a pupy and a kitty",
    desc: "dafdafgdvgadfg",
    image: puppykitty,
  },
  {
    title: "loook how cute",
    desc: "asarderghdfvdafgadfg",
    image: anotherpuppy,
  },
  {
    title: "this is what atticus looked like when he was a baby :)",
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

  React.useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [index]);

  return (
    <div className="carouselContainer">
      <button className="carouselButton --prev" onClick={prevSlide}>
        ≺
      </button>
      <div className="carouselItem">
        <img
          className="carouselImage"
          style={{ height: "200px" }}
          src={items[index].image.default}
          alt={items[index].image.alt}
        />
        <div className="carouselText">{items[index].title}</div>
      </div>

      <button className="carouselButton --next" onClick={nextSlide}>
        ≻
      </button>
    </div>
  );
};

export default Carousel;

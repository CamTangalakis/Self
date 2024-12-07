import React from "react";
import "./index.css";

const Matches = [
  { term: "whatever", match: "whatever2" },
  { term: "this stuff", match: "this stuff2" },
  { term: "another thing", match: "whatever2" },
  { term: "vocab term", match: "vocab term2" },
  { term: "another", match: "another2" },
];

// TODO: make this shit work

const DragAndDrop = () => {
  const termWords = document.querySelectorAll("#termsContainer > span");
  const matchWords = document.querySelectorAll("#matchesContainer > span");
  let totalMatches = Matches.length;

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  const dragEnterHandler = (e) => {
    if (
      e.target.classList &&
      e.target.classList.contains("droppable") &&
      !e.target.classList.contains("dropped")
    ) {
      e.target.classList.add("droppable-hover");
    }
  };

  const dragOverHandler = (e) => {
    if (
      e.target.classList &&
      e.target.classList.contains("droppable") &&
      !e.target.classList.contains("dropped")
    ) {
      e.preventDefault();
    }
  };

  const dragLeaveHandler = (e) => {
    if (
      e.target.classList &&
      e.target.classList.contains("droppable") &&
      !e.target.classList.contains("dropped")
    ) {
      e.target.classList.remove("droppable-hover");
    }
  };

  const dropHandler = (e) => {
    e.preventDefault();
    e.target.classList.remove("droppable-hover");
    const draggableElementBrand = e.dataTransfer.getData("text");
    const droppableElementBrand = e.target.getAttribute("data-brand");
    const isCorrectMatching = draggableElementBrand === droppableElementBrand;
    totalMatches--;
    if (isCorrectMatching) {
      const draggableElement = document.getElementById(draggableElementBrand);
      e.target.classList.add("dropped");
      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
      e.target.innerHTML = `<i class="fab fa-${draggableElementBrand}" style="color: ${draggableElement.style.color};"></i>`;
    }
    if (totalMatches < 1) {
      // Game Over!!
    }
  };

  termWords.forEach((el) => {
    el.addEventListener("dragstart", dragStartHandler);
  });

  matchWords.forEach((el) => {
    el.addEventListener("dragenter", dragEnterHandler);
    el.addEventListener("dragover", dragOverHandler);
    el.addEventListener("dragleave", dragLeaveHandler);
    el.addEventListener("drop", dropHandler);
  });

  return (
    <div>
      <div className="header">Drag and Drop</div>

      <div id="termsContainer">
        {Matches.map((pair) => (
          <span
            id={pair.term}
            draggable="true"
            data-source-id={pair.term}
            className="termItem"
          >
            {pair.term}
          </span>
        ))}
      </div>

      <div id="matchesContainer">
        {Matches.map((pair) => (
          <span
            id={pair.match}
            data-target-id={pair.match}
            className="matchItem droppable"
          >
            {pair.match}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;

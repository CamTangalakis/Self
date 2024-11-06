import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Matches = [
  { id: "1", term: "whatever", match: "whatever2" },
  { id: "2", term: "this stuff", match: "this stuff2" },
  { id: "3", term: "another thing", match: "whatever2" },
  { id: "4", term: "vocab term", match: "vocab term2" },
  { id: "5", term: "another", match: "another2" },
];

const DragAndDrop = () => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    // TODO: reorder data
  };
  return (
    <div>
      <div className="header">DragAndDrop</div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cardList" type="CARD">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {Matches.map((card, i) => (
                <Draggable key={card.id} draggableId={card.id} index={i}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {card.term}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragAndDrop;

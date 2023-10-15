import React from "react";
import { useDrag } from "react-dnd";

function WordBubble({ letter }) {
  const [, ref] = useDrag({
    type: "word-bubble",
    item: { letter },
  });

  return (
    <div ref={ref} className="word-bubble">
      {letter}
    </div>
  );
}

export default WordBubble;

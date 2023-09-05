import Scramble from "react-scramble";
import React from "react";

function ReactScramble() {
  return (
    <div class="bg-red-300">
      <Scramble
        autoStart
        text="Web Developer"
        steps={[
          {
            roll: 10,
            action: "+",
            type: "all",
          },
          {
            action: "-",
            type: "forward",
          },
        ]}
      />
    </div>
  );
}

export default ReactScramble;

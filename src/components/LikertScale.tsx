import React from "react";
import ChoiceNode from "./ChoiceNode";
import type { LikertScaleTypes } from "../types/ScaleTypes";

const LikertScale: React.FC<LikertScaleTypes> = ({ node, setNode }) => {
  const nodes = 5;

  return (
    <div className="h-[5px] lg:h-[10px] w-[100%] rounded-lg bg-gray-400 relative">
      {/* 5 choice nodes */}
      <div className="flex flex-row absolute w-full justify-between -translate-y-[6px] lg:-translate-y-[40%]">
        {Array.from({ length: nodes }).map((_, index) => (
          <ChoiceNode
            key={index}
            index={index + 1}
            isActive={index + 1 === node}
            onClick={() => setNode(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default LikertScale;

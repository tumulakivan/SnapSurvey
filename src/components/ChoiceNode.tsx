import React from "react";
import type { ChoiceNodeTypes } from "../types/ChoiceNodeTypes";

const ChoiceNode: React.FC<ChoiceNodeTypes> = ({
  index,
  isActive,
  onClick,
}) => {
  const colorMap: Record<number, string> = {
    1: "bg-mentisdarkred",
    2: "bg-mentisred",
    3: "bg-mentisblue",
    4: "bg-mentiscyan",
    5: "bg-mentisgreen",
  };

  const color = colorMap[index] ?? "bg-gray-400";

  return (
    <>
      <div className="w-[5%] aspect-square bg-gray-400 rounded-full relative">
        <div
          className={`w-full aspect-square rounded-full absolute transition-colors duration-500 cursor-pointer ${
            isActive ? color : ""
          }`}
          onClick={onClick}
        ></div>
      </div>
    </>
  );
};

export default ChoiceNode;

import { useState } from "react";

const ChoiceNode = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-[5%] aspect-square bg-gray-400 rounded-full relative">
      <div
        className={`w-[100%] aspect-square rounded-full absolute ${
          active ? "bg-mentisblue" : ""
        }`}
        onClick={() => setActive((prev) => !prev)}
      ></div>
    </div>
  );
};

export default ChoiceNode;

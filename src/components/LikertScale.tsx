import ChoiceNode from "./ChoiceNode";

const LikertScale = () => {
  const nodes = 5;

  return (
    <div className="h-[5px] w-[100%] rounded-lg bg-gray-400 relative">
      {/* 5 choice nodes */}
      <div className="flex flex-row absolute w-full justify-between -translate-y-[6px]">
        {Array.from({ length: nodes }).map((_, index) => (
          <ChoiceNode key={index} />
        ))}
      </div>
    </div>
  );
};

export default LikertScale;

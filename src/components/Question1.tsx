import LikertScale from "./LikertScale";

const Question1 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Question 1</h1>
      <div className="w-full h-auto p-2">
        How do you feel about nulla nisl justo, sodales faucibus aliquet id,
        laoreet a felis. Mauris id commodo nisi, vel condimentum metus. Donec
        elementum hendrerit nisi vitae condimentum. Phasellus condimentum nibh
        risus, a dictum ante varius ultricies?
      </div>

      <div className="w-full p-4">
        <LikertScale />
      </div>
    </>
  );
};

export default Question1;

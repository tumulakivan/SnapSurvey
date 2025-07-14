import loremIpsum from "../assets/loremipsum.jpg";

const AboutSurvey = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">About the survey</h1>
      <img src={loremIpsum} alt="lorem ipsum haha" />
      <p>
        So you might be asking, "What is this survey about?". Well, lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Mauris congue diam sem, sit
        amet suscipit arcu eleifend nec. Nulla facilisi. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Maecenas a semper erat. Integer luctus sit amet justo in ornare. Cras
        eget lectus eu leo hendrerit pellentesque. Vivamus at leo enim.
      </p>
      <p>
        The choice nodes are arranged as follows: Strongly Disagree, Agree,
        Neutral, Agree, and finally, Strongly Agree (from left to right,
        respectively)
      </p>
    </>
  );
};

export default AboutSurvey;

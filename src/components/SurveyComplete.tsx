import type React from "react";
import type { SurveyCompleteTypes } from "../types/SurveyCompleteTypes";

const SurveyComplete: React.FC<SurveyCompleteTypes> = ({ details }) => {
  const nodeChoices = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ];

  return (
    <>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking your time to help us improve our services. Your
        responses will be listed below for your viewing pleasure.
      </p>
      <div>
        <h1>Name: {details.name}</h1>
        <h1>Email: {details.email}</h1>
        <h1>
          Question 1:{" "}
          {details.q1Node ? nodeChoices[details.q1Node - 1] : "No response"}
        </h1>
        <h1>
          Question 2:{" "}
          {details.q2Node ? nodeChoices[details.q2Node - 1] : "No response"}
        </h1>
        <h1>Question 3: {details.q3Text}</h1>
      </div>
    </>
  );
};

export default SurveyComplete;

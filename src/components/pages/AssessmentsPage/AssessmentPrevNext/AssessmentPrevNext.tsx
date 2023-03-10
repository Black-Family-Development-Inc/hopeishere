import { Box } from "@mui/material";
import React from "react";
import MultiButton from "../../../MultiButton/MultiButton";
import { PrevNextContainerStyled } from "./AssessmentPrevNext.styles";
import { AssessmentPrevNextProps } from "./assessmentPrevNext-types";

const AssessmentPrevNext = ({
  currentQuestionIdx,
  questionsLength,
  setCurrentQuestionIdx,
  nextDisabled,
  resultsDisabled,
  handleResultsClick,
  handleAlert,
}: AssessmentPrevNextProps) => {
  const clamp = (num: number) =>
    Math.min(Math.max(num, 0), questionsLength - 1);

  const handleNextClick = () => {
    setCurrentQuestionIdx(clamp(currentQuestionIdx + 1));
  };

  const lastQuestion = currentQuestionIdx === questionsLength - 1;

  return (
    <PrevNextContainerStyled>
      {currentQuestionIdx !== 0 && (
        <MultiButton
          version="previous"
          label="Previous"
          onClick={() => setCurrentQuestionIdx(clamp(currentQuestionIdx - 1))}
        />
      )}
      <Box>
        {lastQuestion ? (
          <MultiButton
            version="results"
            label="Submit"
            onClick={() =>
              resultsDisabled ? handleAlert(true) : handleResultsClick()
            }
          />
        ) : (
          <MultiButton
            version="next"
            label="Next"
            onClick={() =>
              nextDisabled ? handleAlert(true) : handleNextClick()
            }
          />
        )}
      </Box>
    </PrevNextContainerStyled>
  );
};

export default AssessmentPrevNext;

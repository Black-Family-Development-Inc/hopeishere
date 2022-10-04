import { FormControl, Typography } from "@mui/material";
import { graphql, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import {
  AssessmentAnswers,
  AssessmentPrevNext,
} from "../../components/pages/Assessments";
import {
  AssessmentHeaderContainer,
  AssessmentPageStyled,
  AssessmentTitleStyled,
  DirectionsStyled,
  QuestionStyled,
} from "../../components/pages/Assessments/AssessmentPage/AssessmentPage.styles";
import AssessmentTrackerLayout from "../../layouts/AssessmentTrackerLayout/AssessmentTrackerLayout";
import {
  AssessmentPageProps,
  UsersSavedQuestion,
} from "./AssessmentPage-types";

const AssessmentPage = ({ data }: AssessmentPageProps) => {
  const {
    contentfulAssessment: {
      title,
      assessment: { answers, questions, description, severityRubric },
    },
  } = data;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [usersSavedQuestions, setUsersSavedQuestions] = useState<
    UsersSavedQuestion[]
  >([]);

  useEffect(() => {
    const unansweredQuestions = questions.map((question) => {
      return {
        question: question.text,
        answer: "",
        score: 0,
        triggered: false,
      };
    });
    setUsersSavedQuestions(unansweredQuestions);
  }, [questions]);

  const currentQuestion = questions[currentQuestionIdx];
  const nextDisabled = !usersSavedQuestions?.[currentQuestionIdx]?.answer;
  const resultsDisabled = usersSavedQuestions.some(
    (saved) => saved.answer === "",
  );

  const titles = {
    "phq-9": "Depression",
    "dast-10": "Anxiety",
    "gad-7": "Substance Use",
    universal: "Universal",
  };

  const checkTriggerQuestions = () =>
    usersSavedQuestions.some((question) => question.triggered);

  const navigateToResultsPage = () => {
    const resultsPage = "/results/" + title.toLowerCase();
    const triggered = checkTriggerQuestions();
    const assessmentScore = accumulateAssessmentScore();
    navigate(resultsPage, {
      state: { assessmentScore, severityRubric, triggered },
    });
  };

  const accumulateAssessmentScore = () =>
    usersSavedQuestions.reduce((prev, curr) => prev + curr.score, 0);

  return (
    <AssessmentTrackerLayout>
      <AssessmentPageStyled>
        <AssessmentHeaderContainer>
          <AssessmentTitleStyled>
            {titles[title.toLocaleLowerCase() as keyof typeof titles]}{" "}
            Assessment
          </AssessmentTitleStyled>
          {currentQuestionIdx === 0 && description && (
            <DirectionsStyled>
              <Typography sx={{ fontWeight: "700", marginBottom: "12px" }}>
                Directions
              </Typography>
              <Typography>{description}</Typography>
            </DirectionsStyled>
          )}
          <QuestionStyled>
            <Typography>{currentQuestion.text}</Typography>
            <Typography sx={{ paddingLeft: "35px" }}>
              {currentQuestionIdx + 1}/{questions.length}
            </Typography>
          </QuestionStyled>
        </AssessmentHeaderContainer>

        <FormControl>
          <AssessmentAnswers
            answers={answers}
            currentQuestion={currentQuestion}
            currentQuestionIdx={currentQuestionIdx}
            usersSavedQuestions={usersSavedQuestions}
            setUsersSavedQuestions={setUsersSavedQuestions}
          />

          <AssessmentPrevNext
            currentQuestionIdx={currentQuestionIdx}
            questions={questions}
            setCurrentQuestionIdx={setCurrentQuestionIdx}
            nextDisabled={nextDisabled}
            resultsDisabled={resultsDisabled}
            handleResultsClick={navigateToResultsPage}
          />
        </FormControl>
      </AssessmentPageStyled>
    </AssessmentTrackerLayout>
  );
};

export default AssessmentPage;

export const query = graphql`
  query AssessmentPage($title: String!) {
    contentfulAssessment(title: { eq: $title }) {
      id
      title
      assessment {
        answers {
          binary {
            score
            text
          }
          scale {
            score
            text
          }
        }
        questions {
          text
          triggerAnswer
          questionType
          answers {
            text
            score
          }
        }
        severityRubric {
          max
          min
          severity
        }
        description
        headings {
          scale
          binary
        }
      }
    }
  }
`;

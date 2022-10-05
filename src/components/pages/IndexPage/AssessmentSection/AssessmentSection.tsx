import { Box } from "@mui/material";
import * as React from "react";
import {
  AssessmentButtonType,
  ContentfulHomePage,
} from "../../../../pages/IndexPage-types";
import { HR } from "../../../HR";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import {
  AssessmentQuestionStyled,
  AssessmentQuestionWrapperStyled,
  AssessmentSectionContent,
  AssessmentSectionTitleStyled,
} from "./AssessmentSection.styles";

const AssessmentSection = (props: ContentfulHomePage) => {
  const {
    assessmentSectionHeader,
    assessmentSectionSubheader,
    assessmentButtons,
  } = props;

  return (
    <Box>
      <AssessmentSectionTitleStyled>
        {" "}
        {assessmentSectionHeader}
      </AssessmentSectionTitleStyled>
      <HR />
      <AssessmentSectionContent>
        {assessmentSectionSubheader}
      </AssessmentSectionContent>
      {assessmentButtons.map((button: AssessmentButtonType) => {
        const link = `/assessments/${button.assessment.title}`;
        return (
          <AssessmentQuestionWrapperStyled key={button.buttonText}>
            <AssessmentQuestionStyled id="scroll">
              {button.assessmentDescription}
            </AssessmentQuestionStyled>
            <Box key={button.buttonText}>
              <LinkStyled to={link}>
                <MultiButton version="assessment" label={button.buttonText} />
              </LinkStyled>
            </Box>
          </AssessmentQuestionWrapperStyled>
        );
      })}
    </Box>
  );
};

export default AssessmentSection;

import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { Header } from "../../../Header";
import { ImageStyled } from "../../../Image/img.styles";
import MultiButton from "../../../MultiButton/MultiButton";
import { LinkStyled } from "../../../MultiButton/MultiButton.styles";
import { Paragraph } from "../../../Paragraph";
import {
  ButtonContainerStyled,
  ImageContainerStyled,
} from "./IntroSection.styles";

const IntroSection = ({
  introSectionHeader,
  introSectionSubheader,
  introSectionImage,
  universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
  return (
    <>
      <Header variant="h2" text={introSectionHeader} />
      <Paragraph>{introSectionSubheader}</Paragraph>
      <ButtonContainerStyled>
        <LinkStyled to={assessment.title.toLowerCase()} tabIndex={-1}>
          <MultiButton version="universal" label={assessmentButtonLabel} />
        </LinkStyled>
      </ButtonContainerStyled>
      <ImageContainerStyled>
        <ImageStyled
          className="introSectionImage"
          srcSet={introSectionImage.gatsbyImageData.images.sources[0].srcSet}
          alt={introSectionImage.description}
        />
      </ImageContainerStyled>
    </>
  );
};

export default IntroSection;

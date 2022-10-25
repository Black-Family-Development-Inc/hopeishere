import React from "react";
import { ResourcesTypes } from "../../../../pages/results/ResultsPage-types";
import ArticleList from "../../../ArticleList/ArticleList";
import { Header } from "../../../Header";
import MultiButton from "../../../MultiButton/MultiButton";
import { Paragraph } from "../../../Paragraph";

const Resources = ({
  header,
  bfdiButtonDescription,
  bfdiButtonText,
  bfdiIntakeNumber,
  crisisLineButtonText,
  crisisLineDescription,
  crisisLineNumber,
  headingForArticles,
  articles,
  severity,
}: ResourcesTypes) => {
  const shouldRenderCrisisButton =
    severity === "Severe" || severity === "Severe Level";
  return (
    <>
      <Header text={header} variant="h2" />
      <Paragraph paragraph>{bfdiButtonDescription}</Paragraph>

      <MultiButton
        version="phoneNumber"
        phoneNumber={bfdiIntakeNumber}
        label={bfdiButtonText}
        type="light"
      />
      {shouldRenderCrisisButton && (
        <div>
          <Paragraph paragraph>{crisisLineDescription}</Paragraph>
          <MultiButton
            version="phoneNumber"
            phoneNumber={crisisLineNumber}
            label={crisisLineButtonText}
          />
        </div>
      )}
      <Paragraph paragraph>{headingForArticles}</Paragraph>
      <ArticleList articles={articles} />
      <hr />
    </>
  );
};

export default Resources;

import { graphql, PageProps } from "gatsby";
import React from "react";
import { OtherResources } from "../../../components/pages/ResultsPage/OtherResources";

/**
 * These types are in this file and not in a separate dedicated file because they will be removed
 * once we start migrating all of the "results" componenents into a single file
 */

type OtherResourcesPageTypes = {
  contentfulResultsPage: { otherResources: OtherResourcesTypes };
};

export type OtherResourcesTypes = {
  title: string;
  bfdiLink: string;
  bfdiLinkText: string;
  bfdiResourcesParagraph: string;
  faqLink: string;
  faqLinkText: string;
  faqResourcesParagraph: string;
};

const OtherResourcesPage = ({ data }: PageProps<OtherResourcesPageTypes>) => {
  return <OtherResources {...data.contentfulResultsPage.otherResources} />;
};

export default OtherResourcesPage;

export const query = graphql`
  query ($title: String) {
    contentfulResultsPage(title: { eq: $title }) {
      otherResources {
        title
        bfdiLink
        bfdiLinkText
        bfdiResourcesParagraph
        faqLink
        faqLinkText
        faqResourcesParagraph
      }
    }
  }
`;
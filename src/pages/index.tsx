import { Box } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Accordion from "../components/Accordion/Accordion";
import NeedHelp from "../components/pages/NeedHelp/NeedHelp";
import { ButtonStyled, LinkStyled } from "../index.styles";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const header = data.contentfulPage?.header;
  const body = data.contentfulPage?.body?.body;

  const assessmentButtons = data.contentfulPage?.assessmentButtons;

  return (
    <>
      <DefaultLayout>
        <h1>{header}</h1>
        <p>{body}</p>
        <NeedHelp />
        <Box>
          {assessmentButtons?.map((button) => {
            return (
              <LinkStyled
                to={button?.link ? button.link : ""}
                key={button?.text}
              >
                <ButtonStyled variant="contained">{button?.text}</ButtonStyled>
              </LinkStyled>
            );
          })}
        </Box>
        <Accordion />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    contentfulPage(title: { eq: "Home Page" }) {
      title
      header
      body {
        body
      }
      assessmentButtons {
        text
        link
      }
    }
    allContentfulAssessment {
      nodes {
        id
        title
      }
    }
  }
`;

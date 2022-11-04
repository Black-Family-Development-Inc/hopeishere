import Divider from "@mui/material/Divider";
import React from "react";
import { ArticleType } from "../ArticleTabs/ArticleTabs-types";
import {
  LinkStyled,
  ListItemIconStyled,
  ListItemStyled,
  ListItemTextStyled,
  ListStyled,
} from "./ArticleList.styles";

const ArticleList = ({ articles }: { articles: ArticleType[] }) => {
  return (
    <ListStyled>
      {articles.map(({ link, title, source }, index) => {
        return (
          <LinkStyled
            key={title + index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemStyled>
              <ListItemIconStyled></ListItemIconStyled>
              <ListItemTextStyled primary={title} secondary={`${source} -`} />
            </ListItemStyled>
            {articles.length !== index + 1 && <Divider />}
          </LinkStyled>
        );
      })}
    </ListStyled>
  );
};

export default ArticleList;

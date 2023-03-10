import { TypographyProps } from "@mui/material";
import React from "react";
import { TypographyStyled } from "./Paragraph.styles";
import { SxProps } from "./Paragraph-types";

const Paragraph = ({ children, sx, className }: TypographyProps & SxProps) => (
  <TypographyStyled
    sx={{
      ...sx,
      margin: sx?.margin || 0,
      fontWeight: sx?.fontWeight || 400,
      fontSize: sx?.fontSize || 16,
    }}
    className={className}
    paragraph
  >
    {children}
  </TypographyStyled>
);

export default Paragraph;

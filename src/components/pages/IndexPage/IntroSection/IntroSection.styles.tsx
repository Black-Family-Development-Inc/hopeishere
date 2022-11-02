import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";
import { boxStyles } from "../../../../styles/reusableStyles";

export const IntroSectionLinkStyled = styled(Link)({
  textDecoration: "none",

  "@media(max-width: 375px)": {
    width: "100%",
  },
});

export const ImageStyled = styled("img")({
  width: "100%",
});

export const ButtonContainerStyled = styled(Box)({
  marginTop: "36px",
  marginBottom: "66px",
});

export const ImageContainerStyled = styled(Box)({
  ".introSectionImage": {
    ...boxStyles,
  },
});

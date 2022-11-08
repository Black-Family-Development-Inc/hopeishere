import styled from "@emotion/styled";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { breakpoints, color, maxWidths } from "../../../../styles/theme";

export const NavStepperStyled = styled(Stepper)({
  ".MuiStepConnector-line": {
    borderColor: color.gray.two,
  },
  ".MuiStepConnector-root": {
    top: 30,
    left: "calc(-50% + 50px)",
    right: "calc(50% + 50px)",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    maxWidth: maxWidths.tablet.content,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.content,
  },
  marginLeft: 0,
  marginRight: 0,
  height: 64,
});

export const NavStepLabelStyled = styled(StepLabel)({
  ".MuiStepLabel-labelContainer": {
    width: "fit-content",
    ".MuiStepLabel-label": {
      fontSize: 14,
      letterSpacing: 0.1,
      marginTop: 8,
      color: color.gray.two,
      width: 80,
      textAlign: "center",
    },
  },
  ".MuiSvgIcon-root": {
    overflow: "visible",
    circle: {
      color: color.white,
      stroke: color.purple.two,
    },
    text: {
      fontSize: 12,
      fontWeight: 400,
      fill: color.purple.two,
      [`@media(min-width: ${breakpoints.tablet}px)`]: {
        maxWidth: maxWidths.tablet.content,
        fontSize: 14,
      },
    },
  },
  ".Mui-active": {
    svg: {
      fill: color.purple.two,
      text: {
        fill: color.white,
      },
    },
    color: color.gray.one,
    fontWeight: 500,
  },
  ".Mui-completed": {
    fontWeight: 400,
    svg: {
      color: color.purple.two,
    },
    color: color.gray.two,
  },
});

import { Tabs } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints, color } from "../../styles/theme";

export const TabsStyled = styled(Tabs)({
  ".MuiTabs-flexContainer": {
    width: "100%",
    justifyContent: "space-around",
  },
  ".MuiTabs-indicator": {
    borderRadius: "4px 4px 0 0",
    backgroundColor: color.teal.two,
    minHeight: "32px",
    [`@media(max-width: 374px)`]: {
      minHeight: "50px",
    },
  },
  ".MuiTab-root": {
    flex: 1,
    textTransform: "none",
    padding: 7,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.1px",
    color: color.gray.one,
    fontWeight: 500,
    minHeight: "48px",
    transition: "color 0s linear .10s",
    zIndex: 1,
    justifyContent: "flex-end",
    [`@media(max-width: 374px)`]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  ".MuiTab-root.Mui-selected": {
    color: color.white,
  },
});

export const TabHRStyled = styled("hr")({
  margin: 0,
  padding: 0,
  width: "100%",
  height: "1px",
  background: color.teal.two,
  borderStyle: "none",
  borderWidth: 0,
  marginBottom: "50px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginBottom: "58px",
  },
});

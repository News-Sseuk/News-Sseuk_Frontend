import { DefaultTheme } from "styled-components";

const colors = {
  bg01: "#FCFAFA", // Lighter shade
  bg02: "#EAE1E1",
  pink: "#FFC7C2",
  primary01: "#BCE2E7",
  primary02: "#6DAECA",
  main: "#003D62",
  point1: "#C3E086",
  point2: "#84BC0D",
  green: "#CDE499",
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

import Color from "color";

const generateColorsRange = (color: string, factor = 0.25) => [
  color,
  Color(color).lighten(factor).hex(),
  Color(color).darken(factor).hex(),
];

export const Colors = {
  gray1: "#333333",
  gray2: "#4F4F4F",
  gray3: "#828282",
  gray4: "#BDBDBD",
  gray5: "#E5E5E5",
  gray6: "#F2F2F2",
  gray7: "#fafafa",
  gray8: "#fefefe",
  white: "#ffffff",
  black: "#000000",

  divisor: "#f2f2f2",
} as const;

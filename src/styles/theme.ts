export type ThemeType = typeof light;

const commons = {
  textSize: {
    large: "2.2rem",
    normal: "1.4rem",
    small: "1.0rem",
  }
}

export const light = {
  ...commons,
  primary: "#FFF",
  secondary: "#FFF",
  tertiary: "#FFF",
  text: "#000",
  background: "#111",
}

export const dark: ThemeType = {
  ...commons,
  primary: '#385154',
  secondary: '#8CA3A6',
  tertiary: "#304042",
  text: '#FFF',
  background: '#1C1C1C',
}

const theme = dark;
export default theme;
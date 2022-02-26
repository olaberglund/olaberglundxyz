export type ThemeType = typeof light;

export const light = {
  primary: "#FFF",
  secondary: "#FFF",
  text: "#000",
  background: "#111",
}

export const dark: ThemeType = {
  primary: '#385154',
  secondary: '#8CA3A6',
  text: '#FFF',
  background: '#1C1C1C',
}

const theme = dark;
export default theme;
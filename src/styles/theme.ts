import { DefaultTheme } from 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: Text;
    color: Color;
    breakpoints: Breakpoints;
  }
}

type Text = {
  dark: string;
  light: string;
  size: {
    large: string;
    medium: string;
    small: string;
  }
};
type Color = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
};
type Breakpoints = {
  xl: string;
  large: string;
  medium: string;
  small: string;
};

const theme: DefaultTheme = {
  background: '#1C1C1C',
  text: {
    dark: '#000',
    light: '#fff',
    size: {
      large: "2.2rem",
      medium: "1.4rem",
      small: "1.0rem",
    }
  },
  color: {
    primary: '#385154',
    secondary: '#8CA3A6',
    tertiary: "#304042",
    quaternary: "#AD7D62",
  },
  breakpoints: {
    xl: '1200px',
    large: '1000px',
    medium: '580px',
    small: '360px',
  },
};

export default theme;
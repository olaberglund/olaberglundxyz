import {} from 'styled-components';
import { ThemeType } from './theme';

// extend default theme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
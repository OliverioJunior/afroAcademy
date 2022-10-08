import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  font-family: 'Source Sans 3', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
}

:root{
  --color-primary: #FFF;
  --color-secundary: #000;
  --color-tertiary: #4F3ACF;
  --color-quaternary: #5F5F5F;
}
`
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  font-family: 'Source Sans 3', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
}

button {
  cursor: pointer;
}
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
#root {
  max-width: var(---max-width);
  margin: 0 auto;
}

:root{
  --max-width: 75rem;
  --color-primary: #FFF;
  --color-secundary: #000;
  --color-tertiary: #4F3ACF;
  --color-quaternary: #5F5F5F;
}
`;

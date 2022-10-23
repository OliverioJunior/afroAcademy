import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  font-family: 'Source Sans 3', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
}
html, body {
  background-color: var(--gray-900);
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
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
}

:root{
  --max-width: 90rem;
  --color-primary: #FFF;
  --color-secundary: #000;
  --color-tertiary: #4F3ACF;
  --color-quaternary: #5F5F5F;

  --purple-400: #961fff;

  --yellow-100: #fff36b;

  --gray-100:#d3cde3;
  --gray-600:#1d1d1d;
  --gray-900:#030609;
}
`;

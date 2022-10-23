import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  margin-left: 19rem;
  background-color: var(--gray-600);
  display: flex;
  color: var(--gray-100);
`;

export const Welcome = styled.section`
  margin: auto 0 auto 4rem;
  padding-top: 11.3rem;
  cursor: default;
  h1 {
    font-size: 2.563rem;
    font-weight: 600;
  }

  span {
    color: #00dcff;
  }
  p {
    margin: 0.5rem 0 0.25rem 0.25rem;
    padding-bottom: 3.5rem;
  }
`;

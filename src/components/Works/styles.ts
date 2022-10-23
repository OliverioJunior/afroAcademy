import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  flex: 1;
  padding-left: 19rem;
  background-color: var(--gray-600);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-100);
`;

export const Wrapper = styled.section`
  max-width: 400px;
  height: 200px;
  flex: 1;
  display: flex;
  border-radius: 0.25rem;
  background-color: #372d4e;
  padding: 20px 0 0 20px;
  box-shadow: 4px 6px 44px #00dcff;
  img {
    height: 160px;
    border-radius: 0.5rem;
    &:hover {
      filter: opacity(0.9);
    }
  }
`;

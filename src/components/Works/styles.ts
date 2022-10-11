import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding-left: 19rem;
  background-color: var(--gray-600);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-100);
`;

export const Wrapper = styled.section`
  width: 400px;
  height: 200px;
  border-radius: 0.25rem;
  background-color: #fff;
  padding: 20px 0 0 20px;
  img {
    height: 160px;
    border-radius: 0.5rem;
    &:hover {
      filter:opacity(0.9);
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.button`
  width: 6rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  background-color: var(--color-tertiary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.65rem;
  text-transform: uppercase;
  border: 1px solid var(--purple-400);
  color: var(--yellow-100);
  letter-spacing: 1px;
  transition: background-color 1s, color 1s, border-color 1s;
  &:hover {
    color: var(--primary);
    background-color: var(--purple-400);
    border-color: 1px solid var(--color-tertiary);
  }
`;

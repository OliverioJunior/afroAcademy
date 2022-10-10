import styled from 'styled-components';

export const Container = styled.button`
  width: 6rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.65rem;
  text-transform: uppercase;
  border: none;
  color: var(--color-secundary);
  background-color: #00dcff;
  letter-spacing: 1px;
  transition: background-color 0.3s, color 0.3s, border-color 1s;
  &:hover {
    color: white;
    background-color: #00bbdd;
    border-color: 1px solid var(--color-tertiary);
  }
`;

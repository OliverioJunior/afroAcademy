import styled from 'styled-components';

export const Container = styled.header`
  width: 19rem;
  height: 100vh;
  position: fixed;
  background: #030609;
  color: #d3cde3;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  transition: 2s;
  /*  &:hover {
    box-shadow: inset -10px 0px 20px 1px var(--color-tertiary);
  } */

  img {
    width: 8rem;
    height: 8rem;
    padding: 0.25rem;
    border-radius: 50%;
    border: 3px solid var(--color-tertiary);
  }
  h1 {
    margin-top: 1rem;
    font-weight: 600;
  }
  h2 {
    margin-top: 1rem;
    font-weight: 400;
  }
  nav {
    width: 100%;
    margin-top: 1rem;
    ul {
      li {
        cursor: pointer;
        padding: 1rem;
        text-align: center;
        border-bottom: 1px solid var(--color-tertiary);
        transition: all 1s;
        &:hover {
          color: #fb1f;
          outline: 1px solid var(--color-tertiary);
        }
      }
    }
  }
`;
export const Skills = styled.div`
  display: flex;
  width: 100%;
  height: 3.375rem;
  align-items: center;
  i + i {
    margin-left: 10px;
  }
  i {
    height: 3.375rem;
    display: flex;
    align-items: flex-end;
    img {
      width: 2rem;
      height: 2rem;
      padding: 0rem;
      border-radius: 0.125rem;
      border: none;
      transition: 1s;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;
export const Adress = styled.address`
  img {
    width: 1rem;
    height: 1rem;
    border: none;
    padding: 0;
    margin-right: 0.25rem;
  }
`;

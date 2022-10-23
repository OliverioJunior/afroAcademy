import styled from 'styled-components';

export const Container = styled.header`
  width: 19rem;
  height: 100vh;
  position: fixed;
  background: var(--gray-900);
  color: var(--gray-100);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  transition: color outline 2s;
  /*  &:hover {
    box-shadow: inset -10px 0px 20px 1px var(--color-tertiary);
  } */
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
        transition: all 0.75s;
        &:hover {
          color: #00dcff;
          outline: 1px solid #00dcff;
        }
        :last-child {
          border: none;
          i {
            margin-left: 10px;
          }
        }
      }
    }
  }
  a {
    :hover {
      svg {
        fill: var(--yellow-100);
        margin-left: 10px;
      }
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    i + i {
      margin-left: 1rem;
    }
  }
`;
export const DivSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Skills = styled.div`
  display: flex;
  width: 100%;
  height: 3.375rem;
  align-items: center;
  i + i {
    margin-left: 10px;
  }
`;
export const IconAnimation = styled.i`
  height: 3.375rem;
  display: flex;
  align-items: flex-end;
  img {
    width: 2rem;
    height: 2rem;
    padding: 0rem;
    border-radius: 0.125rem;
    border: none;
    transition: 0.65s;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;
export const Adress = styled.address`
  margin-top: 0.55rem;
  img {
    width: 1rem;
    height: 1rem;
    border: none;
    padding: 0;
    margin-right: 0.25rem;
  }
`;

export const ImgIcon = styled.img`
  width: 8rem;
  height: 8rem;
  padding: 0.25rem;
  border-radius: 50%;
  border: 3px solid var(--color-tertiary);
`;
export const Footer = styled.footer`
  display: flex;
  gap: 15px;
`;

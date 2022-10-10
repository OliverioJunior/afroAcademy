import { Adress, Container, ImgIcon, Skills } from './styles';
import Perfil from '../../assets/imgs/Perfil.jpeg';
import typescript from '../../assets/svg/typescript.svg';
import Next from '../../assets/svg/Next.svg';
import React from '../../assets/svg/React.svg';
import Sass from '../../assets/svg/Sass.svg';
import Eslint from '../../assets/svg/Eslint.svg';
import local from '../../assets/svg/local.svg';
import GitHub from '../../assets/svg/GitHub.svg';
import Linkedin from '../../assets/svg/Linkedin.svg';
import StyledComponent from '../../assets/imgs/styled-components.png';

export const Header: React.FC = () => {
  return (
    <Container>
      <ImgIcon src={Perfil} />
      <h1>Olivério Júnior</h1>
      <p>Developer Frontend | ReactJs</p>
      <Adress>
        <i>
          <img src={local} alt="local" />
        </i>
        Itabaiana, Se, Brasil
      </Adress>
      <h2>
        <i>Main Skills</i>
      </h2>
      <Skills>
        <i>
          <img src={typescript} alt="Typescript" />
        </i>
        <i>
          <img src={Next} alt="Next" />
        </i>
        <i>
          <img src={React} alt="React" />
        </i>
        <i>
          <img src={Sass} alt="Sass" />
        </i>
        <i>
          <img src={StyledComponent} alt="Styled-Component" />
        </i>
        <i>
          <img src={Eslint} alt="Eslint" />
        </i>
      </Skills>
      <nav>
        <ul>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
          <li>
            <a
              href="https://github.com/OliverioJunior"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <img src={GitHub} />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/olivério-júnior/"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <img src={Linkedin} />
              </i>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

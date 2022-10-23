import { Container, Wrapper } from './styles';
import DevNews from '../../assets/imgs/DevNews.png';
import gitCollection from '../../assets/imgs/gitCollection.avif';
export const Works: React.FC = () => {
  /*  const Titulo = `Welcome,`;
  const that = " that's";
  const frase = "Let's work together"; */
  return (
    <Container>
      <Wrapper>
        <img src={DevNews} alt="DevNews" />
      </Wrapper>
      <Wrapper>
        <img src={gitCollection} alt="gitCollection" />
      </Wrapper>
    </Container>
  );
};

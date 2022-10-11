import { Button } from '../Button';
import { Container, Welcome } from './styles';

export const About: React.FC = () => {
  const Titulo = `Welcome,`;
  const that = " that's";
  const frase = "Let's work together";
  return (
    <Container>
      <Welcome>
        <h1>
          {Titulo}
          <span>{that}</span> my portfolio
        </h1>

        <p>
          <i>{frase}</i>
        </p>
        <Button>Contact me!</Button>
      </Welcome>
    </Container>
  );
};

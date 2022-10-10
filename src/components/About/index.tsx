import { Button } from '../Button';
import { Container, DivFalsa, Welcome } from './styles';

export const About: React.FC = () => {
  const Titulo = `Welcome,that's my portfolio`;
  const frase = "Let's work together";
  return (
    <Container>
      <DivFalsa />
      <Welcome>
        <h1>{Titulo}</h1>
        <p>
          <i>{frase}</i>
        </p>
        <Button>Contact me!</Button>
      </Welcome>
    </Container>
  );
};

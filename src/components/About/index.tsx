import { Container, DivFalsa, Welcome } from './styles';

export const About: React.FC = () => {
  const Titulo = 'Welcome, this my portfolio';
  const frase = "Let's work together";
  return (
    <Container>
      <DivFalsa />
      <Welcome>
        <h1>{Titulo}</h1>
        <p>{frase}</p>
      </Welcome>
    </Container>
  );
};

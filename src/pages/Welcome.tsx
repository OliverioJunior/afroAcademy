import { About, Header, Works, Container } from '../components';

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Header />
      <About />
      <Works />
    </Container>
  );
};

import { Wrapper } from './styles';

type ChildrenProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ChildrenProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

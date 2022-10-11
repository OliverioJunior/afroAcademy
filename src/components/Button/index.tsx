import { Container } from './styles';
import { ButtonHTMLAttributes } from 'react';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <Container {...props} />;
};

import styled from "styled-components";
import { SButton } from "./Button.style";

interface ButtonProps {
  $isPrimary?: boolean;
  buttonText: string;
}

const StyledButton = styled.button<{ $isPrimary?: boolean }>`
  background-color: ${({ $isPrimary }) => ($isPrimary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export const Button: React.FC<ButtonProps> = ({ $isPrimary, buttonText }) => (
  <StyledButton $isPrimary={$isPrimary}>{buttonText}</StyledButton>
);

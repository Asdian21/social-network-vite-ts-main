import styled, { css } from "styled-components";

export const ErrorMassage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin: 10px 0;
`;
interface SInterFaceProps {
  $isError?: boolean;
}

export const StyleInput = styled.input<SInterFaceProps>`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  &:last-child {
    margin-bottom: 40px;
  }
  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 200ms;
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 2px solid ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.red};
    `}

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;

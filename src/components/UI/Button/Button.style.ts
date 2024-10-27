import styled, { css } from "styled-components";

interface StyledButtonProps {
  isPrimary?: boolean;
}

export const SButton = styled.button<StyledButtonProps>`
  width: 100%;
  /* margin-bottom: 30px; */
  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primeColor};
  color: white;
  transition: 200ms;

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledBgc};
  }

  ${(props) =>
    props.isPrimary
      ? css`
          background-color: ${(props) => props.theme.colors.primeColor};
          color: white;
        `
      : css`
          background-color: ${(props) => props.theme.colors.lightGray};
          color: ${(props) => props.theme.colors.placeholderColor};
        `}

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;

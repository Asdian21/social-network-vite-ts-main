import styled, { css } from "styled-components";
interface IStyledPostProps {
  $isliked?: boolean;
  $isMarked?: boolean;
}

export const StylePost = styled.div<IStyledPostProps>`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.colors.elemsBgc};
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;
  ${(props) =>
    props.$isliked &&
    css`
      .icon-wrapper {
        .icon-like {
          fill: ${(props) => props.theme.colors.red};
          stroke: 0;
          stroke-width: 0;
        }

        .likes-count {
          color: ${(props) => props.theme.colors.red};
        }
      }
    `}
  ${(props) =>
    props.$isMarked &&
    css`
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    `}
 

  .UserElem {
    cursor: default;
    padding: 0;
    margin-bottom: 30px;

    &:hover {
      background-color: initial;
      scale: 1;
    }

    &::after {
      display: none; //? нижняя полоса в списке
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__text {
    margin-bottom: 20px;
  }
`;
export const StylePostSettings = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  background-color: gray;
  display: flex;
  border-radius: 30px;
  .settingBtn {
    border-radius: 30px;
    padding: 10px 15px;
    cursor: pointer;
    transition: all.3s;
    &:hover {
      background-color: orange;
      color: white;
    }
  }
`;

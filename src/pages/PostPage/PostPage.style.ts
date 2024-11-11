import styled from "styled-components";

export const SPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  width: 400px;

  h3 {
    font-size: 28px;
    text-align: center;
  }
`;

export const SPostButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  button {
    width: 120px;
    border: none;
    border-radius: 10px;
  }
`;

import styled from "styled-components";

export const SPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  width: 600px;
  
  h3 {
    font-size: 28px;
    text-align: center;
  }
  input{
    margin-bottom: 0 !important;
  }
`;
export const SPostButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  button{
    width:120px;
    border: none;
  }
`;

import styled from "styled-components";

export const Input = styled.input<{ $error?: boolean }>`
  border: 1px solid #e7e7e7;
  padding: 1.5rem 2rem;
  outline: ${(props) => (props.$error ? "1px solid red" : "none")};
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-family: inherit;
  &::placeholder {
    color: #afafb1;
  }
  &:focus {
    outline: 1px solid black;
  }
`;

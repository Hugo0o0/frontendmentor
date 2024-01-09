import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  color: ${({ theme }) => theme.colors.textColor};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.3rem;
  font-weight: 500;

  border: 1px solid rgba(130, 143, 163, 0.25);

  cursor: pointer;

  line-height: 23px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  transition: border 0.2s ease-in-out;

  border-radius: 4px;

  padding: 1rem 1.5rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default Button;

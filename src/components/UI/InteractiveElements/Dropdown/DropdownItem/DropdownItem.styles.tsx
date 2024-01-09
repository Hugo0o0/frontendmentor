import styled from "styled-components";

const Item = styled.li`
  font-size: 1.3rem;
  line-height: 23px;

  color: ${({ theme }) => theme.colors.steelGray};

  padding: 1rem 1.5rem;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Item;

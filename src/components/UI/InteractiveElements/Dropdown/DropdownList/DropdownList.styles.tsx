import styled from "styled-components";

const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.bodyBackground};

  border-radius: 8px;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default List;

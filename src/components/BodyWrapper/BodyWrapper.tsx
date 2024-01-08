import styled from "styled-components";

const BodyWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.bodyBackground};
`;

export default BodyWrapper;

import styled from "styled-components";

type TextFontWeightType = "500" | "700";

type TextStyle = {
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
};

type TextOptionsType = {
  [key in TextFontWeightType]: TextStyle;
};

const textOptions: TextOptionsType = {
  "500": {
    fontWeight: "500",
    fontSize: "1.3rem",
    lineHeight: "23px",
  },

  "700": {
    fontWeight: "700",
    fontSize: "1.2rem",
    lineHeight: "15px",
  },
};

interface TextProps {
  fontWeight?: TextFontWeightType;
}

const Text = styled.p<TextProps>`
  font-size: ${(props) => textOptions[props.fontWeight!].fontSize};
  font-weight: ${(props) => textOptions[props.fontWeight!].fontWeight};
  line-height: ${(props) => textOptions[props.fontWeight!].lineHeight};
`;

Text.defaultProps = {
  fontWeight: "500",
};

export default Text;

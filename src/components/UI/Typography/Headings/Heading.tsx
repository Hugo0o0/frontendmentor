import styled from "styled-components";

type HeadingOptionsType = {
  [key in HeadingVariantType]: HeadingStyle;
};

interface HeadingStyle {
  fontSize: string;
  fontWeight: string;
  letterSpacing?: string;
  color?: string;
}

const headingOptions: HeadingOptionsType = {
  xl: {
    fontSize: "2.4rem",
    fontWeight: "700",
  },

  lg: {
    fontSize: "1.8rem",
    fontWeight: "700",
  },

  md: {
    fontSize: "1.rem",
    fontWeight: "700",
  },
  sm: {
    fontSize: "1.2rem",
    fontWeight: "700",
    letterSpacing: "2.4px",
    color: "var(--steel-gray)",
  },
};

type HeadingVariantType = "xl" | "lg" | "md" | "sm";

interface HeadingProps {
  size?: HeadingVariantType;
}

const Heading = styled.h1<HeadingProps>`
  font-size: ${(props) => headingOptions[props.size!].fontSize};
  font-weight: ${(props) => headingOptions[props.size!].fontWeight};
  letter-spacing: ${(props) => headingOptions[props.size!].letterSpacing};
  color: ${(props) => headingOptions[props.size!]?.color};
`;

Heading.defaultProps = {
  size: "xl",
};

export default Heading;

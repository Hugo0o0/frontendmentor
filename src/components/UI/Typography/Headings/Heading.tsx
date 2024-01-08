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

  l: {
    fontSize: "1.8rem",
    fontWeight: "700",
  },

  m: {
    fontSize: "1.rem",
    fontWeight: "700",
  },
  s: {
    fontSize: "1.2rem",
    fontWeight: "700",
    letterSpacing: "2.4px",
    color: "var(--steel-gray)",
  },
};

type HeadingVariantType = "xl" | "l" | "m" | "s";

interface HeadingProps {
  variant?: HeadingVariantType;
}

const Heading = styled.h1<HeadingProps>`
  font-size: ${(props) => headingOptions[props.variant!].fontSize};
  font-weight: ${(props) => headingOptions[props.variant!].fontWeight};
  letter-spacing: ${(props) => headingOptions[props.variant!].letterSpacing};
  color: ${(props) => headingOptions[props.variant!]?.color};
`;

Heading.defaultProps = {
  variant: "xl",
};

export default Heading;

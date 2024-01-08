import styled from "styled-components";
import theme from "~/theme/theme";

type ButtonSizeType = "lg" | "sm";

interface ButtonProps {
  variant?: "primary" | "secondary" | "destructive";
  size?: ButtonSizeType;
}

type ButtonSizeOptionsType = {
  [key in ButtonSizeType]: ButtonStyle;
};

interface ButtonStyle {
  padding: string;
  fontSize: string;
}

const buttonSizeOptions: ButtonSizeOptionsType = {
  lg: {
    fontSize: "1.5rem",
    padding: "1.45rem 5.6rem",
  },
  sm: {
    fontSize: "1.3rem",
    padding: "1.2rem 6.4rem",
  },
};

const buttonVariantOptions = {
  primary: {
    backgroundColor: theme.light.colors.primary,
    color: theme.light.colors.white,
    hoverBackgroundColor: theme.light.colors.primaryLight,
  },

  secondary: {
    backgroundColor: "rgba(99, 95, 199, 0.10)",
    color: theme.light.colors.primary,
    hoverBackgroundColor: "rgba(99, 95, 199, 0.25)",
  },

  destructive: {
    backgroundColor: theme.light.colors.dangerRed,
    color: theme.light.colors.white,
    hoverBackgroundColor: theme.light.colors.lightRed,
  },
};

const Button = styled.button<ButtonProps>`
  background-color: ${({ variant, theme }) =>
    variant === "secondary"
      ? theme.colors.buttonSecondary
      : buttonVariantOptions[variant!].backgroundColor};
  color: ${({ variant }) => buttonVariantOptions[variant!].color};

  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => buttonSizeOptions[props.size!].fontSize};

  border-radius: 100px;

  padding: ${(props) => buttonSizeOptions[props.size!].padding};

  transition: background-color 0.2s;

  font-weight: 700;

  cursor: pointer;

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === "secondary"
        ? theme.colors.buttonSecondaryHover
        : buttonVariantOptions[variant!].hoverBackgroundColor};
  }
`;

Button.defaultProps = {
  variant: "primary",
  size: "sm",
};

export default Button;

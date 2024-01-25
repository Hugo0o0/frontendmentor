import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "destructive" | "unstyled";
  size: "small" | "large";
}

const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    "px-6 font-bold rounded-full transition-all",

    {
      "bg-primary-default text-white hover:bg-light-purple":
        variant === "primary",
      "bg-primary-default/10 text-primary-default hover:bg-primary-default/25":
        variant === "secondary",
      "bg-danger-red text-white hover:bg-danger-red-light":
        variant === "destructive",
      "": variant === "unstyled",

      "text-md py-5": size === "large",
      "text-sm py-4": size === "small",
    },
    className
  );

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "small",
};

export default Button;

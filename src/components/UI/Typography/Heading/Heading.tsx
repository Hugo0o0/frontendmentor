import classNames from "classnames";

type HeadingSize = "xl" | "lg" | "md" | "sm";

interface HeadingProps {
  children: React.ReactNode;
  size: HeadingSize;
  className?: string;
}

const headingClassNames: {
  [key in HeadingSize]: {
    classes: string;
  };
} = {
  xl: {
    classes: "text-xl leading-xl",
  },
  lg: {
    classes: "text-lg leading-lg",
  },
  md: {
    classes: "text-md leading-md",
  },
  sm: {
    classes: "text-sm leading-sm text-steel-blue tracking-[2.4px]",
  },
};

const Heading = ({ children, size, className }: HeadingProps) => {
  const classes = classNames(
    headingClassNames[size].classes,
    "font-bold",
    className
  );

  return <h1 className={classes}>{children}</h1>;
};

Heading.defaultProps = {
  size: "md",
};

export default Heading;

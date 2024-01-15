import useTheme from "@/utils/hooks/useTheme";

const HeaderLogo = () => {
  const { theme } = useTheme();

  const logo = theme === "dark" ? <p>Dark Theme</p> : <p> Light Theme </p>;

  return <div>{logo}</div>;
};

export default HeaderLogo;
